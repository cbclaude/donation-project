const products=[
  {id:1,brand:'Garmin',name:'Enduro 2 Ultraperformance Multisport GPS Watch',cat:'GPS & Automotive',price:799.99,orig:null,icon:'ti-activity',isNew:false,sale:false,
   img:'https://res.garmin.com/en/products/010-02754-00/v/cf-lg.jpg',
   desc:'Run to the ends of the earth with Enduro 2. Built for ultra-distance athletes, this ultraperformance multisport GPS watch features solar charging, a superbright LED flashlight, and up to 150 hours of GPS battery life. The rugged titanium case and UltraFit nylon band keep weight minimal so nothing slows you down.',
   features:['Up to 150 hr GPS battery with solar charging','Superbright LED flashlight with red safety mode','NextFork map guide & grade-adjusted pace','Adventure Racing World Series approved app','TopoActive preloaded maps & ski maps','Multi-band GNSS with SatIQ technology','MIL-STD-810 tested · water-rated to 100m']},

  {id:2,brand:'Garmin',name:'Instinct Crossover Rugged Hybrid GPS Smartwatch',cat:'GPS & Automotive',price:349.99,orig:399.99,icon:'ti-gps',isNew:false,sale:true,
   img:'https://res.garmin.com/en/products/010-02730-00/v/cf-lg.jpg',
   desc:'Contradict the common with Instinct Crossover — a rugged hybrid GPS smartwatch that fuses classic analog style with advanced smart features. RevoDrive technology powers two independent motors controlling the traditional watch hands, letting you enjoy a timeless look without sacrificing GPS or health tracking.',
   features:['Analog hands powered by RevoDrive technology','MIL-STD-810 tested · 100m water resistance','Up to 28 days battery life in smartwatch mode','Multi-GNSS support (GPS, GLONASS, Galileo)','Heart rate, Pulse Ox & stress monitoring','Smart notifications, Garmin Pay','Available in Standard & Solar editions']},

  {id:3,brand:'Garmin',name:'epix Sapphire Gen 2 Adventure Smartwatch',cat:'GPS & Automotive',price:899.99,orig:999.99,icon:'ti-watch',isNew:false,sale:true,
   img:'https://res.garmin.com/en/products/010-02582-20/v/cf-lg.jpg',
   desc:'Wear epix — be epic. With its stunning AMOLED touchscreen display and advanced health monitoring, epix Gen 2 Sapphire is the premium active smartwatch for serious athletes. Stay connected, track every metric, and navigate anywhere with preloaded TopoActive maps.',
   features:['Brilliant AMOLED always-on display','30+ built-in sports apps','Multi-band GNSS for superior accuracy','TopoActive & ski maps preloaded','Garmin Pay & music storage (650+ songs)','24/7 health: Pulse Ox, HRV, respiration','Sapphire crystal lens · titanium bezel']},

  {id:4,brand:'Garmin',name:'Alpha TT 25 Dog GPS Tracking & Training Collar',cat:'Outdoor & Sports',price:549.99,orig:null,icon:'ti-dog-bowl',isNew:true,sale:false,
   img:'https://res.garmin.com/en/products/010-02600-00/v/cf-lg.jpg',
   desc:'Track and train your pack with the Alpha TT 25 collar. A rugged yet slim housing fits a range of dog sizes. Pair with compatible Alpha handhelds to track up to 20 dogs simultaneously, with GPS updates every 2.5 seconds and training stimulation up to 9 miles away.',
   features:['GPS tracking up to 9 miles range','Tracks up to 20 dogs per handheld','2.5-second GPS update rate','E-collar training with tone & vibration','40-hour rechargeable battery life','IPX7 waterproof rated','User-replaceable contact points']},

  {id:5,brand:'Logitech',name:'MX Master 3S Wireless Performance Mouse',cat:'Computers',price:74.99,orig:99.99,icon:'ti-mouse',isNew:false,sale:true,
   img:'https://resource.logitech.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png',
   desc:'The MX Master 3S is built for creators and power users who demand more. With an ultrafast 8K DPI sensor, near-silent clicks, and the MagSpeed electromagnetic scroll wheel, it works across three devices simultaneously via Bluetooth or USB receiver.',
   features:['8,000 DPI Darkfield sensor — works on glass','MagSpeed scroll wheel: 1,000 lines/sec','90% quieter clicks vs MX Master 3','Bluetooth + USB Logi Bolt receiver','Multi-device: pair up to 3 computers','70-day battery life','Ergonomic sculpted design']},

  {id:6,brand:'Logitech',name:'G Pro X Superlight 2 Gaming Mouse',cat:'Computers',price:129.99,orig:159.99,icon:'ti-mouse',isNew:true,sale:true,
   img:'https://resource.logitech.com/w_692,c_lpad,ar_1:1,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/mice/g-pro-x-superlight-2/gallery/g-pro-x-superlight-2-mouse-top-view-black.png',
   desc:'The G Pro X Superlight 2 is engineered for esports champions. Weighing under 60g with the new HERO 2 25K sensor, LIGHTSPEED wireless and zero-additive PTFE feet, this is the mouse professional gamers trust on the biggest stages.',
   features:['New HERO 2 sensor — 25,600 DPI max','Under 60g ultralight design','LIGHTSPEED pro-grade wireless','Zero-additive PTFE glide feet','5 programmable buttons','95-hour battery life','Used by pro esports athletes worldwide']},

  {id:7,brand:'Wusthof',name:'Classic 8-Inch Chef\'s Knife',cat:'Kitchen',price:159.99,orig:null,icon:'ti-tools-kitchen-2',isNew:false,sale:false,
   img:'https://www.wusthof.com/cdn/shop/files/4582-20_Classic_Chefs_Knife_8in_side_web.jpg',
   desc:'The Wusthof Classic 8-inch Chef\'s Knife is the workhorse of the kitchen. Forged from a single piece of high-carbon stainless steel in Solingen, Germany, it features Wusthof\'s Precision Edge Technology (PEtec) for 20% sharper edges with twice the edge retention.',
   features:["Full bolster & finger guard for safety","PEtec laser-controlled edge — 58° Rockwell","Forged from X50CrMoV15 high-carbon steel","Triple-riveted black polypropylene handle","Made in Solingen, Germany since 1814","Dishwasher safe (hand wash recommended)","Lifetime warranty"]},

  {id:8,brand:'Wusthof',name:'Classic Ikon 7-Piece Knife Block Set',cat:'Kitchen',price:649.99,orig:749.99,icon:'ti-tools-kitchen-2',isNew:false,sale:true,
   img:'https://www.wusthof.com/cdn/shop/files/1090370702_Classic_Ikon_7pc_Knife_Block_Set_side_web.jpg',
   desc:'The Classic Ikon 7-piece set delivers the full Wusthof kitchen arsenal with elegant half-bolster design for effortless sharpening and a full-tang handle for perfect balance. Includes a handsome acacia wood block to display your collection.',
   features:['3.5-in paring · 6-in utility · 8-in bread knife','8-in cook\'s knife · 9-in honing steel','Kitchen shears · Acacia wood block','Half-bolster allows full-length honing','PEtec precision-ground edge','X50CrMoV15 high-carbon steel','Made in Solingen, Germany']},

  {id:9,brand:'Polaroid',name:'Now+ Gen 2 Instant Film Camera',cat:'Cameras',price:109.99,orig:129.99,icon:'ti-camera',isNew:true,sale:false,
   img:'https://www.bhphotovideo.com/images/images2500x2500/polaroid_9076_now_i_type_instant_film_1636399.jpg',
   desc:'The Polaroid Now+ Gen 2 gives you more creative control than any instant camera before it. With Bluetooth connectivity and the Polaroid app, unlock five interchangeable lens filters, adjust exposure and double exposure, and capture the world exactly as you see it.',
   features:['Autofocus with i-Type & 600 film','Bluetooth + Polaroid app control','5 creative lens filters included','Double exposure & light painting modes','Self-timer & tripod mount','90-day battery life (USB-C charge)','Available in multiple colors']},

  {id:10,brand:'Polaroid',name:'Now Gen 2 Instant Camera',cat:'Cameras',price:89.99,orig:null,icon:'ti-camera',isNew:true,sale:false,
   img:'https://www.bhphotovideo.com/images/images2500x2500/polaroid_9095_now_gen_2_i_type_1717511.jpg',
   desc:'The Polaroid Now Gen 2 brings the joy of instant photography to everyone. With autofocus, self-timer, and a powerful built-in flash, it captures sharp, vibrant instant prints every time. Simple and intuitive — just point, shoot, and watch your memories develop.',
   features:['Autofocus for sharp instant prints','Works with i-Type and 600 film','Built-in flash with auto mode','Self-timer & double exposure','USB-C charging · 90-day battery','Lightweight & portable design','Available in 8 colors']},

  {id:11,brand:'ATN',name:'Thor 5 640 Thermal Rifle Scope',cat:'Outdoor & Sports',price:1795.00,orig:1995.00,icon:'ti-crosshair',isNew:false,sale:true,
   img:'https://www.atncorp.com/images/products/TIWST5640X/main.jpg',
   desc:'The ATN Thor 5 640 sets the benchmark for thermal imaging rifle scopes. Its 640×480 thermal sensor paired with a stunning 1280×960 OLED display delivers crisp, actionable imagery in complete darkness. Onboard ballistics, range finder, and Smooth Zoom make every shot count.',
   features:['640×480 thermal microbolometer sensor','1280×960 OLED display, 60fps','Smooth Zoom 1-10x magnification','Integrated laser rangefinder','Onboard ballistic calculator','Recoil-activated video & WiFi streaming','18-hour battery · IPX7 waterproof']},

  {id:12,brand:'ATN',name:'Thor 5 320 Thermal Rifle Scope',cat:'Outdoor & Sports',price:995.00,orig:1195.00,icon:'ti-crosshair',isNew:false,sale:true,
   img:'https://www.atncorp.com/images/products/TIWST5320X/main.jpg',
   desc:'Professional thermal performance at a more accessible price point. The ATN Thor 5 320 delivers a 320×240 thermal sensor with the same legendary ATN smart features — ballistic calculator, one-shot zero, and RAV recoil-activated video.',
   features:['320×240 thermal microbolometer sensor','1280×960 OLED display','Smooth Zoom 1-10x magnification','One-shot zero system','Recoil-activated video recording','WiFi streaming to ATN Obsidian app','14-hour battery · IPX7 waterproof']},

  {id:13,brand:'Vaultek',name:'VS10i Biometric Handgun Safe',cat:'Home & Office',price:149.99,orig:null,icon:'ti-lock',isNew:false,sale:false,
   img:'https://vaulteksafe.com/cdn/shop/files/VS10i-BK-Front_Open.jpg',
   desc:'The Vaultek VS10i is a compact, feature-packed biometric safe for your primary handgun and essentials. Its high-resolution fingerprint sensor reads your print in under a second, while the backlit keypad and Bluetooth app provide backup access options.',
   features:['Biometric fingerprint scanner (< 1 sec)','Bluetooth app access & monitoring','Backlit 4-digit keypad backup','Interior LED light & mount holes','12-gauge steel with anti-pry bars','Rechargeable battery (up to 4 months)','Mounts to furniture, vehicle, floor']},

  {id:14,brand:'Vaultek',name:'ViSN MR WiFi Biometric Smart Safe',cat:'Home & Office',price:329.99,orig:399.99,icon:'ti-lock',isNew:true,sale:true,
   img:'https://vaulteksafe.com/cdn/shop/files/ViSN-MR-BK-Open.jpg',
   desc:'The Vaultek ViSN MR is a modular smart safe with built-in WiFi, a 5MP security camera, and two-way audio — all accessible from the Vaultek app anywhere in the world. Set alerts, watch a live feed, and manage access for up to 20 fingerprints.',
   features:['5MP 1080p camera with night vision','Two-way audio & real-time alerts','WiFi + Bluetooth remote access','Up to 20 fingerprints stored','Built-in rechargeable battery','Modular interior with pistol rack','Tamper detection & auto-lockout']},

  {id:15,brand:'LifeSafe',name:'StaySafe Portable Fire Extinguisher Spray',cat:'Home & Office',price:19.99,orig:29.99,icon:'ti-flame',isNew:false,sale:true,
   img:'https://m.media-amazon.com/images/I/51vWMkrKmCL._AC_SL1200_.jpg',
   desc:'StaySafe All-in-1 portable fire extinguishing spray handles 10 types of fires including Class A (wood, paper), Class B (flammable liquids), Class C (electrical), cooking oil, and more — in one lightweight, disposable can that stores in a drawer, car, or boat.',
   features:['Handles 10 fire types including Class ABC & K','Non-toxic, non-corrosive formula','No cleanup — evaporates after use','Works at any angle, upside down','12-foot discharge range','5-year shelf life','Compact: fits in kitchen drawer or glove box']},

  {id:16,brand:'Dark Energy',name:'Poseidon Pro Rugged Portable Charger',cat:'Computers',price:59.99,orig:null,icon:'ti-bolt',isNew:true,sale:false,
   img:'https://m.media-amazon.com/images/I/61zJFyKZqFL._AC_SL1200_.jpg',
   desc:"Dark Energy's Poseidon Pro is engineered for adventure. A 10,000mAh ultra-rugged power bank with IP67 waterproof, drop-proof, and dustproof construction. Dual USB-A and USB-C outputs keep all your devices charged even in the harshest conditions.",
   features:['10,000mAh capacity — 2-3 phone charges','IP67 waterproof & drop-proof rated','Dual USB-A + USB-C outputs (18W PD)','LED power indicator display','Charges via USB-C (included cable)','Fits in jacket pocket','Lifetime warranty']},

  {id:17,brand:'ACCUSPLIT',name:'AX850 Pace Clock Lane Timer',cat:'Health & Fitness',price:189.99,orig:null,icon:'ti-clock',isNew:false,sale:false,
   img:'https://m.media-amazon.com/images/I/71jYGp0hmEL._AC_SL1200_.jpg',
   desc:'The ACCUSPLIT AX850 is the coaching standard in competitive swimming, trusted by coaches and teams worldwide. Its large, high-contrast display is readable from 75 feet, cycling through 4 pace windows every 15 seconds to keep every lane on time.',
   features:['Visible from 75 feet across a pool','4-pace window cycling (every 15 sec)','Counts up and counts down modes','Waterproof housing','110V AC or battery operated','Mounting bracket included','Used in Olympic & collegiate facilities']},

  {id:18,brand:'ACCUSPLIT',name:'Survivor 2 SX Stopwatch Chronograph',cat:'Health & Fitness',price:24.99,orig:34.99,icon:'ti-clock',isNew:false,sale:true,
   img:'https://m.media-amazon.com/images/I/61sC+kSFHiL._AC_SL1200_.jpg',
   desc:'A coach and athlete essential, the ACCUSPLIT Survivor 2 SX is a multi-function stopwatch built for the field. Water resistant and built tough, it records splits, laps, and cumulative time with the accuracy ACCUSPLIT has been known for since 1972.',
   features:['1/100 second accuracy','Up to 99 lap/split memory','Count-up & countdown timer','Water-resistant housing','Extra-large display digits','Includes neck lanyard','1-year manufacturer warranty']},

  {id:19,brand:'Ibanez',name:'RG652AHM RG Prestige Electric Guitar',cat:'Musical Instruments',price:1799.99,orig:null,icon:'ti-music',isNew:false,sale:false,
   img:'https://media.musicarts.com/is/image/MMGS7/RG652AHM-Ibanez-RG-Prestige-Electric-Guitar-Mars-Red-Metallic-Regular/J05033000001000-00-600x600.jpg',
   desc:'The Ibanez RG Prestige RG652AHM is built for technical players who demand the best. Made in Japan with a mahogany body and Wizard III 5-piece maple/walnut neck, it delivers fast action, incredible sustain, and premium DiMarzio pickups in a stunning figured maple top.',
   features:['Made in Japan — Prestige quality','Wizard III 5-piece maple/walnut neck','DiMarzio Air Norton & The Tone Zone pickups','Ibanez Edge zero-point tremolo','24 frets, jumbo stainless steel','15" radius bound rosewood fretboard','Available in several striking finishes']},

  {id:20,brand:'FlightScope',name:'X3C 3D Doppler Radar Launch Monitor',cat:'Outdoor & Sports',price:14995.00,orig:null,icon:'ti-radar',isNew:false,sale:false,
   img:'https://flightscope.com/wp-content/uploads/2023/10/X3C-front.jpg',
   desc:'The FlightScope X3C combines 3D Doppler tracking radar with synchronized image processing for data accuracy no other portable launch monitor can match. Used by PGA Tour pros, Tour vans, and elite academies worldwide. Track every club, every shot, with 50+ parameters.',
   features:['3D Doppler radar + camera fusion','50+ shot data parameters','Works indoors or outdoors','Club & ball tracking simultaneously','WiFi & Bluetooth connectivity','Works with E6 CONNECT simulator software','Portable with protective carry case']},

  {id:21,brand:'Signature Series',name:'EVA Hard Case for JBL Boombox 3',cat:'Audio',price:29.99,orig:49.99,icon:'ti-box',isNew:false,sale:true,
   img:'https://m.media-amazon.com/images/I/71Q5ZQp4JWL._AC_SL1200_.jpg',
   desc:'Protect your JBL Boombox 3 in style with this Signature Series EVA hard case. Precision-molded interior foam holds your speaker securely. Weatherproof EVA exterior with reinforced zipper handles anything from a beach day to a camping trip.',
   features:['Precision-molded for JBL Boombox 3','Weatherproof EVA hard shell exterior','Custom foam interior with accessory pocket','Carry handle + removable shoulder strap','Reinforced lockable zipper','Vented drainage port','Fits speaker + charging cable & accessories']},

  {id:22,brand:'Signature Series',name:'EVA Hard Case for JBL Clip 4',cat:'Audio',price:19.99,orig:29.99,icon:'ti-box',isNew:false,sale:true,
   img:'https://m.media-amazon.com/images/I/61N6HfCqLRL._AC_SL1200_.jpg',
   desc:'Keep your JBL Clip 4 protected with this lightweight Signature Series EVA hard shell case. Its compact design slips into a bag or backpack while offering full protection against bumps, drops, and splashes.',
   features:['Form-fitted for JBL Clip 4','Hard EVA exterior — crush & splash proof','Soft microfiber interior lining','Mesh pocket for cable & accessories','Carabiner clip attachment point','Reinforced double zipper','Weighs less than 3 oz']},

  {id:23,brand:'Signature Series',name:'Garmin MARQ Gen 2 Wireless Charging Stand',cat:'GPS & Automotive',price:39.99,orig:null,icon:'ti-plug',isNew:true,sale:false,
   img:'https://res.garmin.com/en/products/010-02648-00/v/cf-lg.jpg',
   desc:'Display and charge your Garmin MARQ Gen 2 in style. This premium weighted stand is machined from aircraft-grade aluminum, holds your watch at the perfect viewing angle, and routes the charging cable cleanly for a clutter-free desk.',
   features:['Compatible with all MARQ Gen 2 models','Aircraft-grade aluminum construction','Anti-slip weighted base','Integrated cable management channel','Perfect desk or nightstand display piece','Includes 1m charging cable','Powder-coated matte black finish']},

  {id:24,brand:'Signature Series',name:'Leather Desk Mat — Commander Edition',cat:'Home & Office',price:34.99,orig:null,icon:'ti-layout',isNew:true,sale:false,
   img:'https://m.media-amazon.com/images/I/71aFt78kmGL._AC_SL1200_.jpg',
   desc:'Elevate your workspace with the Signature Series Commander Edition desk mat. Full-grain PU leather top, non-slip neoprene base, and stitched edges give your desk a premium, organized foundation — wide enough for your keyboard, mouse, and essentials.',
   features:['Full-grain PU leather surface','Non-slip neoprene rubber base','Anti-fray stitched perimeter','36" × 18" — fits full keyboard + mouse','Water-resistant easy-clean surface','USB cable channel on underside','Available in 3 colors: Black, Brown, Navy']},
];

