// ─── Shopify Storefront Configuration ────────────────────────────────────────
const SHOPIFY_DOMAIN = 'membermarkets.myshopify.com';
const STOREFRONT_TOKEN = 'e3ba96ebfc3a6490b72f916989954046';
const STOREFRONT_API = `https://${SHOPIFY_DOMAIN}/api/2024-10/graphql.json`;

// ─── Category + Icon Mapping ──────────────────────────────────────────────────
const TAG_CAT_MAP = [
  ['Musical Instruments', 'Musical Instruments', 'ti-music'],
  ['Guitar Amps',         'Musical Instruments', 'ti-music'],
  ['Bass Guitars',        'Musical Instruments', 'ti-music'],
  ['Knives & Tools',      'Outdoor & Sports',   'ti-knife'],
  ['Pocket Knives',       'Outdoor & Sports',   'ti-knife'],
  ['Hunting & Shooting',  'Outdoor & Sports',   'ti-crosshair'],
  ['Sports & Outdoor Recreation', 'Outdoor & Sports', 'ti-mountain'],
  ['GPS & Automotive',    'GPS & Automotive',   'ti-gps'],
  ['Health & Fitness',    'Health & Fitness',   'ti-heartbeat'],
  ['Kitchen',             'Kitchen',            'ti-tools-kitchen-2'],
  ['Cameras',             'Cameras',            'ti-camera'],
  ['Computers',           'Computers',          'ti-device-laptop'],
  ['Home & Office',       'Home & Office',      'ti-home'],
  ['Audio',               'Audio',              'ti-device-speaker'],
];

const TYPE_CAT_MAP = {
  'Folding Pocket Knife':  ['Outdoor & Sports',    'ti-knife'],
  'Guitar Amplifier':      ['Musical Instruments', 'ti-music'],
  'Bass Combo Amplifier':  ['Musical Instruments', 'ti-music'],
};

function mapCategory(productType, tags) {
  for (const [prefix, cat, icon] of TAG_CAT_MAP) {
    if (tags.some(t => t === prefix || t.startsWith(prefix + '-'))) return { cat, icon };
  }
  if (TYPE_CAT_MAP[productType]) {
    const [cat, icon] = TYPE_CAT_MAP[productType];
    return { cat, icon };
  }
  return { cat: productType || 'Other', icon: 'ti-package' };
}

// ─── Shopify API Helpers ──────────────────────────────────────────────────────
async function storefrontFetch(query, variables = {}) {
  const res = await fetch(STOREFRONT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  return res.json();
}

async function fetchAllShopifyProducts() {
  const all = [];
  let cursor = null;
  let hasMore = true;
  let idx = 1;

  while (hasMore) {
    const json = await storefrontFetch(`
      query($cursor: String) {
        products(first: 250, after: $cursor) {
          edges {
            node {
              id title handle description vendor productType tags availableForSale
              priceRange { minVariantPrice { amount } }
              compareAtPriceRange { minVariantPrice { amount } }
              images(first: 1) { edges { node { url } } }
              variants(first: 1) { edges { node { id availableForSale } } }
            }
          }
          pageInfo { hasNextPage endCursor }
        }
      }
    `, { cursor });

    if (json.errors) { console.error('Shopify API error:', json.errors); break; }

    const { edges, pageInfo } = json.data.products;

    edges.forEach(({ node }) => {
      const price = parseFloat(node.priceRange.minVariantPrice.amount);
      const ca = parseFloat(node.compareAtPriceRange?.minVariantPrice?.amount || 0);
      const orig = ca > price ? parseFloat(ca.toFixed(2)) : null;
      const { cat, icon } = mapCategory(node.productType, node.tags);
      const isNew = node.tags.some(t => /^new$/i.test(t.trim()) || /new[-\s]arrival/i.test(t));

      all.push({
        id: idx++,
        variantId: node.variants.edges[0]?.node.id || null,
        handle: node.handle,
        brand: node.vendor || 'Unknown',
        name: node.title,
        cat,
        price,
        orig,
        icon,
        isNew,
        sale: !!orig,
        img: node.images.edges[0]?.node.url || null,
        desc: node.description || '',
        features: [],
        availableForSale: node.availableForSale,
      });
    });

    hasMore = pageInfo.hasNextPage;
    cursor = pageInfo.endCursor;
  }

  return all;
}

async function createShopifyCheckout() {
  const lines = cart
    .filter(i => i.variantId)
    .map(i => ({ merchandiseId: i.variantId, quantity: i.qty }));
  if (!lines.length) return null;
  const json = await storefrontFetch(`
    mutation($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { checkoutUrl }
        userErrors { field message }
      }
    }
  `, { lines });
  return json.data?.cartCreate?.cart?.checkoutUrl || null;
}

// ─── State ────────────────────────────────────────────────────────────────────
let products = [];
let cart = [];

// ─── Product Card HTML ────────────────────────────────────────────────────────
function prodHTML(p) {
  const d = p.orig ? Math.round((1 - p.price / p.orig) * 100) : 0;
  const imgEl = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;padding:0.75rem;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const iconEl = `<div style="display:${p.img ? 'none' : 'flex'};width:100%;height:100%;align-items:center;justify-content:center;"><i class="ti ${p.icon}" style="font-size:48px;color:var(--g4);"></i></div>`;
  return `<div class="pcard" onclick="openProduct(${p.id})">
    <div class="pimg" style="position:relative;overflow:hidden;">${imgEl}${iconEl}
      <div class="pbdgs">${p.sale && p.orig ? `<span class="pbdg pbdg-s">Save ${d}%</span>` : ''} ${p.isNew ? `<span class="pbdg pbdg-n">New</span>` : ''}</div>
      <button class="qadd" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>
    </div>
    <div class="pbody">
      <div class="pbrand">${p.brand}</div>
      <div class="pname">${p.name}</div>
      <div class="ppr"><span class="pprice">$${p.price.toFixed(2)}</span>${p.orig ? `<span class="pwas">$${p.orig.toFixed(2)}</span><span class="psave">−$${(p.orig - p.price).toFixed(2)}</span>` : ''}</div>
    </div>
  </div>`;
}

// ─── Render ───────────────────────────────────────────────────────────────────
function showLoading() {
  const spinner = `<div style="grid-column:1/-1;text-align:center;padding:4rem 0;color:var(--g3);font-size:13px;font-family:'Montserrat',sans-serif;letter-spacing:0.05em;">Loading products…</div>`;
  ['feat-grid','shop-grid'].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = spinner; });
  const ng = document.getElementById('new-grid'); if (ng) ng.innerHTML = '';
}

