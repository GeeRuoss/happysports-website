# Happy Sports — Site Web

Site vitrine + vente pour **Happy Sports** (Le Châble / Verbier, VS, Suisse).
Partenaire Sport 2000 · Vélos SCOTT, BMC, SCOR · Ski · Chaussures · Service · Location.

## Structure du projet

```
happysports/
├── index.html          # Accueil
├── velos.html          # Vélos (Scott, BMC, SCOR, E-Bikes)
├── ski.html            # Ski
├── chaussures.html     # Chaussures de sport
├── service.html        # Service & Réparation
├── locations.html      # Locations vélos & ski
├── occasion.html       # Produits en vente + réservation
├── contact.html        # Contact & horaires
├── admin/
│   └── index.html      # Panneau admin (mot de passe protégé)
├── css/
│   └── main.css        # Tous les styles
├── js/
│   ├── i18n.js         # Traductions FR / EN
│   ├── components.js   # Header, footer, info-strip partagés
│   └── data.js         # Store localStorage (produits & réservations)
└── assets/             # Images, logo (à ajouter)
```

## Fonctionnalités

- **Bilingue FR / EN** (bascule en haut à droite)
- **Page Occasion** : grille de produits avec filtres, prix barrés/rabais automatiques, système de réservation (nom, e-mail, téléphone, 5 jours)
- **Panneau Admin** (`/admin/`) : ajout/modification/suppression de produits, liste des réservations, tableau de bord
- **Responsive** : mobile, tablette, desktop
- **Zéro dépendance** : HTML + CSS + JS vanilla pur

## Admin

URL : `admin/index.html`
Mot de passe (démo) : `admin123`
⚠️ À sécuriser avec un vrai backend avant mise en production.

## Déploiement

Site statique — déployable sur n'importe quel hébergeur :
- [Netlify](https://netlify.com) (recommandé, gratuit)
- [Vercel](https://vercel.com)
- Hébergeur traditionnel (FTP)

## Prochaines étapes

- [ ] Ajouter les vraies photos produits dans `/assets/`
- [ ] Brancher un service d'envoi d'e-mail (EmailJS, Formspree, ou backend Node.js)
- [ ] Remplacer localStorage par une vraie base de données (Supabase, PocketBase...)
- [ ] Ajouter Google Maps sur la page Contact
- [ ] SEO : balises Open Graph, sitemap.xml

## Contact

Happy Sports · Route de Verbier 22 · 1934 Le Châble
+41 27 776 15 44 · happysports@netplus.ch
