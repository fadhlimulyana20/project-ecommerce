const CallToActionSection = () => (
  <section className="py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 relative overflow-hidden">
    {/* Background Pattern */}
    <div
      className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30">
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-16">
        {/* Badge */}
        <span
          className="inline-flex items-center bg-white/20 text-white border border-white/30 mb-6 px-4 py-2 text-sm rounded-full font-medium">
          {/* Gift Icon */}
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="13" rx="2" strokeWidth="2" />
            <path
              d="M12 7V3M8.5 7C7.12 7 6 5.88 6 4.5S7.12 2 8.5 2 11 3.12 11 4.5V7M15.5 7C16.88 7 18 5.88 18 4.5S16.88 2 15.5 2 13 3.12 13 4.5V7"
              strokeWidth="2" />
          </svg>
          Penawaran Terbatas
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Bergabung Sekarang &<br />
          <span className="text-accent text-yellow-300">Dapatkan Diskon 25%</span>
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Daftar sebagai member dan nikmati berbagai keuntungan eksklusif serta penawaran menarik setiap harinya
        </p>

        {/* Newsletter Signup */}
        <form className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Masukkan email Anda"
              className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:bg-white/30 px-4 py-3 rounded-lg"
              required />
            <button type="submit"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
              Daftar Sekarang
              {/* ArrowRight Icon */}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </form>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0ms" }}>
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl text-white mb-4 hover:bg-white/30 transition-colors duration-300">
              {/* Star Icon */}
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                  points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Member Eksklusif</h3>
            <p className="text-white/80 text-sm">Akses promo khusus dan diskon tambahan untuk member.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl text-white mb-4 hover:bg-white/30 transition-colors duration-300">
              {/* Truck Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="1" y="7" width="15" height="10" rx="2" strokeWidth="2" />
                <path d="M16 11h3l3 3v3a2 2 0 0 1-2 2h-1" strokeWidth="2" />
                <circle cx="5.5" cy="19.5" r="1.5" />
                <circle cx="18.5" cy="19.5" r="1.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gratis Ongkir</h3>
            <p className="text-white/80 text-sm">Nikmati pengiriman gratis untuk pembelian pertama.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl text-white mb-4 hover:bg-white/30 transition-colors duration-300">
              {/* Shield Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6z" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pembayaran Aman</h3>
            <p className="text-white/80 text-sm">Transaksi dijamin aman dengan berbagai metode pembayaran.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl text-white mb-4 hover:bg-white/30 transition-colors duration-300">
              {/* Support Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M8 15c1.333 1 2.667 1 4 0" strokeWidth="2" />
                <path d="M9 9h.01M15 9h.01" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Layanan 24/7</h3>
            <p className="text-white/80 text-sm">Tim support siap membantu Anda kapan saja.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#belanja"
            className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg font-semibold flex items-center justify-center text-lg">
            Mulai Belanja Sekarang
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
            </svg>
          </a>
          <a href="#download"
            className="border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-6 py-3 rounded-lg font-semibold flex items-center justify-center text-lg">
            Download Aplikasi
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">Dipercaya oleh 50,000+ pelanggan</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white text-lg font-bold">★★★★★</div>
            <div className="text-white text-sm">4.9/5 Rating</div>
            <div className="text-white text-sm">•</div>
            <div className="text-white text-sm">15,000+ Ulasan</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToActionSection;