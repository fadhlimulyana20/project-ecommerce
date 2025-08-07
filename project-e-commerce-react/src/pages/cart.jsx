import React from "react";
import { Link } from "react-router";

const Cart = () => (
  <>
    <div className="min-h-screen">
      {/* Bagian Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-bold text-foreground">EcomStore</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#categories" className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Categories</a>
                <a href="#discounts" className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Discounts</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 bg-transparent border-none">
                <span className="sr-only">Search</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                </svg>
              </button>
              <button className="p-2 bg-transparent border-none">
                <span className="sr-only">User</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" strokeWidth="2" />
                  <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" strokeWidth="2" />
                </svg>
              </button>
              <Link to="/cart" className="p-2 bg-transparent border-none relative">
                <span className="sr-only">Shopping Cart</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-sale text-sale-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Link to="/cart" className="p-2 bg-transparent border-none">
                <span className="sr-only">Shopping Cart</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" />
                </svg>
              </Link>
              <button className="p-2 bg-transparent border-none" id="mobile-menu-toggle">
                <span className="sr-only">Menu</span>
                <svg id="menu-icon" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
                </svg>
                <svg id="close-icon" className="h-6 w-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Home</a>
              <a href="#categories" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Categories</a>
              <a href="#discounts" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Discounts</a>
              <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Contact</a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="p-2 bg-transparent border-none">
                  <span className="sr-only">Search</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                  </svg>
                </button>
                <button className="p-2 bg-transparent border-none">
                  <span className="sr-only">User</span>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" strokeWidth="2" />
                    <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Content Area (with top padding to account for fixed navbar) */}
      <div className="pt-16">
        {/* Section untuk navbar telah ditambahkan */}
        {/* Tambahkan konten cart di sini */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  {/* Tombol hapus */}
                  <th></th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Product</th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Price</th>
                  <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Quantity</th>
                  <th className="px-2 sm:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Data cart akan diisi di sini */}
              </tbody>
            </table>

            {/* Total Section */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-xl font-bold total-amount">Rp0</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-4">
            <button
              id="checkout-button"
              className="w-full bg-purple-600 hover:bg-purple-700 hover:cursor-pointer text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Cart;