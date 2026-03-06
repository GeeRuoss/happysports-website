/* ============================================================
   Happy Sports — Shared Components (Nav / Footer)
   ============================================================ */

function renderNav(activePage) {
  const pages = [
    { key: 'services', href: 'services.html', label: 'nav_services' },
    { key: 'occasion', href: 'occasion.html', label: 'nav_occasion' },
    { key: 'contact',  href: 'contact.html',  label: 'nav_contact'  },
  ];
  const isAdmin = window.location.pathname.includes('/admin/');
  const base = isAdmin ? '../' : '';

  const links = pages.map(p =>
    `<a href="${base}${p.href}" class="${activePage === p.key ? 'active' : ''}" data-i18n="${p.label}"></a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${base}${p.href}" class="${activePage === p.key ? 'active' : ''}" data-i18n="${p.label}"></a>`
  ).join('');

  return `
  <nav class="nav">
    <div class="container nav-inner">
      <a href="${base}index.html" class="nav-logo">
        <img src="${base}assets/Logo+Happy+Sport-1920w.jpg" alt="Happy Sports">
      </a>
      <div class="nav-links">${links}</div>
      <div class="nav-right">
        <button class="lang-btn ${window.HS_LANG==='fr'?'active-lang':''}" onclick="setLang('fr')">FR</button>
        <button class="lang-btn ${window.HS_LANG==='en'?'active-lang':''}" onclick="setLang('en')">EN</button>
      </div>
      <button class="nav-toggle" onclick="toggleNav()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav-mobile" id="nav-mobile">${mobileLinks}</div>
  `;
}

function toggleNav() {
  document.getElementById('nav-mobile').classList.toggle('open');
}

function renderInfoStrip() {
  return `
  <div class="info-strip">
    <div class="container info-strip-inner">
      <span class="info-strip-item"><i data-lucide="map-pin"></i> Route de Verbier 22, 1934 Le Châble</span>
      <span class="info-sep">·</span>
      <span class="info-strip-item"><i data-lucide="phone"></i> <a href="tel:+41277761544" data-i18n="strip_phone"></a></span>
      <span class="info-sep">·</span>
      <span class="info-strip-item"><i data-lucide="clock"></i> <span data-i18n="strip_open_summer"></span></span>
      <span class="info-sep">·</span>
      <span class="info-strip-item"><i data-lucide="award"></i> <span data-i18n="strip_sport2000"></span></span>
    </div>
  </div>
  `;
}

function renderFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">
            <img src="${base}assets/Logo+Happy+Sport-1920w.jpg" alt="Happy Sports">
          </div>
          <p class="footer-brand-desc" data-i18n="footer_desc"></p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_nav"></h4>
          <a href="${base}index.html">Accueil</a>
          <a href="${base}services.html" data-i18n="nav_services"></a>
          <a href="${base}occasion.html" data-i18n="nav_occasion"></a>
          <a href="${base}contact.html" data-i18n="nav_contact"></a>
          <a href="${base}admin/index.html" data-i18n="footer_admin"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_contact"></h4>
          <a href="tel:+41277761544">+41 27 776 15 44</a>
          <a href="tel:+41797367373">+41 79 736 73 73</a>
          <a href="mailto:happysports@netplus.ch">happysports@netplus.ch</a>
          <a href="${base}contact.html">Route de Verbier 22, Le Châble</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer_copy"></span>
        <a href="admin/index.html" data-i18n="footer_admin"></a>
      </div>
    </div>
  </footer>
  `;
}

/* Inject nav + footer on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = renderNav(document.body.dataset.page || '');
  }
  const stripEl = document.getElementById('info-strip');
  if (stripEl) {
    stripEl.innerHTML = renderInfoStrip();
  }
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }
  applyI18n();
  /* Render Lucide icons — loaded via CDN in each page's <head> */
  if (window.lucide) lucide.createIcons();
});
