import React from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold text-foreground">EcomStore</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home"
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#categories"
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Categories</a>
              <a href="#discounts"
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Discounts</a>
              <a href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">Contact</a>
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
            <a href="/cart.html" className="p-2 bg-transparent border-none relative">
              <span className="sr-only">Shopping Cart</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  strokeWidth="2" />
              </svg>
              <span
                className="absolute -top-1 -right-1 bg-sale text-sale-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a href="/cart.html" className="p-2 bg-transparent border-none">
              <span className="sr-only">Shopping Cart</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  strokeWidth="2" />
              </svg>
            </a>
            <button 
              className="p-2 bg-transparent border-none" 
              id="mobile-menu-toggle"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Menu</span>
              <svg id="menu-icon" className={`h-6 w-6 ${showMobileMenu ? "hidden" : "block"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
              </svg>
              <svg id="close-icon" className={`h-6 w-6 ${showMobileMenu ? "block" : "hidden"}`} fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`md:hidden ${showMobileMenu ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a href="#home"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Home</a>
            <a href="#categories"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Categories</a>
            <a href="#discounts"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Discounts</a>
            <a href="#contact"
              className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200">Contact</a>
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
  );
};

export default Navbar;