let cart=[];

function prodHTML(p){
  const d=p.orig?Math.round((1-p.price/p.orig)*100):0;
  const imgEl=p.img
    ?`<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;padding:0.75rem;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    :'';
  const iconEl=`<div style="display:${p.img?'none':'flex'};width:100%;height:100%;align-items:center;justify-content:center;"><i class="ti ${p.icon}" style="font-size:48px;color:var(--g4);"></i></div>`;
  return`<div class="pcard" onclick="openProduct(${p.id})">
    <div class="pimg" style="position:relative;overflow:hidden;">${imgEl}${iconEl}
      <div class="pbdgs">${p.sale&&p.orig?`<span class="pbdg pbdg-s">Save ${d}%</span>`:''} ${p.isNew?`<span class="pbdg pbdg-n">New</span>`:''}</div>
      <button class="qadd" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>
    </div>
    <div class="pbody">
      <div class="pbrand">${p.brand}</div>
      <div class="pname">${p.name}</div>
      <div class="ppr"><span class="pprice">$${p.price.toFixed(2)}</span>${p.orig?`<span class="pwas">$${p.orig.toFixed(2)}</span><span class="psave">−$${(p.orig-p.price).toFixed(2)}</span>`:''}</div>
    </div>
  </div>`;
}

function render(){
  document.getElementById('feat-grid').innerHTML=products.filter(p=>p.sale||p.isNew).slice(0,8).map(prodHTML).join('');
  document.getElementById('new-grid').innerHTML=products.filter(p=>p.isNew).slice(0,4).map(prodHTML).join('');
  applyFilters();
  buildBrandsGrid();
  buildBrandTicker();
}

function applyFilters(){
  const bb=[...document.querySelectorAll('.fbrand:checked')].map(e=>e.value);
  const cc=[...document.querySelectorAll('.fcat:checked')].map(e=>e.value);
  const pv=document.querySelector('input[name="fp"]:checked')?.value||'all';
  const so=document.getElementById('f-sale')?.checked;
  const no=document.getElementById('f-new')?.checked;
  const sv=document.querySelector('.sortsel')?.value||'feat';
  let f=products.filter(p=>{
    if(bb.length&&!bb.includes(p.brand))return false;
    if(cc.length&&!cc.includes(p.cat))return false;
    if(pv==='0-50'&&p.price>=50)return false;
    if(pv==='50-200'&&(p.price<50||p.price>=200))return false;
    if(pv==='200-500'&&(p.price<200||p.price>=500))return false;
    if(pv==='500+'&&p.price<500)return false;
    if(so&&!p.sale)return false;
    if(no&&!p.isNew)return false;
    return true;
  });
  if(sv==='lo')f.sort((a,b)=>a.price-b.price);
  else if(sv==='hi')f.sort((a,b)=>b.price-a.price);
  else if(sv==='new')f.sort((a,b)=>b.isNew-a.isNew);
  document.getElementById('shop-grid').innerHTML=f.length?f.map(prodHTML).join(''):`<p style="color:#8a8a8a;font-size:13px;grid-column:1/-1;padding:3rem 0;text-align:center;">No products match the current filters.</p>`;
  document.getElementById('shop-count').textContent=`Showing ${f.length} of ${products.length} products`;
}

function handleSearch(){
  const q=(document.getElementById('search-input').value||'').trim().toLowerCase();
  const clearBtn=document.getElementById('search-clear');
  if(clearBtn)clearBtn.style.display=q?'block':'none';
  if(!q){if(document.getElementById('pg-shop').classList.contains('on'))applyFilters();return;}
  showPg('shop');
  // Reset all filters so full product set is searched
  document.querySelectorAll('.fbrand,.fcat').forEach(cb=>cb.checked=false);
  const faAll=document.getElementById('fb-all');if(faAll)faAll.checked=true;
  const fcAll=document.getElementById('fc-all');if(fcAll)fcAll.checked=true;
  const fpAll=document.querySelector('input[name="fp"][value="all"]');if(fpAll)fpAll.checked=true;
  const results=products.filter(p=>
    p.name.toLowerCase().includes(q)||
    p.brand.toLowerCase().includes(q)||
    p.cat.toLowerCase().includes(q)
  );
  document.getElementById('shop-title').textContent=`Results for "${document.getElementById('search-input').value.trim()}"`;
  document.getElementById('shop-count').textContent=`${results.length} result${results.length!==1?'s':''} found`;
  document.getElementById('shop-grid').innerHTML=results.length
    ?results.map(prodHTML).join('')
    :`<p style="color:#8a8a8a;font-size:13px;grid-column:1/-1;padding:3rem 0;text-align:center;">No results found for "<strong>${document.getElementById('search-input').value.trim()}</strong>"</p>`;
}

function clearSearch(){
  const inp=document.getElementById('search-input');
  if(inp)inp.value='';
  const clearBtn=document.getElementById('search-clear');
  if(clearBtn)clearBtn.style.display='none';
  if(document.getElementById('pg-shop').classList.contains('on')){
    document.getElementById('shop-title').textContent='All Products';
    applyFilters();
  }
  if(inp)inp.focus();
}

function filterBrand(b){showPg('shop');document.querySelectorAll('.fbrand').forEach(cb=>cb.checked=cb.value===b);const fba=document.getElementById('fb-all');if(fba)fba.checked=false;applyFilters();}
function filterCat(c){showPg('shop');document.getElementById('shop-title').textContent=c;document.querySelectorAll('.fcat').forEach(cb=>cb.checked=cb.value===c);const fca=document.getElementById('fc-all');if(fca)fca.checked=false;applyFilters();}

function showPg(n){
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  const el=document.getElementById('pg-'+n);
  if(el){el.classList.add('on');}else{document.getElementById('pg-home').classList.add('on');}
  document.querySelectorAll('.catnav a').forEach(a=>a.classList.remove('act'));
  if(n==='home'){const first=document.querySelector('.catnav a');if(first)first.classList.add('act');}
  if(n==='shop')document.getElementById('shop-title').textContent='All Products';
  if(n==='cart')renderCartPage();
  if(n==='checkout')renderCheckout();
  window.scrollTo(0,0);
}

function setNmBottom(){
  const nm=document.querySelector('.nm');
  if(nm)document.documentElement.style.setProperty('--nm-bottom',nm.getBoundingClientRect().bottom+'px');
}
function doLogin(){
  const u=document.getElementById('lu').value.trim(),p=document.getElementById('lp').value.trim();
  if(u==='warrior'&&p==='wwp2026'){
    document.getElementById('s-login').classList.remove('on');
    document.getElementById('s-site').classList.add('on');
    render();
  }else{
    const e=document.getElementById('lerr');e.classList.add('on');setTimeout(()=>e.classList.remove('on'),3000);
  }
}
function doLogout(){
  document.getElementById('s-site').classList.remove('on');
  document.getElementById('s-login').classList.add('on');
  document.getElementById('lu').value='';document.getElementById('lp').value='';
  cart=[];updateCartBadge();
}
['lu','lp'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();}));

function addToCart(id){
  const p=products.find(x=>x.id===id),ex=cart.find(x=>x.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  updateCartBadge();showToast(p.brand+' — Added to cart');
}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);updateCartBadge();renderCartPage();}
function changeQty(id,delta){
  const item=cart.find(x=>x.id===id);
  if(item){item.qty=Math.max(1,item.qty+delta);}
  updateCartBadge();renderCartPage();
}
function updateCartBadge(){
  const cnt=cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById('cbdg').textContent=cnt;
}

function renderCartPage(){
  const list=document.getElementById('cart-items-list');
  const count=cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById('cart-item-count').textContent=count;
  if(!cart.length){
    list.innerHTML=`<div class="cart-empty-state"><i class="ti ti-shopping-cart"></i><h3>Your cart is empty</h3><p>Add some products to get started.</p><button class="btn-primary" onclick="showPg('shop')">Browse Products</button></div>`;
    document.getElementById('cart-summary-items').innerHTML='';
  }else{
    list.innerHTML=cart.map(item=>`
      <div class="cart-table-item">
        <div class="cti-img"><i class="ti ${item.icon}"></i></div>
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
        <div class="cti-price">$${(item.price*item.qty).toFixed(2)}</div>
      </div>`).join('');
    document.getElementById('cart-summary-items').innerHTML=cart.map(i=>`<div class="csp-row" style="font-size:12px;border-bottom:1px solid var(--border);padding:5px 0;"><span style="max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${i.brand} ${i.name.split(' ').slice(0,3).join(' ')}${i.qty>1?' × '+i.qty:''}</span><span style="font-size:12px;color:var(--g1);">$${(i.price*i.qty).toFixed(2)}</span></div>`).join('');
  }
  const sub=cart.reduce((s,x)=>s+x.price*x.qty,0);
  const tax=sub*0.08;
  const total=sub+tax;
  document.getElementById('cs-sub').textContent='$'+sub.toFixed(2);
  document.getElementById('cs-ship').textContent=sub>=75?'Free':'Calculated at checkout';
  document.getElementById('cs-tax').textContent='$'+tax.toFixed(2);
  document.getElementById('cs-total').textContent='$'+total.toFixed(2);
}

