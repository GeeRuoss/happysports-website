/* ============================================================
   Happy Sports — Data Store (Products & Reservations)
   localStorage-based persistence
   ============================================================ */

const HS_DEFAULTS = [
  {
    id: 'p1', cat: 'velo',
    emoji: '🚴',
    name: 'Scott Speedster 50',
    desc: 'Vélo de route aluminium. Groupe Shimano Claris 16v. Taille M.',
    price: 690, origPrice: 990,
    available: true
  },
  {
    id: 'p2', cat: 'vtt',
    emoji: '🚵',
    name: 'Scott Spark 940',
    desc: 'VTT tout-suspendu carbone. Fox suspension. Taille L.',
    price: 2490, origPrice: 3200,
    available: true
  },
  {
    id: 'p3', cat: 'ebike',
    emoji: '⚡',
    name: 'Scott Patron E-Ride 920',
    desc: 'E-MTB Bosch Performance CX 800Wh. Taille M/L.',
    price: 4999, origPrice: 6499,
    available: true
  },
  {
    id: 'p4', cat: 'velo',
    emoji: '🚴',
    name: 'BMC Roadmachine 01',
    desc: 'Vélo de route carbone. Groupe Shimano Ultegra Di2. Taille S.',
    price: 3200, origPrice: 4800,
    available: true
  },
  {
    id: 'p5', cat: 'ski',
    emoji: '🎿',
    name: 'Völkl Racetiger SL',
    desc: 'Ski de slalom homologué. Longueur 165cm. Fixations incluses.',
    price: 480, origPrice: 750,
    available: true
  },
  {
    id: 'p6', cat: 'acc',
    emoji: '⛑️',
    name: 'Fox Proframe RS',
    desc: 'Casque enduro intégral. Taille M. Couleur noir mat.',
    price: 190, origPrice: 320,
    available: true
  },
];

/* ── API ───────────────────────────────────────────────────── */
window.HS_DATA = {
  getProducts() {
    try {
      const stored = localStorage.getItem('hs_products');
      return stored ? JSON.parse(stored) : HS_DEFAULTS;
    } catch { return HS_DEFAULTS; }
  },

  saveProducts(products) {
    localStorage.setItem('hs_products', JSON.stringify(products));
  },

  addProduct(product) {
    const products = this.getProducts();
    product.id = 'p' + Date.now();
    product.available = true;
    products.push(product);
    this.saveProducts(products);
    return product;
  },

  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  },

  getReservations() {
    try {
      return JSON.parse(localStorage.getItem('hs_reservations') || '[]');
    } catch { return []; }
  },

  addReservation(productId, customer) {
    const reservations = this.getReservations();
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 5);
    const res = {
      id: 'r' + Date.now(),
      productId,
      customer, /* { name, email, phone } */
      createdAt: new Date().toISOString(),
      expiresAt: expiry.toISOString(),
    };
    reservations.push(res);
    localStorage.setItem('hs_reservations', JSON.stringify(reservations));
    return res;
  },

  deleteReservation(id) {
    const reservations = this.getReservations().filter(r => r.id !== id);
    localStorage.setItem('hs_reservations', JSON.stringify(reservations));
  },

  isExpired(res) {
    return new Date(res.expiresAt) < new Date();
  },

  formatDate(iso) {
    return new Date(iso).toLocaleDateString('fr-CH', {
      day: '2-digit', month: '2-digit', year: '2-digit'
    });
  },

  formatPrice(n) {
    return 'CHF ' + Number(n).toLocaleString('fr-CH');
  },

  catLabel(cat) {
    const map = { velo: 'Vélo route', vtt: 'VTT', ebike: 'E-Bike', ski: 'Ski', acc: 'Accessoire' };
    return map[cat] || cat;
  }
};
