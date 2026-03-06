/* ============================================================
   Happy Sports — Data Store (Products & Reservations)
   localStorage-based persistence
   ============================================================ */

const HS_DEFAULTS = [
  {
    id: 'p1', cat: 'vtt',
    img: 'https://img.velocorner.ch/7267488/conversions/img_8609-w750.avif',
    name: 'Scott Genius 40 2025',
    desc: 'VTT enduro tout-suspendu. Taille M. Couleur argent. Fox suspension. Shimano Deore XT.',
    condition: 'Très bon état',
    price: 2090, origPrice: 2999,
    available: true
  },
  {
    id: 'p2', cat: 'velo',
    img: 'https://img.velocorner.ch/7267483/conversions/img_8606-w750.avif',
    name: 'Scott Addict 30 2025',
    desc: 'Vélo de course carbone. Taille M. Couleur gris. Groupe Shimano 105 Di2.',
    condition: 'Comme neuf',
    price: 3650, origPrice: 3799,
    available: true
  },
  {
    id: 'p3', cat: 'ebike',
    img: 'https://img.velocorner.ch/8136048/conversions/img_9710-w750.avif',
    name: 'Scott Patron E-Ride 920 2025',
    desc: 'E-MTB enduro Bosch Performance CX 800Wh. Taille S. Couleur bleu. Batterie neuve.',
    condition: 'Bon état',
    price: 4490, origPrice: 6700,
    available: true
  },
  {
    id: 'p4', cat: 'ebike',
    img: 'https://img.velocorner.ch/7401223/conversions/1000087444-w750.avif',
    name: 'Scott Voltage E-Ride 920 2025',
    desc: 'E-MTB enduro Bosch Performance CX. Taille L. Couleur blanc. Parfait état.',
    condition: 'Très bon état',
    price: 4290, origPrice: 6599,
    available: true
  },
  {
    id: 'p5', cat: 'vtt',
    img: 'https://img.velocorner.ch/8327965/conversions/1000123349-w750.avif',
    name: 'Scott Gambler 900 Tuned 2024',
    desc: 'VTT downhill carbone. Taille L. Fox 40 Factory, Fox DHX2 Factory. Compétition.',
    condition: 'Bon état',
    price: 4700, origPrice: 9999,
    available: true
  },
  {
    id: 'p6', cat: 'vtt',
    img: 'https://img.velocorner.ch/7243255/conversions/cube_2-w750.avif',
    name: 'Cube Two15 HPC SL 2022',
    desc: 'VTT downhill carbone. Taille L. Fourche Fox 40. Amortisseur Fox DHX2. Couleur gris.',
    condition: 'Bon état',
    price: 2900, origPrice: 4500,
    available: true
  },
  {
    id: 'p7', cat: 'velo',
    img: 'https://img.velocorner.ch/7317352/conversions/img_8685-w750.avif',
    name: 'Scott Roxter 400 2025',
    desc: 'VTT semi-rigide 24 pouces. Idéal junior ou petite morphologie. Couleur bleu.',
    condition: 'Comme neuf',
    price: 530, origPrice: 549,
    available: true
  },
  {
    id: 'p8', cat: 'ebike',
    img: 'https://img.velocorner.ch/6827999/conversions/img_7563-w750.avif',
    name: 'Scott Lumen eRide 920 2025',
    desc: 'E-MTB all-mountain ultra-léger. Taille S. Couleur rose. Bosch Performance SX 400Wh.',
    condition: 'Très bon état',
    price: 5490, origPrice: 5999,
    available: true
  },
];

/* Reset cache si données anciennes sans images */
(function() {
  try {
    const stored = JSON.parse(localStorage.getItem('hs_products') || '[]');
    if (stored.length && !stored[0].img) localStorage.removeItem('hs_products');
  } catch(e) {}
})();

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
      customer,
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