function renderCheckout(){
  const sub=cart.reduce((s,x)=>s+x.price*x.qty,0),tax=sub*0.08,total=sub+tax;
  document.getElementById('co-sub').textContent='$'+sub.toFixed(2);
  document.getElementById('co-tax').textContent='$'+tax.toFixed(2);
  document.getElementById('co-total').textContent='$'+total.toFixed(2);
  document.getElementById('co-btn-total').textContent='$'+total.toFixed(2);
  document.getElementById('co-items').innerHTML=cart.length?cart.map(i=>`<div class="oi"><span>${i.brand} — ${i.name.split(' ').slice(0,4).join(' ')}${i.qty>1?' × '+i.qty:''}</span><span>$${(i.price*i.qty).toFixed(2)}</span></div>`).join(''):`<p style="font-size:12px;color:var(--g3);">No items in cart.</p>`;
}

function placeOrder(){
  const n=Math.floor(Math.random()*90000+10000);
  document.getElementById('order-num').textContent=n;
  cart=[];updateCartBadge();
  showPg('order-confirmed');
  showToast('Order confirmed — thank you for supporting WWP!');
}

function toggleFaq(el){
  const ans=el.nextElementSibling;
  const icon=el.querySelector('i');
  const isOpen=ans.classList.contains('open');
  document.querySelectorAll('.faq-a.open').forEach(a=>a.classList.remove('open'));
  document.querySelectorAll('.faq-q i').forEach(i=>i.className='ti ti-chevron-down');
  if(!isOpen){ans.classList.add('open');icon.className='ti ti-chevron-up';}
}

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('on');
  setTimeout(()=>t.classList.remove('on'),2800);
}

