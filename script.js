/* ============================================
   DICENTER | Tecnología y Hogar
   script.js
   ============================================ */

/* ============================================
   DATOS DE PRODUCTOS
   ============================================ */
const productos = [
{ codigo: "56146", nombre: "Consola Sony PlayStation 5 Slim CFI-2115 B01X 825GB / Digital Edition / Bivolt - Blanco", cat: "Games", precio: "4.600.000", fotos: ["56146_1.jpg","56146_2.jpg","56146_3.jpg"] },
  { codigo: "39686", nombre: "Auricular JBL Tune T520BT Pure Bass / Bluetooth - Negro", cat: "Auriculares y Accesorios", precio: "240.000", fotos: ["39686_1.jpg","39686_2.jpg","39686_3.jpg"] },
  { codigo: "52372", nombre: "Tarjeta Gráfica Gigabyte Eagle OC 8GB GeForce RTX5060 GDDR7", cat: "VGA NVIDIA", precio: "3.900.000", fotos: ["52372_1.jpg","52372_2.jpg","52372_3.jpg"] },
  { codigo: "45699", nombre: "Micrófono JBL Quantum Stream Wireless", cat: "Micrófono", precio: "550.000", fotos: ["45699_1.jpg","45699_2.jpg","45699_3.jpg"] },
  { codigo: "55608", nombre: "Auricular JBL Endurance Zone Sport / Bluetooth - Negro", cat: "Auriculares y Accesorios", precio: "650.000", fotos: ["55608_1.jpg","55608_2.jpg","55608_3.jpg"] },
  { codigo: "48228", nombre: "Auricular Gamer Corsair HS80 Max Premium RGB / Wireless - Steel Gris", cat: "Auriculares y Accesorios", precio: "1.250.000", fotos: ["48228_1.jpg","48228_2.jpg","48228_3.jpg"] },
  { codigo: "55152", nombre: "Fuente de Alimentación Corsair CX650M 650W ATX / Semi Modular / Cybenetics Bronze", cat: "Fuente de Alimentación", precio: "700.000", fotos: ["55152_1.jpg","55152_2.jpg","55152_3.jpg"] },
  { codigo: "25965", nombre: "Speaker JBL PartyBox On-The-Go Essential Bluetooth - Negro", cat: "Audio", precio: "1.600.000", fotos: ["25965_1.jpg","25965_2.jpg","25965_3.jpg"] },
  { codigo: "58118", nombre: "Dron Dji Lito X1", cat: "TV y Video", precio: "3.400.000", fotos: ["58118_1.jpg","58118_2.jpg","58118_3.jpg"] },
  { codigo: "54984", nombre: "Apple iPhone 17 256GB / eSIM - Mist Blue", cat: "iPhone", precio: "6.300.000", fotos: ["54984_1.jpg","54984_2.jpg","54984_3.jpg"] },
  { codigo: "54336", nombre: "Apple iPhone 17 Pro Max 256GB / eSIM - Cosmic Orange", cat: "iPhone", precio: "9.000.000", fotos: ["54336_1.jpg","54336_2.jpg","54336_3.jpg"] },
  { codigo: "54262", nombre: "Apple iPhone 17 Pro 256GB / eSIM - Deep Blue", cat: "iPhone", precio: "8.400.000", fotos: ["54262_1.jpg","54262_2.jpg","54262_3.jpg"] },
  { codigo: "59067", nombre: "Apple Watch SE2 44MM / S-M / GPS Aluminium Sport Band - Midnight", cat: "Smartwatch", precio: "1.800.000", fotos: ["59067_1.jpg","59067_2.jpg","59067_3.jpg"] },
  { codigo: "54687", nombre: "Apple Watch SE3 40MM / S-M / GPS - Midnight Aluminium / Midnight Sport Band", cat: "Smartwatch", precio: "1.900.000", fotos: ["54687_1.jpg","54687_2.jpg","54687_3.jpg"] },
  { codigo: "54685", nombre: "Apple Watch SE3 40MM / S-M / GPS - Starlight Aluminium / Starlight Sport Band", cat: "Smartwatch", precio: "1.950.000", fotos: ["54685_1.jpg","54685_2.jpg","54685_3.jpg"] },
  { codigo: "60051", nombre: "Aire Acondicionado Split HYE NAC12BR Kit 12000BTU / 220V / 60Hz / Wi-Fi (R410A)", cat: "Hogar y Decoracion", precio: "2.400.000", fotos: ["60051_1.jpg","60051_2.jpg","60051_3.jpg"] },
  { codigo: "60734", nombre: "Aire Acondicionado Split Midea MD-12000 Kit 12000BTU 220V / 60Hz (R410A)", cat: "Hogar y Decoracion", precio: "2.750.000", fotos: ["60734_1.jpg","60734_2.jpg","60734_3.jpg"] },
  { codigo: "50795", nombre: "Impresora 3D Bambu Lab PF002-M A1 Mini Bivolt - Gris", cat: "Impresoras", precio: "3.000.000", fotos: ["50795_1.jpg","50795_2.jpg","50795_3.jpg"] },
  { codigo: "50792", nombre: "Impresora 3D Bambu Lab PF002-A A1 Bivolt - Gris", cat: "Impresoras", precio: "4.200.000", fotos: ["50792_1.jpg","50792_2.jpg","50792_3.jpg"] },
  { codigo: "58770", nombre: "Impresora 3D Bambu Lab PF001-U US P1S / 500MM/S / Bivolt - Gris", cat: "Impresoras", precio: "6.200.000", fotos: ["58770_1.jpg","58770_2.jpg","58770_3.jpg"] },
  { codigo: "52621", nombre: "Headset Gamer Corsair VOID v2 / Wireless - Negro", cat: "Auriculares y Accesorios", precio: "850.000", fotos: ["52621_1.jpg","52621_2.jpg","52621_3.jpg"] },
  { codigo: "57727", nombre: "Aspiradora Samsung Powerbot-E VR5000 Wi-Fi / Bivolt - Negro", cat: "Hogar y Decoración", precio: "1.250.000", fotos: ["57727_1.jpg","57727_2.jpg","57727_3.jpg"] },
  { codigo: "52614", nombre: "Water Cooler para Procesador Corsair Nautilus 240 RS 240MM - Negro", cat: "Water Cooler", precio: "800.000", fotos: ["52614_1.jpg","52614_2.jpg","52614_3.jpg"] },
  { codigo: "52849", nombre: "Monitor Gamer MSI Mag 255F E20 25\" FHD 200Hz / 0.5Ms", cat: "Monitores", precio: "1.150.000", fotos: ["52849_1.jpg","52849_2.jpg","52849_3.jpg"] },
  { codigo: "53467", nombre: "Mouse Gamer Corsair Scimitar Elite SE MMO Wireless - Gun Metal", cat: "Mouse", precio: "1.050.000", fotos: ["53467_1.jpg","53467_2.jpg","53467_3.jpg"] },
  { codigo: "47431", nombre: "Procesador AMD Ryzen 5 9600X Socket AM5 / 5.4GHz / 38MB", cat: "CPU AMD", precio: "1.850.000", fotos: ["47431_1.jpg","47431_2.jpg","47431_3.jpg"] },
  { codigo: "48786", nombre: "Procesador Intel Core Ultra 5 245K Socket LGA 1851 / 24MB", cat: "CPU AMD", precio: "1.850.000", fotos: ["48786_1.jpg","48786_2.jpg","48786_3.jpg"] },
  { codigo: "48786", nombre: "Procesador Intel Core Ultra 5 245K Socket LGA 1851 / 24MB", cat: "CPU Intel", precio: "1.850.000", fotos: ["48786_1.jpg","48786_2.jpg","48786_3.jpg"] },
  { codigo: "50779", nombre: "Bebedero Quanta DuoAcqua QTBEM65 Mesa Natural / Frío / Bivolt - Blanco", cat: "Hogar y Decoración", precio: "300.000", fotos: ["50779_1.jpg","50779_2.jpg","50779_3.jpg"] },
  { codigo: "58622", nombre: "Compresor de Aire Xiaomi Mi Portable Electric Mijia Compact - Negro", cat: "Hogar y Decoración", precio: "275.000", fotos: ["58622_1.jpg","58622_2.jpg","58622_3.jpg"] },
  { codigo: "51707", nombre: "Speaker JBL Flip 7 Bluetooth - Negro", cat: "Audio", precio: "650.000", fotos: ["51707_1.jpg","51707_2.jpg","51707_3.jpg"] },
  { codigo: "58652", nombre: "Auricular Xiaomi Redmi Buds 8 Pro / Bluetooth - Glacier Azul", cat: "Auriculares y Accesorios", precio: "420.000", fotos: ["58652_1.jpg","58652_2.jpg","58652_3.jpg"] },
  { codigo: "56709", nombre: "Proyector Blulory LED T6 Max 1200 Lumens - Blanco", cat: "Proyectores y Accesorios", precio: "800.000", fotos: ["56709_1.jpg","56709_2.jpg","56709_3.jpg"] },
  { codigo: "57121", nombre: "Monitor Gamer LG UltraGear 24G411A-B 24\" Full HD IPS 144Hz / 1Ms - Negro", cat: "Monitores", precio: "900.000", fotos: ["57121_1.jpg","57121_2.jpg","57121_3.jpg"] },
  { codigo: "59877", nombre: "Patineta Eléctrico Xiaomi Scooter Lite - Negro", cat: "Deporte y Actividad", precio: "2.200.000", fotos: ["59877_1.jpg","59877_2.jpg","59877_3.jpg"] },
  { codigo: "59305", nombre: "Tablet Xiaomi Pad 8 Pro 8GB de RAM / 256GB / Pantalla 11.2\" - Gris", cat: "Tablets", precio: "3.900.000", fotos: ["59305_1.jpg","59305_2.jpg","59305_3.jpg"] },
  { codigo: "57118", nombre: "Cerradura Digital Satellite SL-84M Smart Door Lock 3D Face - Negro", cat: "Hogar y Decoración", precio: "850.000", fotos: ["57118_1.jpg","57118_2.jpg","57118_3.jpg"] },
  { codigo: "58816", nombre: "Anillo Smart Havit M7083-BK - Negro (8mm)", cat: "Reloj Inteligente y Accesorios", precio: "450.000", fotos: ["58816_1.jpg","58816_2.jpg","58816_3.jpg"] },
  { codigo: "56044", nombre: "Teclado Gamer Mecánico Ajazz AK820 Nacodexx USB / RGB / Moon Yellow / Inglés - Gris / Blanco", cat: "Teclados", precio: "300.000", fotos: ["56044_1.jpg","56044_2.jpg","56044_3.jpg"] },
  { codigo: "58227", nombre: "Headset Gamer Ajazz AHM08 Max / Wireless - Gris / Blanco", cat: "Auriculares y Accesorios", precio: "290.000", fotos: ["58227_1.jpg","58227_2.jpg","58227_3.jpg"] },
  { codigo: "60534", nombre: "Notebook Lenovo IdeaPad Slim 3 15ITN9 Intel N150 Pantalla Full HD 15.6\" / 8GB de RAM / 128GB UFS - Abyss Azul", cat: "Notebook", precio: "3.150.000", fotos: ["60534_1.jpg","60534_2.jpg","60534_3.jpg"] },
  { codigo: "54855", nombre: "Ventilador FTX FS-40MF Brisa 16\" / 220V - Negro", cat: "Hogar y Decoración", precio: "400.000", fotos: ["54855_1.jpg","54855_2.jpg","54855_3.jpg"] },
];

