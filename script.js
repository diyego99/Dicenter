/* ============================================
   DICENTER | Tecnología y Hogar
   script.js
   ============================================ */

/* ============================================
   DATOS DE PRODUCTOS
   Para agregar más productos, copiá el formato:
   { codigo: "XXXXX", nombre: "Nombre del producto", cat: "Categoría", precio: "0", fotos: ["XXXXX_1.jpg","XXXXX_2.jpg","XXXXX_3.jpg"] }

   - precio: "0" = se muestra "Consultar precio"
   - precio: "150.000" = se muestra el precio
   - cat: debe coincidir con los valores de las categorías del sidebar
   ============================================ */
const productos = [
  { codigo: "39339", nombre: "Abridor de Vino Quanta Blue LED QTAVE91 - Gris", cat: "Hogar y Decoración", precio: "130.000", fotos: ["39339_1.jpg","39339_2.jpg","39339_3.jpg"] },
  { codigo: "17683", nombre: "Adaptador Bluetooth Dongle CSR 4.0 BT / USB / PC", cat: "Adaptadores Wifi y Bluetooth", precio: "35.000", fotos: ["17683_1.jpg","17683_2.jpg","17683_3.jpg"] },
  { codigo: "35087", nombre: "Adaptador Bluetooth TP-Link UB5A BT 5.3 / USB - Negro", cat: "Adaptadores Wifi y Bluetooth", precio: "55.000", fotos: ["35087_1.jpg","35087_2.jpg","35087_3.jpg"] },
  { codigo: "20890", nombre: "Adaptador Bluetooth Dongle CSR 5.0 BT / USB / PC", cat: "Adaptadores Wifi y Bluetooth", precio: "42.000", fotos: ["20890_1.jpg","20890_2.jpg","20890_3.jpg"] },
  { codigo: "20211", nombre: "Adaptador Conector HDMI Doble Hembra", cat: "Cables y Adaptadores", precio: "30.000", fotos: ["20211_1.jpg","20211_2.jpg","20211_3.jpg"] },
  { codigo: "13539", nombre: "Adaptador Conversor HDMI2AV Full HD 1080 HDMI / RCA - Blanco", cat: "Cables y Adaptadores", precio: "65.000", fotos: ["13539_1.jpg","13539_2.jpg","13539_3.jpg"] },
  { codigo: "13896", nombre: "Adaptador Extender / RJ45 Bege", cat: "Cables y Adaptadores", precio: "10.000", fotos: ["13896_1.jpg","13896_2.jpg","13896_3.jpg"] },
  { codigo: "49827", nombre: "Adaptador Extender Satellite A-HD132 HDMI Wireless 1080P 150M", cat: "Red y Internet", precio: "725.000", fotos: ["49827_1.jpg","49827_2.jpg","49827_3.jpg"] },
  { codigo: "51946", nombre: "Moldura de Contacto para Procesador Thermalright Secure Frame V2 AM5 - Negro", cat: "Accesorios para Cooler", precio: "88.000", fotos: ["51946_1.jpg","51946_2.jpg","51946_3.jpg"] },
  { codigo: "51947", nombre: "Moldura de Contato para Processador Thermalright LGA1700-BCF - Negro", cat: "Accesorios para Cooler", precio: "88.000", fotos: ["51947_1.jpg","51947_2.jpg","51947_3.jpg"] },
  { codigo: "30272", nombre: "Adaptador Receiver de Audio 3.5MM Bluetooth Quanta QTRABT10", cat: "Electrónicos", precio: "56.000", fotos: ["30272_1.jpg","30272_2.jpg","30272_3.jpg"] },
  { codigo: "53347", nombre: "Adaptador Tp-Link Tapo P110 Smart Plug Alexa - Blanco", cat: "Electrónicos", precio: "70.000", fotos: ["53347_1.jpg","53347_2.jpg","53347_3.jpg"] },
  { codigo: "43599", nombre: "Depilador Nasal Quanta QTCET21 - Negro (Kit 2 en 1)", cat: "Electrónicos", precio: "50.000", fotos: ["43599_1.jpg","43599_2.jpg","43599_3.jpg"] },
  { codigo: "45871", nombre: "Apresentador Laser Quanta QTPLEC20 - Negro", cat: "Periféricos", precio: "77.000", fotos: ["45871_1.jpg","45871_2.jpg","45871_3.jpg"] },
  { codigo: "45870", nombre: "Apresentador Laser Quanta QTPLM30 - Negro", cat: "Periféricos", precio: "215.000", fotos: ["45870_1.jpg","45870_2.jpg","45870_3.jpg"] },
  { codigo: "49083", nombre: "Apresentador Laser Satellite LR-25R - Negro", cat: "Periféricos", precio: "60.000", fotos: ["49083_1.jpg","49083_2.jpg","49083_3.jpg"] },
  { codigo: "48916", nombre: "Apresentador Laser Satellite LR-26R - Negro", cat: "Periféricos", precio: "0", fotos: ["48916_1.jpg","48916_2.jpg","48916_3.jpg"] },
  { codigo: "54790", nombre: "Presentador Laser Satellite LR-27R - Negro", cat: "Periféricos", precio: "0", fotos: ["54790_1.jpg","54790_2.jpg","54790_3.jpg"] },
  { codigo: "54791", nombre: "Presentador Laser Satellite LR-28R - Negro", cat: "Periféricos", precio: "0", fotos: ["54791_1.jpg","54791_2.jpg","54791_3.jpg"] },
  { codigo: "48536", nombre: "Ar Acondicionado Portátil Midea MD115V-12PORMID 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["48536_1.jpg","48536_2.jpg","48536_3.jpg"] },
  { codigo: "56049", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56049_1.jpg","56049_2.jpg","56049_3.jpg"] },
  { codigo: "56050", nombre: "Aire Acondicionado Split Amenews Wi-Fi Kit 18000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["56050_1.jpg","56050_2.jpg","56050_3.jpg"] },
  { codigo: "53181", nombre: "Aire Condicionado Split Black+Decker 12K-T Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["53181_1.jpg","53181_2.jpg","53181_3.jpg"] },
  { codigo: "55367", nombre: "Aire Acondicionado Split Geminis GS-INV12BR Kit 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["55367_1.jpg","55367_2.jpg","55367_3.jpg"] },
  { codigo: "51287", nombre: "Aire Acondicionado Split HYE AC12INV-BR Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["51287_1.jpg","51287_2.jpg","51287_3.jpg"] },
  { codigo: "55472", nombre: "Aire Acondicionado Split Midea MD-12000INVMD Kit 12000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["55472_1.jpg","55472_2.jpg","55472_3.jpg"] },
  { codigo: "48539", nombre: "Aire Acondicionado Split Midea MD-12MID Kit 12000BTU", cat: "Electrónicos", precio: "0", fotos: ["48539_1.jpg","48539_2.jpg","48539_3.jpg"] },
  { codigo: "55682", nombre: "Aire Acondicionado Split Midea MDIA-18INV AI Kit 18000BTU - Inverter", cat: "Electrónicos", precio: "0", fotos: ["55682_1.jpg","55682_2.jpg","55682_3.jpg"] },
  { codigo: "55428", nombre: "Aire Acondicionado Split Smartfy AR01 Kit 12000BTU 220V", cat: "Electrónicos", precio: "0", fotos: ["55428_1.jpg","55428_2.jpg","55428_3.jpg"] },
  { codigo: "56404", nombre: "Aspirador 4LIFE FL102PB Sopravac Vacuum Portátil - Negro", cat: "Electrónicos", precio: "0", fotos: ["56404_1.jpg","56404_2.jpg","56404_3.jpg"] },
  { codigo: "43426", nombre: "Aspirador Tp-Link Robot Vacuum-mop Cleaner Tapo RV10 - Blanco", cat: "Electrónicos", precio: "0", fotos: ["43426_1.jpg","43426_2.jpg","43426_3.jpg"] },
  { codigo: "39360", nombre: "Aspirador Xiaomi Mi Robot Vacuum E10 B112 Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["39360_1.jpg","39360_2.jpg","39360_3.jpg"] },
  { codigo: "50544", nombre: "Aspirador Xiaomi Mi Vacuum Cleaner G20 D205 - Blanco", cat: "Electrónicos", precio: "0", fotos: ["50544_1.jpg","50544_2.jpg","50544_3.jpg"] },
  { codigo: "54209", nombre: "Aspiradora Xiaomi Mi Robot Vacuum H40 OV51 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["54209_1.jpg","54209_2.jpg","54209_3.jpg"] },
  { codigo: "47760", nombre: "Aspirador Xiaomi Mi Robot Vacumm S20+ B108GL Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["47760_1.jpg","47760_2.jpg","47760_3.jpg"] },
  { codigo: "54186", nombre: "Aspirador Xiaomi Mi Robot Vacuum S40 OV81 Bivolt - Blanco", cat: "Electrónicos", precio: "0", fotos: ["54186_1.jpg","54186_2.jpg","54186_3.jpg"] },
  { codigo: "49057", nombre: "Aspirador Xiaomi Mi Robot Vacumm X20 Pro D102GL 220V - Blanco", cat: "Electrónicos", precio: "0", fotos: ["49057_1.jpg","49057_2.jpg","49057_3.jpg"] },
  { codigo: "52201", nombre: "Balanza Digital Satellite A-WS8801 - 180KG", cat: "Electrónicos", precio: "0", fotos: ["52201_1.jpg","52201_2.jpg","52201_3.jpg"] },
  { codigo: "52220", nombre: "Balanza Digital Xiaomi Smart Scale S200 MJTZC02YM", cat: "Electrónicos", precio: "0", fotos: ["52220_1.jpg","52220_2.jpg","52220_3.jpg"] },
  { codigo: "35106", nombre: "Barbeador Quanta QTAPK20 Recargable - Gris (Kit 12 en 1)", cat: "Electrónicos", precio: "0", fotos: ["35106_1.jpg","35106_2.jpg","35106_3.jpg"] },
  { codigo: "55719", nombre: "Cable Apple Lightning A USB MD819FE/A 2M - Blanco", cat: "Apple", precio: "0", fotos: ["55719_1.jpg","55719_2.jpg","55719_3.jpg"] },
  { codigo: "35488", nombre: "Cable Apple USB-C Macho A USB-C MLL82ZM/A 2M", cat: "Apple", precio: "0", fotos: ["35488_1.jpg","35488_2.jpg","35488_3.jpg"] },
  { codigo: "32023", nombre: "Cable Apple USB-C Macho A Lightning MM0A3AM/A 1M", cat: "Apple", precio: "0", fotos: ["32023_1.jpg","32023_2.jpg","32023_3.jpg"] },
  { codigo: "49729", nombre: "Cable Apple USB-C Macho A Lightning MQGH2FE/A 2M", cat: "Apple", precio: "0", fotos: ["49729_1.jpg","49729_2.jpg","49729_3.jpg"] },
  { codigo: "51040", nombre: "Cable Apple USB-C Macho A USB-C MW493ZM/A 1M", cat: "Apple", precio: "0", fotos: ["51040_1.jpg","51040_2.jpg","51040_3.jpg"] },
  { codigo: "17248", nombre: "Cable de Energia para fuente y Gabinete - 1.3M", cat: "Periféricos", precio: "0", fotos: ["17248_1.jpg","17248_2.jpg","17248_3.jpg"] },
  { codigo: "45747", nombre: "Cable de alimentación para fuente y Gabinete - 1.5M", cat: "Periféricos", precio: "0", fotos: ["45747_1.jpg","45747_2.jpg","45747_3.jpg"] },
  { codigo: "52538", nombre: "Cable Adaptador FTX USB-C Macho para HDMI Hembra 4K", cat: "Periféricos", precio: "0", fotos: ["52538_1.jpg","52538_2.jpg","52538_3.jpg"] },
  { codigo: "51918", nombre: "Cable Adaptador Satellite AL-80 USB-C Macho para HDMI 4K", cat: "Periféricos", precio: "0", fotos: ["51918_1.jpg","51918_2.jpg","51918_3.jpg"] },
  { codigo: "21775", nombre: "Cable Adaptador USB 3.0 para HDMI Hembra - Negro", cat: "Periféricos", precio: "0", fotos: ["21775_1.jpg","21775_2.jpg","21775_3.jpg"] },
  { codigo: "35278", nombre: "Cable Audio Estereo 2 Macho para 1 Audio Hembra", cat: "Periféricos", precio: "0", fotos: ["35278_1.jpg","35278_2.jpg","35278_3.jpg"] },
  { codigo: "52542", nombre: "Cable Auxiliar Audio Estereo FTX 1M 3.5MM - Negro", cat: "Periféricos", precio: "0", fotos: ["52542_1.jpg","52542_2.jpg","52542_3.jpg"] },
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

  // Aplica el filtro activo
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
  if (event) event.preventDefault();

  currentList = productos.filter(p =>
    p.cat.toLowerCase().includes(termino.toLowerCase()) ||
    p.nombre.toLowerCase().includes(termino.toLowerCase())
  );

  document.getElementById('sectionTitle').innerHTML = `Resultados: <span>"${termino}"</span>`;
  document.getElementById('heroGrid').style.display = 'none';
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
   El flyout se mueve al <body> y se posiciona
   con coordenadas absolutas para evitar que
   el sidebar lo corte con overflow.
   ============================================ */

// Panel flotante único que se reutiliza
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

// Al hacer mouseenter en un nav-item → muestra el flyout
document.querySelectorAll('.nav-item').forEach(item => {
  const label  = item.querySelector('.nav-label');
  const flyout = item.querySelector('.flyout');

  if (!flyout) return; // items sin submenú (Monitores, Gabinetes, etc.)

  item.addEventListener('mouseenter', () => {
    if (window.innerWidth <= 768) return;
    clearTimeout(flyoutTimeout);
    currentNavItem = item;

    // Copia el contenido del flyout al panel flotante
    const inner = flyout.querySelector('.flyout-inner');
    const panelInner = document.getElementById('flyoutInner');
    panelInner.innerHTML = inner.innerHTML;
    panelInner.className = 'flyout-inner' + (inner.classList.contains('wide') ? ' wide' : '');

    // Calcula posición basada en el nav-label
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

// Mantiene el flyout visible cuando el mouse entra al panel
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

// Cierra el flyout al hacer scroll
window.addEventListener('scroll', hideFlyout, { passive: true });

/* ============================================
   MANEJO DEL NAV LABEL (click en categoría)
   - Mobile: abre/cierra el acordeón
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

  // Código y título
  document.getElementById('mCode').textContent  = 'Código: ' + p.codigo;
  document.getElementById('mTitle').textContent = p.nombre;

  // Precio
  const priceEl = document.getElementById('mPrice');
  if (p.precio !== '0') {
    priceEl.className   = 'modal-price';
    priceEl.textContent = 'Gs. ' + p.precio;
  } else {
    priceEl.className   = 'modal-price ask';
    priceEl.textContent = 'Precio a consultar';
  }

  // Imagen principal
  const mainImg    = document.getElementById('mImg');
  mainImg.src      = 'assets/productos/' + p.fotos[0];
  mainImg.onerror  = () => mainImg.src = 'https://placehold.co/300x300/1f2230/5a6080?text=DICENTER';

  // Miniaturas
  document.getElementById('mThumbs').innerHTML = p.fotos.map((f, i) =>
    `<img src="assets/productos/${f}"
          class="${i === 0 ? 'on' : ''}"
          onerror="this.style.display='none'"
          onclick="swapImg(this, 'assets/productos/${f}')">`
  ).join('');

  // Botón WhatsApp — ⚠️ reemplazá XXXXXXXXXX con tu número real
  document.getElementById('mWaBtn').onclick = () => {
    const msg = encodeURIComponent(
      `¡Hola DICENTER! Consulto por:\n📦 ${p.nombre}\n🔢 Código: ${p.codigo}` +
      `${p.precio !== '0' ? '\n💰 Gs. ' + p.precio : ''}\n¿Tienen disponibilidad?`
    );
    window.open(`https://wa.me/5959XXXXXXXXXX?text=${msg}`, '_blank');
  };

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* Cambia la imagen principal al hacer click en miniatura */
function swapImg(el, src) {
  document.getElementById('mImg').src = src;
  document.querySelectorAll('#mThumbs img').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
}

/* Cierra el modal */
function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* Cierra el modal si se hace click en el fondo oscuro */
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
  render(currentList);
});

/* Cierra modal con tecla Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================
   INICIO — renderiza el catálogo completo
   ============================================ */
render(currentList);