async function render() {
  showLoading();
  try {
    products = await fetchAllShopifyProducts();
  } catch (e) {
    document.getElementById('feat-grid').innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:#cc0000;">Failed to load products. Please refresh.</div>`;
    return;
  }
  buildFilters();
  document.getElementById('feat-grid').innerHTML = products.filter(p => p.sale || p.isNew).slice(0, 8).map(prodHTML).join('');
  document.getElementById('new-grid').innerHTML = products.filter(p => p.isNew).slice(0, 4).map(prodHTML).join('');
  applyFilters();
  buildBrandsGrid();
  buildBrandTicker();
}

// ─── Filters ──────────────────────────────────────────────────────────────────
function buildFilters() {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  const cats   = [...new Set(products.map(p => p.cat))].sort();
  const sgs    = document.querySelectorAll('.sidebar .sg');

  if (sgs[0]) {
    sgs[0].innerHTML = '<h4>Brand</h4>'
      + `<label class="frow"><input type="checkbox" id="fb-all" checked onchange="applyFilters()"> All Brands</label>`
      + brands.map(b => `<label class="frow"><input type="checkbox" class="fbrand" value="${b}" onchange="applyFilters()"> ${b}</label>`).join('');
  }
  if (sgs[1]) {
    sgs[1].innerHTML = '<h4>Category</h4>'
      + `<label class="frow"><input type="checkbox" id="fc-all" checked onchange="applyFilters()"> All</label>`
      + cats.map(c => `<label class="frow"><input type="checkbox" class="fcat" value="${c}" onchange="applyFilters()"> ${c}</label>`).join('');
  }
}

function applyFilters() {
  const bb = [...document.querySelectorAll('.fbrand:checked')].map(e => e.value);
  const cc = [...document.querySelectorAll('.fcat:checked')].map(e => e.value);
  const pv = document.querySelector('input[name="fp"]:checked')?.value || 'all';
  const so = document.getElementById('f-sale')?.checked;
  const no = document.getElementById('f-new')?.checked;
  const sv = document.querySelector('.sortsel')?.value || 'feat';

  let f = products.filter(p => {
    if (bb.length && !bb.includes(p.brand)) return false;
    if (cc.length && !cc.includes(p.cat))   return false;
    if (pv === '0-50'    && p.price >= 50)               return false;
    if (pv === '50-200'  && (p.price < 50  || p.price >= 200)) return false;
    if (pv === '200-500' && (p.price < 200 || p.price >= 500)) return false;
    if (pv === '500+'    && p.price < 500)               return false;
    if (so && !p.sale)   return false;
    if (no && !p.isNew)  return false;
    return true;
  });

  if (sv === 'lo') f.sort((a, b) => a.price - b.price);
  else if (sv === 'hi') f.sort((a, b) => b.price - a.price);
  else if (sv === 'new') f.sort((a, b) => b.isNew - a.isNew);

  document.getElementById('shop-grid').innerHTML = f.length
    ? f.map(prodHTML).join('')
    : `<p style="color:#8a8a8a;font-size:13px;grid-column:1/-1;padding:3rem 0;text-align:center;">No products match the current filters.</p>`;
  document.getElementById('shop-count').textContent = `Showing ${f.length} of ${products.length} products`;
}

