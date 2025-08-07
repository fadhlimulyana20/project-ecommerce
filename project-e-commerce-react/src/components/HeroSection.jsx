const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20">
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div
              className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {/* Star Icon */}
              <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                  points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
              </svg>
              Produk Terlaris Minggu Ini
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Belanja
              <span className="block text-accent">Smart</span>
              Hemat Lebih
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Temukan ribuan produk berkualitas dengan harga terbaik. Gratis ongkir untuk pembelian
              pertama!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#belanja"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg flex items-center justify-center text-lg font-semibold">
                {/* ShoppingBag Icon */}
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2l1 2h10l1-2" strokeWidth="2" />
                  <rect x="3" y="6" width="18" height="13" rx="2" strokeWidth="2" />
                </svg>
                Mulai Belanja
                {/* ArrowRight Icon */}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </a>
              <a href="#katalog"
                className="border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-6 py-3 rounded-lg flex items-center justify-center text-lg font-semibold">
                Lihat Katalog
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80 text-sm">Produk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99%</div>
                <div className="text-white/80 text-sm">Puas</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img src="https://picsum.photos/600/700?random=1" alt="Featured Product"
                className="w-full max-w-md mx-auto rounded-3xl shadow-smooth-xl transform rotate-3 hover:rotate-0 transition-transform duration-700" />

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-2xl shadow-smooth-lg animate-bounce-in">
                <div className="text-sm font-bold">DISKON 50%</div>
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white text-foreground p-4 rounded-2xl shadow-smooth-lg animate-bounce-in animation-delay-300">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {/* 5 Star Icons */}
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <polygon
                          points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5</span>
                </div>
                <div className="text-xs text-muted-foreground">1,234 ulasan</div>
              </div>
            </div>

            {/* Background decoration */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;