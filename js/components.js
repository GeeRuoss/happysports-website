/* ═══════════════════════════════════════════════════════════
   HAPPY SPORTS — Shared Components (Header / Footer)
   ═══════════════════════════════════════════════════════════ */

function renderTopBar() {
  return `<div class="topbar"><span data-i18n="topbar"></span></div>`;
}

function renderHeader(activePage) {
  const links = [
    { key: 'home',    label: 'nav_home',    href: 'index.html', id: 'home' },
    { key: 'bikes',   label: 'nav_bikes',   href: 'velos.html', id: 'bikes',
      children: [
        { label: 'nav_bikes_road',  href: 'velos.html#route' },
        { label: 'nav_bikes_ebike', href: 'velos.html#ebike' },
        { label: 'nav_bikes_vtt',   href: 'velos.html#vtt' },
      ]
    },
    { key: 'ski',     label: 'nav_ski',     href: 'ski.html',   id: 'ski' },
    { key: 'shoes',   label: 'nav_shoes',   href: 'chaussures.html', id: 'shoes' },
    { key: 'service', label: 'nav_service', href: 'service.html', id: 'service',
      children: [
        { label: 'nav_service_bike', href: 'service.html#velos' },
        { label: 'nav_service_ski',  href: 'service.html#ski' },
      ]
    },
    { key: 'rental',  label: 'nav_rental',  href: 'locations.html', id: 'rental',
      children: [
        { label: 'nav_rental_bike', href: 'locations.html#velos' },
        { label: 'nav_rental_ski',  href: 'locations.html#ski' },
      ]
    },
  ];

  const navLinks = links.map(link => {
    const isActive = link.key === activePage;
    if (link.children) {
      const dropdown = link.children.map(c =>
        `<a href="${c.href}" data-i18n="${c.label}"></a>`
      ).join('');
      return `
        <div class="nav-item">
          <a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}" data-i18n="${link.label}">
            <span class="nav-arrow">▾</span>
          </a>
          <div class="nav-dropdown">${dropdown}</div>
        </div>`;
    }
    return `
      <div class="nav-item">
        <a href="${link.href}" class="nav-link ${isActive ? 'active' : ''}" data-i18n="${link.label}"></a>
      </div>`;
  }).join('');

  return `
    ${renderTopBar()}
    <nav class="navbar" role="navigation">
      <a class="nav-logo" href="index.html">
        <svg class="nav-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4L36 32H4L20 4Z" fill="#D42B24" opacity="0.9"/>
          <path d="M20 4L29 20H11L20 4Z" fill="#111" opacity="0.4"/>
          <circle cx="29" cy="33" r="3" fill="#D42B24"/>
          <circle cx="35" cy="29" r="2" fill="#D42B24" opacity="0.6"/>
        </svg>
        <div>
          <div class="nav-logo-text">HAPPY<span>SPORTS</span></div>
          <span class="nav-logo-sub">Sport 2000 · Le Châble</span>
        </div>
      </a>

      <div class="nav-menu" id="nav-menu">
        ${navLinks}
        <div class="nav-item">
          <a href="occasion.html" class="nav-link nav-link-occasion ${activePage === 'occasion' ? 'active' : ''}" data-i18n="nav_occasion"></a>
        </div>
        <div class="nav-item">
          <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}" data-i18n="nav_contact"></a>
        </div>
      </div>

      <div class="nav-right">
        <div class="nav-social">
          <a href="https://www.facebook.com/happysportsverbier" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/happysports_lechable" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
        </div>
        <div class="lang-toggle">
          <button data-lang="fr" onclick="setLang('fr')">FR</button>
          <button data-lang="en" onclick="setLang('en')">EN</button>
        </div>
        <button class="nav-burger" id="nav-burger" aria-label="Menu" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
}

function renderInfoStrip() {
  return `
    <div class="info-strip">
      <div class="info-strip-inner">
        <div class="info-item">
          <div class="info-icon">📍</div>
          <div class="info-text">
            <h4>Happy Sports</h4>
            <p data-i18n="info_location"></p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🕐</div>
          <div class="info-text">
            <h4 data-i18n="hours_summer"></h4>
            <p data-i18n="info_hours_val"></p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📞</div>
          <div class="info-text">
            <h4 data-i18n="info_phone"></h4>
            <p>+41 27 776 15 44</p>
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🔒</div>
          <div class="info-text">
            <h4 data-i18n="info_reserve"></h4>
            <p data-i18n="info_reserve_sub"></p>
          </div>
        </div>
      </div>
    </div>`;
}

function renderFooter() {
  return `
    <footer>
      <div class="footer-main">
        <div class="footer-brand">
          <div class="footer-logo-text">HAPPY<span>SPORTS</span></div>
          <p class="footer-tagline" data-i18n="footer_tagline"></p>
          <div class="footer-social">
            <a href="https://www.facebook.com/happysportsverbier" target="_blank" rel="noopener">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/happysports_lechable" target="_blank" rel="noopener">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer_links"></h4>
          <ul>
            <li><a href="index.html"     data-i18n="nav_home"></a></li>
            <li><a href="velos.html"     data-i18n="nav_bikes"></a></li>
            <li><a href="ski.html"       data-i18n="nav_ski"></a></li>
            <li><a href="chaussures.html" data-i18n="nav_shoes"></a></li>
            <li><a href="service.html"   data-i18n="nav_service"></a></li>
            <li><a href="locations.html" data-i18n="nav_rental"></a></li>
            <li><a href="occasion.html"  data-i18n="nav_occasion"></a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer_contact"></h4>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📍</span>
            <div class="footer-contact-text">Route de Verbier 22<br/>1934 Le Châble</div>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">📞</span>
            <div class="footer-contact-text">
              <a href="tel:+41277761544">+41 27 776 15 44</a><br/>
              <a href="tel:+41797367373">+41 79 736 73 73</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-icon">✉️</span>
            <div class="footer-contact-text">
              <a href="mailto:happysports@netplus.ch">happysports@netplus.ch</a>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer_hours"></h4>
          <table class="hours-table">
            <tr><td colspan="2" style="font-weight:700;font-size:.72rem;color:#555;padding-bottom:4px" data-i18n="hours_summer"></td></tr>
            <tr><td data-i18n="hours_mon_fri"></td><td>9h–12h / 15h–18h30</td></tr>
            <tr><td data-i18n="hours_sat"></td><td>9h–12h / 13h30–17h</td></tr>
            <tr><td data-i18n="hours_sun"></td><td class="hours-closed" data-i18n="hours_closed"></td></tr>
            <tr><td colspan="2" style="font-weight:700;font-size:.72rem;color:#555;padding-top:10px;padding-bottom:4px" data-i18n="hours_winter"></td></tr>
            <tr><td data-i18n="hours_mon_fri"></td><td>8h30–12h / 13h30–18h30</td></tr>
            <tr><td data-i18n="hours_sat"></td><td>8h30–12h / 13h30–17h</td></tr>
            <tr><td data-i18n="hours_sun"></td><td>8h30–11h / 15h–17h</td></tr>
          </table>
        </div>
      </div>

      <div class="footer-bottom">
        <span data-i18n="footer_rights"></span>
        <div class="footer-bottom-links">
          <a href="#" data-i18n="footer_impressum"></a>
          <a href="#" data-i18n="footer_privacy"></a>
        </div>
        <div class="sport2000-badge">
          <span>🏔️</span>
          <span data-i18n="footer_sport2000"></span>
        </div>
      </div>
    </footer>`;
}

function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('open');
}

// Init shared components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  const page = document.body.dataset.page || '';

  if (headerEl) headerEl.innerHTML = renderHeader(page);
  if (footerEl) footerEl.innerHTML = renderFooter();

  applyI18n();
});
