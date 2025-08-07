const CategoriesSection = () => (
  <section id="categories" className="py-20 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Jelajahi Kategori
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Temukan produk favorit Anda dari berbagai kategori pilihan
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Card 1 */}
        <div className="group cursor-pointer overflow-hidden bg-gradient-to-br from-purple-200 to-purple-400 border-0 shadow-smooth-lg hover:shadow-smooth-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
          style={{ animationDelay: "0ms" }}>
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-purple-400 opacity-90"></div>
            <img src="https://picsum.photos/400/200?random=2" alt="Elektronik"
              className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
            <div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              120 Produk
            </div>
          </div>
          <div className="p-6">
            <h3
              className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Elektronik
            </h3>
            <p className="text-muted-foreground mb-4">
              Gadget, laptop, dan perangkat elektronik terbaru.
            </p>
            <a href="#elektronik"
              className="inline-flex items-center text-primary hover:text-primary-hover font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Lihat Produk
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="group cursor-pointer overflow-hidden bg-gradient-to-br from-green-200 to-green-400 border-0 shadow-smooth-lg hover:shadow-smooth-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
          style={{ animationDelay: "100ms" }}>
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-green-400 opacity-90"></div>
            <img src="https://picsum.photos/400/200?random=3" alt="Fashion"
              className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
            <div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              80 Produk
            </div>
          </div>
          <div className="p-6">
            <h3
              className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Fashion
            </h3>
            <p className="text-muted-foreground mb-4">
              Pakaian, sepatu, dan aksesoris terkini.
            </p>
            <a href="#fashion"
              className="inline-flex items-center text-primary hover:text-primary-hover font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Lihat Produk
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="group cursor-pointer overflow-hidden bg-gradient-to-br from-yellow-200 to-yellow-400 border-0 shadow-smooth-lg hover:shadow-smooth-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
          style={{ animationDelay: "200ms" }}>
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-yellow-400 opacity-90"></div>
            <img src="https://picsum.photos/400/200?random=4" alt="Rumah Tangga"
              className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
            <div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              60 Produk
            </div>
          </div>
          <div className="p-6">
            <h3
              className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Rumah Tangga
            </h3>
            <p className="text-muted-foreground mb-4">
              Peralatan rumah tangga dan dekorasi.
            </p>
            <a href="#rumah-tangga"
              className="inline-flex items-center text-primary hover:text-primary-hover font-semibold group-hover:translate-x-1 transition-transform duration-300">
              Lihat Produk
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center">
        <a href="#semua-kategori"
          className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 group">
          Lihat Semua Kategori
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default CategoriesSection;