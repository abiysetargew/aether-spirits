'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ArrowRight, Plus, Minus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Heisberg BR',
    price: 450,
    originalPrice: null,
    rating: 4.8,
    reviews: 127,
    category: 'Premium',
    badge: 'Bestseller',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png',
  },
  {
    id: 2,
    name: 'Heisberg RD',
    price: 450,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    category: 'Premium',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-red.png',
  },
  {
    id: 3,
    name: 'Heisberg BL',
    price: 450,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    category: 'Premium',
    badge: 'Popular',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-blue-X2PSV6.png',
  },
  {
    id: 4,
    name: 'Heisberg GR',
    price: 450,
    originalPrice: null,
    rating: 4.6,
    reviews: 98,
    category: 'Premium',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-green-QRHPVB6.png',
  },
  {
    id: 5,
    name: 'Heisberg SM Black',
    price: 280,
    originalPrice: null,
    rating: 4.8,
    reviews: 76,
    category: 'Small Bottle',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/black-small-829HCTV.png',
  },
  {
    id: 6,
    name: 'Heisberg SM Brown',
    price: 280,
    originalPrice: null,
    rating: 4.7,
    reviews: 54,
    category: 'Small Bottle',
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/brownn-small-829HCTV.png',
  },
];

const categories = ['All', 'Premium', 'Small Bottle'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const filteredProducts = products.filter((product) =>
    activeCategory === 'All' || product.category === activeCategory
  );

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Shop</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              <span className="gold-gradient">Heisberg</span> Beers
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Browse our collection of premium Ethiopian craft beers. Available in full bottles and convenient small formats.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#050505] border-y border-[rgba(201,169,98,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#c9a962] text-black'
                    : 'border border-gray-700 text-gray-400 hover:border-[#c9a962] hover:text-[#c9a962]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:border-[rgba(201,169,98,0.3)] transition-all duration-500">
                  <div className="relative h-72 bg-gradient-to-b from-[rgba(201,169,98,0.05)] to-[#0a0a0a] flex items-center justify-center p-8">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.badge && (
                        <span className="px-3 py-1 text-xs font-bold uppercase rounded bg-[rgba(201,169,98,0.2)] text-[#c9a962]">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300">
                        <Heart size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-[#c9a962]" fill="#c9a962" />
                        <span className="text-white text-sm">{product.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-semibold text-white">ETB {product.price}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center text-white">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] transition-all duration-300">
                        <ShoppingBag size={18} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-[rgba(201,169,98,0.1)]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                Wholesale Orders
              </h3>
              <p className="text-gray-400 mb-6">
                Looking to stock Heisberg beers in your bar, restaurant, or retail store? 
                We offer competitive wholesale pricing for qualified businesses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#e8d5a3] transition-colors"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-[rgba(201,169,98,0.1)]"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                Event Partnerships
              </h3>
              <p className="text-gray-400 mb-6">
                Sponsor your next event with Heisberg beers. From corporate gatherings to 
                music festivals, we bring the premium experience.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#e8d5a3] transition-colors"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