/* ============================================
   ESTADO GLOBAL
   ============================================ */
let currentList  = [...productos];
let activeFilter = 'todos';

/* ============================================
   RENDER — dibuja las tarjetas de productos
   ============================================ */
function render(list) {
  const grid  = document.getElementById('prodGrid');
  const count = document.getElementById('prodCount');

  let filtered = list;
  if (activeFilter === 'precio')    filtered = list.filter(p => p.precio !== '0');
  if (activeFilter === 'consultar') filtered = list.filter(p => p.precio === '0');

  count.textContent = filtered.length + ' productos';

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty">
        <div class="e-icon">🔍</div>
        <h3>Sin resultados</h3>
        <p>Probá otro término o consultanos por WhatsApp</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const hasP = p.precio !== '0';
    return `
      <div class="prod-card" onclick="openModal('${p.codigo}')">
        ${!hasP ? '<span class="prod-badge ask">Consultar</span>' : ''}
        <div class="prod-img">
          <img src="assets/productos/${p.fotos[0]}"
               onerror="this.src='https://placehold.co/200x200/1f2230/5a6080?text=DICENTER'"
               alt="${p.nombre}">
        </div>
        <div class="prod-body">
          <div class="prod-code">COD: ${p.codigo}</div>
          <div class="prod-name">${p.nombre}</div>
          ${hasP
            ? `<div class="prod-price">Gs. ${p.precio}</div>
               <button class="btn-card">Ver detalle</button>`
            : `<div class="prod-price ask-price">Consultar precio</div>
               <button class="btn-card wa">💬 WhatsApp</button>`
          }
        </div>
      </div>`;
  }).join('');
}

