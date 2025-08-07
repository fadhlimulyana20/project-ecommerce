import ProductCard from "./parts/ProductCard";

const ProductSection = () => {
    const products = [
        {
            id: "p1",
            name: "Smartphone XYZ",
            image: "https://images.samsung.com/id/smartphones/galaxy-s25/buy/product_color_navy_PC.png?imbypass=true",
            category: "Elektronik",
            discount: 50,
            price: "Rp2.999.000",
            originalPrice: "Rp5.999.000",
            save: "Rp3.000.000",
            rating: 4.9,
            reviews: 123,
            sold: 500,
            endsIn: "02:15:00"
        },
        {
            id: "p2",
            name: "Sneakers ABC",
            image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ea3412-5646-4d99-8927-951489e3239e/AIR+MAX+TL+2.5.png",
            category: "Fashion",
            discount: 40,
            price: "Rp599.000",
            originalPrice: "Rp999.000",
            save: "Rp400.000",
            rating: 4.8,
            reviews: 98,
            sold: 300,
            endsIn: "01:45:00"
        },
        {
            id: "p3",
            name: "Blender SuperMix",
            image: "https://media.dekoruma.com/catalogue/WHN-437676.jpg",
            category: "Rumah Tangga",
            discount: 30,
            price: "Rp349.000",
            originalPrice: "Rp499.000",
            save: "Rp150.000",
            rating: 4.7,
            reviews: 56,
            sold: 150,
            endsIn: "00:55:00"
        }
    ];

    const getCategoryColor = (category) => {
        switch (category) {
            case "Elektronik":
                return "from-pink-100 to-pink-300";
            case "Fashion":
                return "from-green-100 to-green-300";
            case "Rumah Tangga":
                return "from-yellow-100 to-yellow-300";
            default:
                return "from-gray-100 to-gray-300";
        }
    }

    const getAnimationDelay = (idx) => {
        return `${idx * 100}ms`;
    }


    return (
        <section id="products" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-red-100 text-sale px-4 py-2 rounded-full text-sm font-medium mb-4">
                        {/* Clock Icon */}
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M12 6v6l4 2" strokeWidth="2" />
                        </svg>
                        Flash Sale Terbatas
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Produk <span className="text-red-500">Diskon</span> Hari Ini
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Jangan lewatkan kesempatan emas! Hemat hingga 50% untuk produk pilihan
                    </p>
                </div>

                {/* Products Grid */}
                <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Iterasi product card */}
                    {products.map((p, index) => (
                        <ProductCard
                            key={p.id}
                            p={p}
                            idx={index}
                            getCategoryColor={getCategoryColor}
                            getAnimationDelay={getAnimationDelay}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button
                        className="group px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center">
                        Lihat Semua Produk Diskon
                        <svg className="w-5 h-5 ml-2 group-hover:animate-bounce" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M12 6v6l4 2" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default ProductSection;