function showContactPage(){showPg('contact');}

// ── MEGA NAV ──
function openDrop(id){
  document.getElementById('mn-'+id).classList.add('open');
}
function closeDrop(id){
  document.getElementById('mn-'+id).classList.remove('open');
}
function toggleDrop(id){
  document.getElementById('mn-'+id).classList.toggle('open');
  // close other dropdowns
  ['products','brands'].filter(x=>x!==id).forEach(x=>document.getElementById('mn-'+x).classList.remove('open'));
}
function filterCatClose(cat, dropId){
  closeDrop(dropId);
  filterCat(cat);
}
function showPgClose(pg, dropId){
  closeDrop(dropId);
  showPg(pg);
}
function filterSale(){
  showPg('shop');
  const fSale=document.getElementById('f-sale');if(fSale)fSale.checked=true;
  applyFilters();
}
// Close dropdowns on outside click
document.addEventListener('click',function(e){
  if(!e.target.closest('.mnitem'))['products','brands'].forEach(closeDrop);
});
// Build brands grid dynamically from products array
function buildBrandsGrid(){
  // Full brand list from certifiedbrands.com
  const cbBrands=['3D MAXpider','ACCUSPLIT','Arccos','Armasight','Athlon Optics','ATN','Bag Boy','Barsys','Basic Nutrition','Boost Oxygen',
    'Burch Barrel','Bushnell Golf','Case Knives','Celestron','Champion Sports','Click & Grow','Cloud Microphones','Concept2',"D'Addario",
    'Dark Energy','Das Keyboard','Dogtra','Dribble Stick','Ecobee','EcoFlow','ELAC','Ember','Everyday Dose','FlightScope','Full Swing',
    'Garmin','Ibanez','LifeSafe','Logitech','Polaroid','Signature Series','Vaultek','Wusthof'];
  // Count local products per brand
  const counts={};
  products.forEach(p=>{counts[p.brand]=(counts[p.brand]||0)+1;});
  document.getElementById('brands-grid').innerHTML=cbBrands.map(b=>{
    const n=counts[b]||0;
    return`<div class="mnbrand-item" onclick="filterBrandClose('${b.replace(/'/g,"\\'")}')">
       <span>${b}</span>${n?`<span class="mnbrand-count">${n}</span>`:''}
     </div>`;
  }).join('');
}
function filterBrandClose(b){
  closeDrop('brands');
  filterBrand(b);
}

