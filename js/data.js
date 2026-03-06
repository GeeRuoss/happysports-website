/* ═══════════════════════════════════════════════════════════
   HAPPY SPORTS — Data Store (Products & Reservations)
   Uses localStorage for persistence across pages
   ═══════════════════════════════════════════════════════════ */

const HS_DATA = {

  // ── Default products (loaded once if localStorage is empty) ──
  defaultProducts: [
    {
      id: 1,
      name: 'Scott Spark 940 2023',
      cat: 'vtt',
      price: 2490,
      original: 3200,
      desc: 'VTT full suspension 29", Shimano Deore 12v, fourche Fox. État excellent, 1 saison.',
      emoji: '🚵',
      isNew: false,
      reserved: false
    },
    {
      id: 2,
      name: 'Scott Speedster 50 2024',
      cat: 'velo',
      price: 1590,
      original: null,
      desc: 'Vélo de route aluminium, Shimano Tiagra 20v, cadre léger. Neuf, dernier exemplaire.',
      emoji: '🚴',
      isNew: true,
      reserved: false
    },
    {
      id: 3,
      name: 'Scott Patron eRIDE 920 2025',
      cat: 'ebike',
      price: 5999,
      original: null,
      desc: 'E-MTB avec batterie 800Wh Bosch. Autonomie 120km+. Bonus communal Bagnes -400.-',
      emoji: '⚡',
      isNew: true,
      reserved: false
    },
    {
      id: 4,
      name: 'BMC Roadmachine 01 2023',
      cat: 'velo',
      price: 3800,
      original: 5200,
      desc: 'Vélo d\'endurance carbone, Shimano Ultegra Di2, roues carbon. Parfait état.',
      emoji: '🏁',
      isNew: false,
      reserved: false
    },
    {
      id: 5,
      name: 'SCOR 4060 LT 2024',
      cat: 'vtt',
      price: 3100,
      original: null,
      desc: 'VTT trail 29", carbone, SRAM GX Eagle 12v, fourche Fox 36. Neuf.',
      emoji: '⛰️',
      isNew: true,
      reserved: false
    },
    {
      id: 6,
      name: 'Völkl Blaze 94 + Fix. Look',
      cat: 'ski',
      price: 420,
      original: 680,
      desc: 'Ski freeride/rando 170cm + fixations Look. Très bon état, 2 saisons.',
      emoji: '🎿',
      isNew: false,
      reserved: true
    },
    {
      id: 7,
      name: 'Casque Fox Speedframe Pro',
      cat: 'accessoire',
      price: 79,
      original: 115,
      desc: 'Casque VTT MIPS, taille M/L, coloris noir mat. Jamais utilisé.',
      emoji: '⛑️',
      isNew: false,
      reserved: false
    },
    {
      id: 8,
      name: 'Scott Genius 910 2022',
      cat: 'vtt',
      price: 2100,
      original: 2800,
      desc: 'VTT enduro full-susp 29", Shimano XT 12v, Fox Float 36. 2 saisons, TBE.',
      emoji: '🏔️',
      isNew: false,
      reserved: false
    },
  ],

  // ── Default reservations ──
  defaultReservations: [
    {
      id: 1,
      productId: 6,
      productName: 'Völkl Blaze 94 + Fix. Look',
      client: 'Marie Fontaine',
      email: 'marie@exemple.ch',
      phone: '+41 78 123 45 67',
      date: '2025-03-01',
      expires: '2025-03-06'
    }
  ],

  // ── Load from localStorage or use defaults ──
  getProducts() {
    const stored = localStorage.getItem('hs_products');
    if (stored) return JSON.parse(stored);
    this.saveProducts(this.defaultProducts);
    return this.defaultProducts;
  },

  saveProducts(products) {
    localStorage.setItem('hs_products', JSON.stringify(products));
  },

  getReservations() {
    const stored = localStorage.getItem('hs_reservations');
    if (stored) return JSON.parse(stored);
    this.saveReservations(this.defaultReservations);
    return this.defaultReservations;
  },

  saveReservations(reservations) {
    localStorage.setItem('hs_reservations', JSON.stringify(reservations));
  },

  addProduct(product) {
    const products = this.getProducts();
    const maxId = products.reduce((m, p) => Math.max(m, p.id), 0);
    product.id = maxId + 1;
    product.reserved = false;
    products.push(product);
    this.saveProducts(products);
    return product;
  },

  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  },

  addReservation(reservation) {
    const reservations = this.getReservations();
    const products = this.getProducts();
    const maxId = reservations.reduce((m, r) => Math.max(m, r.id), 0);
    reservation.id = maxId + 1;

    // Mark product as reserved
    const p = products.find(p => p.id === reservation.productId);
    if (p) {
      p.reserved = true;
      this.saveProducts(products);
    }

    reservations.push(reservation);
    this.saveReservations(reservations);
    return reservation;
  },

  getNextId() {
    const products = this.getProducts();
    return products.reduce((m, p) => Math.max(m, p.id), 0) + 1;
  },

  formatDate(date) {
    return date.toISOString().split('T')[0];
  },

  expiryDate(fromDate, days = 5) {
    const d = new Date(fromDate);
    d.setDate(d.getDate() + days);
    return this.formatDate(d);
  }
};
