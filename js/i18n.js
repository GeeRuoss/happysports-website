/* ============================================================
   Happy Sports — i18n (FR / EN)
   ============================================================ */

window.HS_LANG = localStorage.getItem('hs_lang') || 'fr';

window.HS_STRINGS = {
  fr: {
    /* Nav */
    nav_services: 'Services',
    nav_occasion: 'Occasion',
    nav_contact:  'Contact',
    nav_admin:    'Admin',

    /* Info strip */
    strip_open_summer: 'Lun–Sam 8h30–18h30',
    strip_open_winter: 'Lun–Sam 8h30–18h30, Dim 9h–17h',
    strip_phone:       '+41 27 776 15 44',
    strip_sport2000:   'Partenaire Sport 2000',

    /* Hero (services) */
    hero_tag:     'Le Châble · Verbier',
    hero_title:   'Votre shop sport<br>en Valais',
    hero_sub:     'Vélos Scott, BMC & SCOR · Ski · Location · Service & Réparation',
    hero_btn1:    'Voir les occasions',
    hero_btn2:    'Nous contacter',

    /* Services page */
    services_tag:     'Notre offre',
    services_title:   'Tout pour votre pratique sportive',
    services_sub:     'Du matériel haut de gamme, un atelier expert, et une équipe passionnée.',

    tab_velos:    'Vélos',
    tab_ski:      'Ski',
    tab_location: 'Location',
    tab_service:  'Atelier',

    /* Brands */
    brands_title: 'Nos marques',

    /* Occasion page */
    occ_tag:   'Matériel d\'occasion',
    occ_title: 'Vélos & équipements à saisir',
    occ_sub:   'Sélection de matériel de qualité, révisé par notre atelier. Réservation en ligne possible.',

    filter_all:   'Tout',
    filter_velo:  'Vélos route',
    filter_vtt:   'VTT',
    filter_ebike: 'E-Bike',
    filter_ski:   'Ski',
    filter_acc:   'Accessoires',

    reserve_btn:  'Réserver',
    modal_title:  'Réserver cet article',
    modal_name:   'Nom complet',
    modal_email:  'E-mail',
    modal_phone:  'Téléphone',
    modal_notice: 'Votre réservation est valable <strong>5 jours</strong>. Vous devrez passer en magasin pour confirmer. Un e-mail de confirmation vous sera envoyé.',
    modal_submit: 'Confirmer ma réservation',
    modal_success_title: 'Réservation confirmée !',
    modal_success_text:  'Nous vous attendons au magasin dans les 5 jours. À bientôt !',
    modal_close_btn: 'Fermer',

    /* Contact */
    contact_tag:     'Nous trouver',
    contact_title:   'Venez nous voir',
    contact_sub:     'Deux adresses au Val de Bagnes, une équipe disponible.',

    contact_shop:    'Magasin principal',
    contact_atelier: 'Atelier',
    lbl_address:     'Adresse',
    lbl_phone:       'Téléphone',
    lbl_mobile:      'Mobile',
    lbl_email:       'E-mail',
    lbl_hours:       'Horaires',
    lbl_partner:     'Partenaire',

    hours_title:     'Horaires d\'ouverture',
    season_summer:   'Saison estivale (mai – oct.)',
    season_winter:   'Saison hivernale (nov. – avr.)',

    form_title:  'Envoyer un message',
    form_sub:    'Une question ? On vous répond rapidement.',
    form_name:   'Nom',
    form_email:  'E-mail',
    form_subject:'Sujet',
    form_msg:    'Message',
    form_send:   'Envoyer',
    form_ok:     'Message envoyé ! Nous vous répondrons bientôt.',

    /* Footer */
    footer_desc: 'Spécialiste vélo & ski au cœur du Val de Bagnes depuis plus de 30 ans. Partenaire Sport 2000.',
    footer_nav:  'Navigation',
    footer_contact: 'Contact',
    footer_copy: '© 2025 Happy Sports. Tous droits réservés.',
    footer_admin: 'Espace admin',

    /* Admin */
    admin_title:  'Espace Administrateur',
    admin_sub:    'Gestion des produits & réservations',
    admin_pw_label: 'Mot de passe',
    admin_login:  'Se connecter',
    admin_wrong:  'Mot de passe incorrect.',
    admin_logout: 'Déconnexion',
    admin_products: 'Produits en vente',
    admin_add:    'Ajouter un produit',
    admin_reservations: 'Réservations',
    admin_stats_prod: 'Produits actifs',
    admin_stats_res: 'Réservations',
    admin_stats_exp: 'Expirées',
  },
  en: {
    nav_services: 'Services',
    nav_occasion: 'Used gear',
    nav_contact:  'Contact',
    nav_admin:    'Admin',

    strip_open_summer: 'Mon–Sat 8:30–18:30',
    strip_open_winter: 'Mon–Sat 8:30–18:30, Sun 9:00–17:00',
    strip_phone:       '+41 27 776 15 44',
    strip_sport2000:   'Sport 2000 Partner',

    hero_tag:     'Le Châble · Verbier',
    hero_title:   'Your mountain<br>sports shop',
    hero_sub:     'Scott, BMC & SCOR bikes · Ski · Rental · Service & Repair',
    hero_btn1:    'Browse used gear',
    hero_btn2:    'Contact us',

    services_tag:     'What we offer',
    services_title:   'Everything for your sport',
    services_sub:     'Premium gear, expert workshop, passionate team.',

    tab_velos:    'Bikes',
    tab_ski:      'Ski',
    tab_location: 'Rental',
    tab_service:  'Workshop',

    brands_title: 'Our brands',

    occ_tag:   'Used gear',
    occ_title: 'Bikes & equipment',
    occ_sub:   'Quality used gear, serviced by our workshop. Reserve online.',

    filter_all:   'All',
    filter_velo:  'Road bikes',
    filter_vtt:   'MTB',
    filter_ebike: 'E-Bike',
    filter_ski:   'Ski',
    filter_acc:   'Accessories',

    reserve_btn:  'Reserve',
    modal_title:  'Reserve this item',
    modal_name:   'Full name',
    modal_email:  'Email',
    modal_phone:  'Phone',
    modal_notice: 'Your reservation is valid for <strong>5 days</strong>. You\'ll need to come to the shop to confirm. A confirmation email will be sent to you.',
    modal_submit: 'Confirm reservation',
    modal_success_title: 'Reservation confirmed!',
    modal_success_text:  'We\'ll see you at the shop within 5 days. See you soon!',
    modal_close_btn: 'Close',

    contact_tag:     'Find us',
    contact_title:   'Come visit us',
    contact_sub:     'Two locations in Val de Bagnes, a team ready to help.',

    contact_shop:    'Main shop',
    contact_atelier: 'Workshop',
    lbl_address:     'Address',
    lbl_phone:       'Phone',
    lbl_mobile:      'Mobile',
    lbl_email:       'Email',
    lbl_hours:       'Hours',
    lbl_partner:     'Partner',

    hours_title:     'Opening hours',
    season_summer:   'Summer season (May – Oct.)',
    season_winter:   'Winter season (Nov. – Apr.)',

    form_title:  'Send a message',
    form_sub:    'Got a question? We\'ll get back to you quickly.',
    form_name:   'Name',
    form_email:  'Email',
    form_subject:'Subject',
    form_msg:    'Message',
    form_send:   'Send',
    form_ok:     'Message sent! We\'ll reply soon.',

    footer_desc: 'Bike & ski specialist in the heart of Val de Bagnes for over 30 years. Sport 2000 partner.',
    footer_nav:  'Navigation',
    footer_contact: 'Contact',
    footer_copy: '© 2025 Happy Sports. All rights reserved.',
    footer_admin: 'Admin area',

    admin_title:  'Admin Panel',
    admin_sub:    'Manage products & reservations',
    admin_pw_label: 'Password',
    admin_login:  'Log in',
    admin_wrong:  'Wrong password.',
    admin_logout: 'Log out',
    admin_products: 'Products for sale',
    admin_add:    'Add product',
    admin_reservations: 'Reservations',
    admin_stats_prod: 'Active products',
    admin_stats_res: 'Reservations',
    admin_stats_exp: 'Expired',
  }
};

function t(key) {
  return (window.HS_STRINGS[window.HS_LANG] || window.HS_STRINGS.fr)[key] || key;
}

function setLang(lang) {
  window.HS_LANG = lang;
  localStorage.setItem('hs_lang', lang);
  location.reload();
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
}
