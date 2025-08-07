import React from "react";

// props: p (product object), idx (index), getCategoryColor (function), getAnimationDelay (function)
const ProductCard = ({ p, idx, getCategoryColor, getAnimationDelay }) => (
  <div
    className={`group overflow-hidden bg-gradient-to-br ${getCategoryColor(
      p.category
    )} border-0 shadow-smooth-md hover:shadow-smooth-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in`}
    style={{ animationDelay: getAnimationDelay(idx) }}
    data-id={p.id}
  >
    <div className="relative overflow-hidden">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <span className="absolute top-3 left-3 bg-sale text-sale-foreground font-bold px-3 py-1 rounded-full shadow">
        -{p.discount}%
      </span>
      <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white transition-colors duration-300 rounded-full border-none">
        <span className="sr-only">Favorite</span>
        <svg
          className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21C12 21 7 16.5 4 13.5C1.5 11 2 7.5 5 6C7.5 4.5 10 6.5 12 8.5C14 6.5 16.5 4.5 19 6C22 7.5 22.5 11 20 13.5C17 16.5 12 21 12 21Z"
            strokeWidth="2"
          />
        </svg>
      </button>
      <span className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
        {p.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
        {p.name}
      </h3>
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex items-center">
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
          </svg>
          <span className="text-sm font-semibold text-foreground ml-1">
            {p.rating}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          ({p.reviews} ulasan)
        </span>
        <span className="text-sm text-muted-foreground">
          • {p.sold} terjual
        </span>
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-price">{p.price}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground line-through">
            {p.originalPrice}
          </span>
          <span className="text-sm text-sale font-semibold">
            Hemat {p.save}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 6v6l4 2" strokeWidth="2" />
          </svg>
          Berakhir dalam {p.endsIn}
        </div>
      </div>
      <button
        className="w-full bg-gradient-to-r from-primary to-primary-hover hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-lg text-white font-semibold flex items-center justify-center border-none add-to-cart-btn"
        data-id={p.id}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="2" />
        </svg>
        Tambah ke Keranjang
      </button>
    </div>
  </div>
);

export default ProductCard;