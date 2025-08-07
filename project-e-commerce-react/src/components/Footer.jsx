const FooterSection = () => (
  <footer className="bg-card border-t border-border">
    {/* Features Section */}
    <div className="py-16 bg-secondary/30"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-card rounded-2xl shadow-smooth-md hover:shadow-smooth-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            {/* Star Icon */}
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <polygon
                points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Produk Terbaik</h3>
          <p className="text-muted-foreground text-sm">Pilihan produk berkualitas dan terlaris setiap hari.</p>
        </div>
        <div className="text-center p-6 bg-card rounded-2xl shadow-smooth-md hover:shadow-smooth-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "100ms" }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            {/* Truck Icon */}
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="1" y="7" width="15" height="10" rx="2" strokeWidth="2" />
              <path d="M16 11h3l3 3v3a2 2 0 0 1-2 2h-1" strokeWidth="2" />
              <circle cx="5.5" cy="19.5" r="1.5" />
              <circle cx="18.5" cy="19.5" r="1.5" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Pengiriman Cepat</h3>
          <p className="text-muted-foreground text-sm">Pengiriman cepat dan aman ke seluruh Indonesia.</p>
        </div>
        <div className="text-center p-6 bg-card rounded-2xl shadow-smooth-md hover:shadow-smooth-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "200ms" }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            {/* Shield Icon */}
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6z" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Jaminan Aman</h3>
          <p className="text-muted-foreground text-sm">Transaksi dijamin aman dengan berbagai metode pembayaran.</p>
        </div>
        <div className="text-center p-6 bg-card rounded-2xl shadow-smooth-md hover:shadow-smooth-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "300ms" }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            {/* Support Icon */}
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path d="M8 15c1.333 1 2.667 1 4 0" strokeWidth="2" />
              <path d="M9 9h.01M15 9h.01" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Layanan 24/7</h3>
          <p className="text-muted-foreground text-sm">Tim support siap membantu Anda kapan saja.</p>
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-foreground">EcomStore</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Platform e-commerce terpercaya dengan lebih dari 10,000 produk berkualitas.
              Kami berkomitmen memberikan pengalaman berbelanja terbaik untuk Anda.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                {/* MapPin Icon */}
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" strokeWidth="2" />
                  <circle cx="12" cy="11" r="2" strokeWidth="2" />
                </svg>
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                {/* Phone Icon */}
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0 1 22 16.92z"
                    strokeWidth="2" />
                </svg>
                <span className="text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                {/* Mail Icon */}
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
                  <polyline points="3 7 12 13 21 7" strokeWidth="2" />
                </svg>
                <span className="text-sm">hello@ecomstore.com</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://facebook.com" aria-label="Facebook"
                className="p-2 border rounded hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300">
                {/* Facebook Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram"
                className="p-2 border rounded hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300">
                {/* Instagram Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter"
                className="p-2 border rounded hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300">
                {/* Twitter Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99A12.13 12.13 0 0 1 3.15 5.13a4.28 4.28 0 0 0 1.33 5.72c-.7-.02-1.36-.21-1.94-.53v.05c0 2.01 1.43 3.68 3.33 4.06-.35.1-.72.16-1.1.16-.27 0-.53-.03-.78-.07.53 1.65 2.07 2.85 3.89 2.88A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Perusahaan</h3>
              <ul className="space-y-3">
                <li><a href="#tentang"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Tentang Kami</a></li>
                <li><a href="#karir"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Karir</a></li>
                <li><a href="#blog"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Blog</a></li>
                <li><a href="#kontak"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Bantuan</h3>
              <ul className="space-y-3">
                <li><a href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">FAQ</a></li>
                <li><a href="#pengiriman"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Pengiriman</a></li>
                <li><a href="#pengembalian"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Pengembalian</a></li>
                <li><a href="#dukungan"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Dukungan</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Belanja</h3>
              <ul className="space-y-3">
                <li><a href="#kategori"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Kategori</a></li>
                <li><a href="#diskon"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Diskon</a></li>
                <li><a href="#produk-baru"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Produk Baru</a></li>
                <li><a href="#terlaris"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Terlaris</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Jaminan</h3>
              <ul className="space-y-3">
                <li><a href="#garansi"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Garansi Produk</a></li>
                <li><a href="#keamanan"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Keamanan</a></li>
                <li><a href="#privasi"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Privasi</a></li>
                <li><a href="#syarat"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="py-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Dapatkan Update Terbaru
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan informasi produk terbaru,
            promo menarik, dan tips belanja ekslusif.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg border border-border" required />
              <button type="submit"
                className="bg-gradient-primary hover:bg-primary-hover transition-all duration-300 px-6 py-3 rounded-lg text-white font-semibold">
                Berlangganan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="py-6 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 EcomStore. Seluruh hak cipta dilindungi.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-muted-foreground text-sm">Metode Pembayaran:</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-6 bg-primary rounded-sm flex items-center justify-center">
                {/* CreditCard Icon */}
                <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="12" rx="2" strokeWidth="2" />
                  <path d="M2 10h20" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xs text-muted-foreground">
                Visa, Mastercard, OVO, GoPay, DANA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;