// ─── Search ───────────────────────────────────────────────────────────────────
function handleSearch() {
  const q = (document.getElementById('search-input').value || '').trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';
  if (!q) { if (document.getElementById('pg-shop').classList.contains('on')) applyFilters(); return; }
  showPg('shop');
  document.querySelectorAll('.fbrand,.fcat').forEach(cb => cb.checked = false);
  const faAll = document.getElementById('fb-all'); if (faAll) faAll.checked = true;
  const fcAll = document.getElementById('fc-all'); if (fcAll) fcAll.checked = true;
  const fpAll = document.querySelector('input[name="fp"][value="all"]'); if (fpAll) fpAll.checked = true;
  const results = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  );
  const raw = document.getElementById('search-input').value.trim();
  document.getElementById('shop-title').textContent = `Results for "${raw}"`;
  document.getElementById('shop-count').textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;
  document.getElementById('shop-grid').innerHTML = results.length
    ? results.map(prodHTML).join('')
    : `<p style="color:#8a8a8a;font-size:13px;grid-column:1/-1;padding:3rem 0;text-align:center;">No results found for "<strong>${raw}</strong>"</p>`;
}

function clearSearch() {
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  if (document.getElementById('pg-shop').classList.contains('on')) {
    document.getElementById('shop-title').textContent = 'All Products';
    applyFilters();
  }
  if (inp) inp.focus();
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function filterBrand(b) {
  showPg('shop');
  document.querySelectorAll('.fbrand').forEach(cb => cb.checked = cb.value === b);
  const fba = document.getElementById('fb-all'); if (fba) fba.checked = false;
  applyFilters();
}
function filterCat(c) {
  showPg('shop');
  document.getElementById('shop-title').textContent = c;
  document.querySelectorAll('.fcat').forEach(cb => cb.checked = cb.value === c);
  const fca = document.getElementById('fc-all'); if (fca) fca.checked = false;
  applyFilters();
}
function showPg(n) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  const el = document.getElementById('pg-' + n);
  if (el) { el.classList.add('on'); } else { document.getElementById('pg-home').classList.add('on'); }
  if (n === 'shop') document.getElementById('shop-title').textContent = 'All Products';
  if (n === 'cart') renderCartPage();
  if (n === 'checkout') renderCheckout();
  window.scrollTo(0, 0);
}
function setNmBottom() {
  const nm = document.querySelector('.nm');
  if (nm) document.documentElement.style.setProperty('--nm-bottom', nm.getBoundingClientRect().bottom + 'px');
}

// ─── Auth ─────────────────────────────────────────────────────────────────────
function doLogin() {
  const u = document.getElementById('lu').value.trim();
  const p = document.getElementById('lp').value.trim();
  if (u === 'warrior' && p === 'wwp2026') {
    document.getElementById('s-login').classList.remove('on');
    document.getElementById('s-site').classList.add('on');
    render();
  } else {
    const e = document.getElementById('lerr');
    e.classList.add('on');
    setTimeout(() => e.classList.remove('on'), 3000);
  }
}
function doLogout() {
  document.getElementById('s-site').classList.remove('on');
  document.getElementById('s-login').classList.add('on');
  document.getElementById('lu').value = '';
  document.getElementById('lp').value = '';
  cart = []; updateCartBadge();
}
['lu', 'lp'].forEach(id => document.getElementById(id).addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); }));

// ─── Cart ─────────────────────────────────────────────────────────────────────
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(x => x.id === id);
  if (ex) ex.qty++; else cart.push({ ...p, qty: 1 });
  updateCartBadge();
  showToast(p.brand + ' — Added to cart');
}
function removeFromCart(id) { cart = cart.filter(x => x.id !== id); updateCartBadge(); renderCartPage(); }
function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (item) item.qty = Math.max(1, item.qty + delta);
  updateCartBadge(); renderCartPage();
}
function updateCartBadge() {
  document.getElementById('cbdg').textContent = cart.reduce((s, x) => s + x.qty, 0);
}