function buildBrandTicker(){
  const brands=[
    {name:'Garmin',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo0MnB4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiMwMDMzNjY7bGV0dGVyLXNwYWNpbmc6MC4wNWVtOyI+R0FSTUlOPC90ZXh0Pjwvc3ZnPg=='},
    {name:'Logitech',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo0MHB4O2ZvbnQtd2VpZ2h0OjMwMDtmaWxsOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6MC4wZW07Ij5Mb2dpdGVjaDwvdGV4dD48L3N2Zz4='},
    {name:'Wusthof',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpUaW1lcyBOZXcgUm9tYW4sR2VvcmdpYSxzZXJpZjtmb250LXNpemU6MzNweDtmb250LXdlaWdodDo3MDA7ZmlsbDojMWExYTFhO2xldHRlci1zcGFjaW5nOjAuMTRlbTsiPlfDnFNUSE9GPC90ZXh0Pjwvc3ZnPg=='},
    {name:'Polaroid',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozN3B4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6MC4wMWVtOyI+UG9sYXJvaWQ8L3RleHQ+PC9zdmc+'},
    {name:'ATN',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo1NHB4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiMyZDVhMWI7bGV0dGVyLXNwYWNpbmc6MC4xNmVtOyI+QVROPC90ZXh0Pjwvc3ZnPg=='},
    {name:'Ibanez',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo0MHB4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiNjYzAwMDA7bGV0dGVyLXNwYWNpbmc6MC4wMmVtO2ZvbnQtc3R5bGU6aXRhbGljOyI+SWJhbmV6PC90ZXh0Pjwvc3ZnPg=='},
    {name:'Vaultek',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMxYTJlNDQ7bGV0dGVyLXNwYWNpbmc6MC4xMmVtOyI+VkFVTFRFSzwvdGV4dD48L3N2Zz4='},
    {name:'ACCUSPLIT',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNDkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyN3B4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiNlODVjMGQ7bGV0dGVyLXNwYWNpbmc6MC4wN2VtOyI+QUNDVVNQTElUPC90ZXh0Pjwvc3ZnPg=='},
    {name:'FlightScope',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMHB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMwMDU1YTU7bGV0dGVyLXNwYWNpbmc6MC4wMmVtOyI+RmxpZ2h0U2NvcGU8L3RleHQ+PC9zdmc+'},
    {name:'Ecobee',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozOXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMyMWI1NzM7bGV0dGVyLXNwYWNpbmc6MC4wZW07Ij5lY29iZWU8L3RleHQ+PC9zdmc+'},
    {name:'EcoFlow',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozOXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMyMzcwZWY7bGV0dGVyLXNwYWNpbmc6MC4wZW07Ij5FY29GbG93PC90ZXh0Pjwvc3ZnPg=='},
    {name:'Dark Energy',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNDgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToyNXB4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiMxMTExMTE7bGV0dGVyLXNwYWNpbmc6MC4wN2VtOyI+REFSSyBFTkVSR1k8L3RleHQ+PC9zdmc+'},
    {name:'Concept2',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMwMDMwODc7bGV0dGVyLXNwYWNpbmc6MC4wNmVtOyI+Q09OQ0VQVDI8L3RleHQ+PC9zdmc+'},
    {name:'D\'Addario',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpHZW9yZ2lhLFRpbWVzIE5ldyBSb21hbixzZXJpZjtmb250LXNpemU6MzRweDtmb250LXdlaWdodDo3MDA7ZmlsbDojYzgxMDJlO2xldHRlci1zcGFjaW5nOjAuMDJlbTsiPkQmIzM5O0FkZGFyaW88L3RleHQ+PC9zdmc+'},
    {name:'Celestron',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMXB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMxYjE0NjQ7bGV0dGVyLXNwYWNpbmc6MC4wNmVtOyI+Q0VMRVNUUk9OPC90ZXh0Pjwvc3ZnPg=='},
    {name:'Bushnell',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiMyYjU3OTc7bGV0dGVyLXNwYWNpbmc6MC4wN2VtOyI+QlVTSE5FTEw8L3RleHQ+PC9zdmc+'},
    {name:'ELAC',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTciIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCBCbGFjayxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTo1MnB4O2ZvbnQtd2VpZ2h0OjkwMDtmaWxsOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6MC4yNGVtOyI+RUxBQzwvdGV4dD48L3N2Zz4='},
    {name:'LifeSafe',logo:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAyMjAgODAiPjx0ZXh0IHg9IjExMCIgeT0iNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozNHB4O2ZvbnQtd2VpZ2h0OjcwMDtmaWxsOiNlODIzMWE7bGV0dGVyLXNwYWNpbmc6MC4wNGVtOyI+TGlmZVNhZmU8L3RleHQ+PC9zdmc+'},
  ];
  const all=[...brands,...brands];
  const el=document.getElementById('brand-ticker');
  if(!el)return;
  el.innerHTML=all.map(b=>
    `<div class="brand-tile" onclick="filterBrand('${b.name.replace(/'/g,"\\'")}')">
       <img src="${b.logo}" alt="${b.name}" style="max-height:58px;max-width:190px;object-fit:contain;opacity:0.85;transition:opacity 0.2s;">
     </div>`
  ).join('');
  el.querySelectorAll('.brand-tile').forEach(tile=>{
    tile.addEventListener('mouseenter',()=>{const img=tile.querySelector('img');if(img)img.style.opacity='1';});
    tile.addEventListener('mouseleave',()=>{const img=tile.querySelector('img');if(img)img.style.opacity='0.85';});
  });
}

let pdpCurrentId = null;
let pdpQty = 1;

function openProduct(id){
  const p = products.find(x=>x.id===id);
  if(!p) return;
  pdpCurrentId = id;
  pdpQty = 1;

  // Breadcrumb
  document.getElementById('pdp-breadcrumb').innerHTML =
    `<span onclick="showPg('home')">Home</span>
     <i class="ti ti-chevron-right"></i>
     <span onclick="showPg('shop')">${p.cat}</span>
     <i class="ti ti-chevron-right"></i>
     <span style="color:var(--navy);font-weight:600;">${p.name}</span>`;

  // Image
  const img = document.getElementById('pdp-img');
  const icon = document.getElementById('pdp-icon');
  if(p.img){
    img.src = p.img;
    img.alt = p.name;
    img.style.display = '';
    icon.style.display = 'none';
    icon.innerHTML = '';
  } else {
    img.style.display = 'none';
    icon.style.display = 'flex';
    icon.innerHTML = `<i class="ti ${p.icon}"></i>`;
  }

  // Info
  document.getElementById('pdp-brand').textContent = p.brand;
  document.getElementById('pdp-title').textContent = p.name;

  // Badges
  const d = p.orig ? Math.round((1-p.price/p.orig)*100) : 0;
  document.getElementById('pdp-badges').innerHTML =
    `${p.sale&&p.orig?`<span class="pbdg pbdg-s">Save ${d}%</span>`:''} ${p.isNew?`<span class="pbdg pbdg-n">New</span>`:''}`;

  // Price
  document.getElementById('pdp-price-row').innerHTML =
    `<span class="pdp-price">$${p.price.toFixed(2)}</span>
     ${p.orig?`<span class="pdp-was">$${p.orig.toFixed(2)}</span><span class="pdp-save">Save $${(p.orig-p.price).toFixed(2)}</span>`:''}`;

  // Description & features
  document.getElementById('pdp-desc').textContent = p.desc || '';
  document.getElementById('pdp-features').innerHTML =
    (p.features||[]).map(f=>`<li>${f}</li>`).join('');

  // Qty reset
  document.getElementById('pdp-qty').textContent = '1';

  // Related products (same brand or same cat, exclude self)
  const related = products.filter(x=>x.id!==id && (x.brand===p.brand||x.cat===p.cat)).slice(0,4);
  document.getElementById('pdp-related-grid').innerHTML = related.map(prodHTML).join('');

  showPg('product');
  window.scrollTo(0,0);
}

function pdpQtyChange(delta){
  pdpQty = Math.max(1, pdpQty + delta);
  document.getElementById('pdp-qty').textContent = pdpQty;
}

function pdpAddToCart(){
  if(!pdpCurrentId) return;
  for(let i=0;i<pdpQty;i++) addToCart(pdpCurrentId);
}