/* ============================================
   FILTRAR POR CATEGORÍA O TÉRMINO
   ============================================ */
function go(termino) {
  if (window.event) window.event.preventDefault();

  currentList = productos.filter(p =>
    p.cat.toLowerCase() === termino.toLowerCase()
  );

  document.getElementById('sectionTitle').innerHTML = `Resultados: <span>"${termino}"</span>`;
  document.getElementById('heroGrid').style.display = 'none';
  
  const mq = document.getElementById('marqueeContainer');
  if (mq) mq.style.display = 'none';

  render(currentList);
  closeSidebar();
  document.getElementById('prodGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================
   RESET — vuelve al catálogo completo
   ============================================ */
function resetCatalog() {
  currentList  = [...productos];
  activeFilter = 'todos';

  document.getElementById('sectionTitle').innerHTML = 'Catálogo <span>completo</span>';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.chip').forEach((c, i) => c.classList.toggle('on', i === 0));
  document.getElementById('heroGrid').style.display = 'grid';

  const mq = document.getElementById('marqueeContainer');
  if (mq) mq.style.display = 'block';

  render(currentList);
}

/* ============================================
   FILTRO POR PRECIO (chips)
   ============================================ */
function setFilter(el, f) {
  activeFilter = f;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
  render(currentList);
}

/* ============================================
   FLYOUT SYSTEM — Desktop
   ============================================ */
const flyoutPanel = document.createElement('div');
flyoutPanel.id = 'flyoutPanel';
flyoutPanel.style.cssText = `
  display: none;
  position: fixed;
  z-index: 99999;
  padding-left: 4px;
`;
flyoutPanel.innerHTML = '<div class="flyout-inner" id="flyoutInner"></div>';
document.body.appendChild(flyoutPanel);

let flyoutTimeout = null;
let currentNavItem = null;

document.querySelectorAll('.nav-item').forEach(item => {
  const label  = item.querySelector('.nav-label');
  const flyout = item.querySelector('.flyout');

  if (!flyout) return;

  item.addEventListener('mouseenter', () => {
    if (window.innerWidth <= 768) return;
    clearTimeout(flyoutTimeout);
    currentNavItem = item;

    const inner = flyout.querySelector('.flyout-inner');
    const panelInner = document.getElementById('flyoutInner');
    panelInner.innerHTML = inner.innerHTML;
    panelInner.className = 'flyout-inner' + (inner.classList.contains('wide') ? ' wide' : '');

    const rect = label.getBoundingClientRect();
    flyoutPanel.style.top  = rect.top + 'px';
    flyoutPanel.style.left = rect.right + 'px';
    flyoutPanel.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 768) return;
    flyoutTimeout = setTimeout(hideFlyout, 120);
  });
});

flyoutPanel.addEventListener('mouseenter', () => {
  clearTimeout(flyoutTimeout);
});
flyoutPanel.addEventListener('mouseleave', () => {
  flyoutTimeout = setTimeout(hideFlyout, 120);
});

function hideFlyout() {
  flyoutPanel.style.display = 'none';
  currentNavItem = null;
}

window.addEventListener('scroll', hideFlyout, { passive: true });

/* ============================================
   MANEJO DEL NAV LABEL (click en categoría)
   ============================================ */
function handleNav(el, termino) {
  if (window.innerWidth <= 768) {
    const flyout = el.parentElement.querySelector('.flyout');
    if (!flyout) { go(termino); return; }

    const isOpen = flyout.classList.contains('mob-open');
    document.querySelectorAll('.flyout').forEach(f => f.classList.remove('mob-open'));
    if (!isOpen) flyout.classList.add('mob-open');
  }
}

/* ============================================
   MODAL — abre el detalle del producto
   ============================================ */
function openModal(cod) {
  const p = productos.find(x => x.codigo === cod);
  if (!p) return;

  document.getElementById('mCode').textContent  = 'Código: ' + p.codigo;
  document.getElementById('mTitle').textContent = p.nombre;

  const priceEl = document.getElementById('mPrice');
  if (p.precio !== '0') {
    priceEl.className   = 'modal-price';
    priceEl.textContent = 'Gs. ' + p.precio;
  } else {
    priceEl.className   = 'modal-price ask';
    priceEl.textContent = 'Precio a consultar';
  }

  const mainImg    = document.getElementById('mImg');
  mainImg.src      = 'assets/productos/' + p.fotos[0];
  mainImg.onerror  = () => mainImg.src = 'https://placehold.co/300x300/1f2230/5a6080?text=DICENTER';

  document.getElementById('mThumbs').innerHTML = p.fotos.map((f, i) =>
    `<img src="assets/productos/${f}"
          class="${i === 0 ? 'on' : ''}"
          onerror="this.style.display='none'"
          onclick="swapImg(this, 'assets/productos/${f}')">`
  ).join('');

  document.getElementById('mWaBtn').onclick = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `¡Hola DICENTER! Consulto por:\n ${p.nombre || ''}\n Código: ${p.codigo || ''}` +
      `${p.precio && p.precio !== '0' ? '\n Gs. ' + p.precio : ''}\n¿Tienen disponibilidad?`
    );
    window.location.href = `https://wa.me/595985947849?text=${msg}`;
  };

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function swapImg(el, src) {
  document.getElementById('mImg').src = src;
  document.querySelectorAll('#mThumbs img').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function checkClose(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

/* ============================================
   SIDEBAR MOBILE
   ============================================ */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

/* ============================================
   BÚSQUEDA EN TIEMPO REAL
   ============================================ */
document.getElementById('searchInput').addEventListener('input', e => {
  const v = e.target.value.trim().toLowerCase();

  if (!v) {
    resetCatalog();
    return;
  }

  currentList = productos.filter(p =>
    p.nombre.toLowerCase().includes(v) ||
    p.codigo.toLowerCase().includes(v) ||
    p.cat.toLowerCase().includes(v)
  );

  document.getElementById('sectionTitle').innerHTML = `Búsqueda: <span>"${v}"</span>`;
  document.getElementById('heroGrid').style.display = 'none';
  
  const mq = document.getElementById('marqueeContainer');
  if (mq) mq.style.display = 'none';

  render(currentList);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================
   CARRUSEL AUTOMÁTICO (SLIDER HERO)
   ============================================ */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide-item');
const dotsContainer = document.getElementById('sliderDots');
let slideInterval = null;

if (slides.length > 0 && dotsContainer) {
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.onclick = (e) => {
      e.stopPropagation();
      goToSlide(i);
    };
    dotsContainer.appendChild(dot);
  });

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }

  function goToSlide(index) {
    showSlide(index);
    startAutoSlide();
  }

  function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4500);
  }

  const sliderElem = document.getElementById('mainSlider');
  if (sliderElem) {
    sliderElem.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderElem.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

/* ============================================
   FILA EN MOVIMIENTO CONTINUO (MARQUEE)
   ============================================ */
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track || productos.length === 0) return;

  // Duplicamos la lista para generar un bucle infinito continuo
  const marqueeItems = [...productos, ...productos];

  track.innerHTML = marqueeItems.map(p => `
    <div class="marquee-card" onclick="openModal('${p.codigo}')">
      <div class="mq-img">
        <img src="assets/productos/${p.fotos[0]}" 
             onerror="this.src='https://placehold.co/120x120/1f2230/5a6080?text=DICENTER'" 
             alt="${p.nombre}">
      </div>
      <div class="mq-info">
        <div class="mq-name">${p.nombre}</div>
        <div class="mq-price">${p.precio !== '0' ? 'Gs. ' + p.precio : 'A consultar'}</div>
      </div>
    </div>
  `).join('');
}

/* ============================================
   INICIO
   ============================================ */
render(currentList);
initMarquee();