function renderCartPage() {
  const list  = document.getElementById('cart-items-list');
  const count = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cart-item-count').textContent = count;
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty-state"><i class="ti ti-shopping-cart"></i><h3>Your cart is empty</h3><p>Add some products to get started.</p><button class="btn-primary" onclick="showPg('shop')">Browse Products</button></div>`;
    document.getElementById('cart-summary-items').innerHTML = '';
  } else {
    list.innerHTML = cart.map(item => `
      <div class="cart-table-item">
        <div class="cti-img">${item.img
          ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;padding:4px;">`
          : `<i class="ti ${item.icon}"></i>`}</div>
        <div>
          <div class="cti-brand">${item.brand}</div>
          <div class="cti-name">${item.name}</div>
          <button class="cti-remove" onclick="removeFromCart(${item.id})"><i class="ti ti-trash" style="font-size:14px;"></i> Remove</button>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <input class="qty-val" type="text" value="${item.qty}" readonly>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
        <div class="cti-price">$${(item.price * item.qty).toFixed(2)}</div>
      </div>`).join('');
    document.getElementById('cart-summary-items').innerHTML = cart.map(i =>
      `<div class="csp-row" style="font-size:12px;border-bottom:1px solid var(--border);padding:5px 0;">
        <span style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${i.brand} ${i.name.split(' ').slice(0,3).join(' ')}${i.qty > 1 ? ' × ' + i.qty : ''}</span>
        <span style="font-size:12px;color:var(--g1);">$${(i.price * i.qty).toFixed(2)}</span>
      </div>`).join('');
  }
  const sub   = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const tax   = sub * 0.08;
  const total = sub + tax;
  document.getElementById('cs-sub').textContent   = '$' + sub.toFixed(2);
  document.getElementById('cs-ship').textContent  = sub >= 75 ? 'Free' : 'Calculated at checkout';
  document.getElementById('cs-tax').textContent   = '$' + tax.toFixed(2);
  document.getElementById('cs-total').textContent = '$' + total.toFixed(2);
}

function renderCheckout() {
  const sub   = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const tax   = sub * 0.08;
  const total = sub + tax;
  document.getElementById('co-sub').textContent      = '$' + sub.toFixed(2);
  document.getElementById('co-tax').textContent      = '$' + tax.toFixed(2);
  document.getElementById('co-total').textContent    = '$' + total.toFixed(2);
  document.getElementById('co-btn-total').textContent = '$' + total.toFixed(2);
  document.getElementById('co-items').innerHTML = cart.length
    ? cart.map(i => `<div class="oi"><span>${i.brand} — ${i.name.split(' ').slice(0,4).join(' ')}${i.qty > 1 ? ' × ' + i.qty : ''}</span><span>$${(i.price * i.qty).toFixed(2)}</span></div>`).join('')
    : `<p style="font-size:12px;color:var(--g3);">No items in cart.</p>`;
}

async function placeOrder() {
  if (!cart.length) return;
  const btn = document.querySelector('#pg-checkout .btn-red');
  if (btn) { btn.disabled = true; btn.textContent = 'Creating checkout…'; }
  try {
    const url = await createShopifyCheckout();
    if (url) {
      window.location.href = url;
    } else {
      showToast('Could not create checkout. Please try again.');
      if (btn) { btn.disabled = false; btn.innerHTML = `Place Order — <span id="co-btn-total">$${(cart.reduce((s,x)=>s+x.price*x.qty,0)*1.08).toFixed(2)}</span>`; }
    }
  } catch {
    showToast('Connection error. Please try again.');
    if (btn) { btn.disabled = false; btn.innerHTML = `Place Order — <span id="co-btn-total">$${(cart.reduce((s,x)=>s+x.price*x.qty,0)*1.08).toFixed(2)}</span>`; }
  }
}

// ─── Utilities ────────────────────────────────────────────────────────────────
function toggleFaq(el) {
  const ans = el.nextElementSibling, icon = el.querySelector('i'), isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q i').forEach(i => i.className = 'ti ti-chevron-down');
  if (!isOpen) { ans.classList.add('open'); icon.className = 'ti ti-chevron-up'; }
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 2800);
}
function showContactPage() { showPg('contact'); }
function filterSale() { showPg('shop'); const fSale = document.getElementById('f-sale'); if (fSale) fSale.checked = true; applyFilters(); }

// ─── Mega Nav ─────────────────────────────────────────────────────────────────
function openDrop(id)   { document.getElementById('mn-' + id).classList.add('open'); }
function closeDrop(id)  { document.getElementById('mn-' + id).classList.remove('open'); }
function toggleDrop(id) {
  document.getElementById('mn-' + id).classList.toggle('open');
  ['products','brands'].filter(x => x !== id).forEach(x => document.getElementById('mn-' + x).classList.remove('open'));
}
function filterCatClose(cat, dropId)  { closeDrop(dropId); filterCat(cat); }
function showPgClose(pg, dropId)      { closeDrop(dropId); showPg(pg); }
document.addEventListener('click', e => { if (!e.target.closest('.mnitem')) ['products','brands'].forEach(closeDrop); });

// ─── Brands Grid + Ticker (live from Shopify) ─────────────────────────────────
function buildBrandsGrid() {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  const counts = {};
  products.forEach(p => { counts[p.brand] = (counts[p.brand] || 0) + 1; });
  document.getElementById('brands-grid').innerHTML = brands.map(b =>
    `<div class="mnbrand-item" onclick="filterBrandClose('${b.replace(/'/g,"\\'")}')">
       <span>${b}</span><span class="mnbrand-count">${counts[b]}</span>
     </div>`
  ).join('');
}
function filterBrandClose(b) { closeDrop('brands'); filterBrand(b); }

function buildBrandTicker() {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  const all = [...brands, ...brands];
  const el = document.getElementById('brand-ticker');
  if (!el) return;
  el.innerHTML = all.map(b =>
    `<div class="brand-tile" onclick="filterBrand('${b.replace(/'/g,"\\'")}')">
       <span style="font-family:'Montserrat',sans-serif;font-size:16px;font-weight:800;color:var(--navy);letter-spacing:0.08em;text-transform:uppercase;">${b}</span>
     </div>`
  ).join('');
}

// ─── Product Detail Page ──────────────────────────────────────────────────────
let pdpCurrentId = null, pdpQty = 1;

function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  pdpCurrentId = id; pdpQty = 1;

  document.getElementById('pdp-breadcrumb').innerHTML =
    `<span onclick="showPg('home')">Home</span>
     <i class="ti ti-chevron-right"></i>
     <span onclick="filterCat('${p.cat}')">${p.cat}</span>
     <i class="ti ti-chevron-right"></i>
     <span style="color:var(--navy);font-weight:600;">${p.name}</span>`;

  const img = document.getElementById('pdp-img'), icon = document.getElementById('pdp-icon');
  if (p.img) {
    img.src = p.img; img.alt = p.name; img.style.display = ''; icon.style.display = 'none'; icon.innerHTML = '';
  } else {
    img.style.display = 'none'; icon.style.display = 'flex'; icon.innerHTML = `<i class="ti ${p.icon}"></i>`;
  }

  document.getElementById('pdp-brand').textContent = p.brand;
  document.getElementById('pdp-title').textContent = p.name;

  const d = p.orig ? Math.round((1 - p.price / p.orig) * 100) : 0;
  document.getElementById('pdp-badges').innerHTML =
    `${p.sale && p.orig ? `<span class="pbdg pbdg-s">Save ${d}%</span>` : ''} ${p.isNew ? `<span class="pbdg pbdg-n">New</span>` : ''}`;

  document.getElementById('pdp-price-row').innerHTML =
    `<span class="pdp-price">$${p.price.toFixed(2)}</span>
     ${p.orig ? `<span class="pdp-was">$${p.orig.toFixed(2)}</span><span class="pdp-save">Save $${(p.orig - p.price).toFixed(2)}</span>` : ''}`;

  document.getElementById('pdp-desc').textContent = p.desc || '';
  document.getElementById('pdp-features').innerHTML = (p.features || []).map(f => `<li>${f}</li>`).join('');
  document.getElementById('pdp-qty').textContent = '1';

  const related = products.filter(x => x.id !== id && (x.brand === p.brand || x.cat === p.cat)).slice(0, 4);
  document.getElementById('pdp-related-grid').innerHTML = related.map(prodHTML).join('');

  showPg('product');
  window.scrollTo(0, 0);
}

function pdpQtyChange(delta) { pdpQty = Math.max(1, pdpQty + delta); document.getElementById('pdp-qty').textContent = pdpQty; }
function pdpAddToCart() { if (!pdpCurrentId) return; for (let i = 0; i < pdpQty; i++) addToCart(pdpCurrentId); }
