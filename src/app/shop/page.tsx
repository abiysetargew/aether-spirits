'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ArrowRight, Plus, Minus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ETHO Signature Gin',
    type: 'London Dry Gin',
    price: 2500,
    originalPrice: null,
    rating: 4.9,
    reviews: 86,
    category: 'Gin',
    badge: 'Bestseller',
    abv: '47%',
    note: 'Juniper & Ethiopian Botanicals',
  },
  {
    id: 2,
    name: 'ETHO XO Cognac',
    type: 'Extra Old',
    price: 8500,
    originalPrice: null,
    rating: 5.0,
    reviews: 42,
    category: 'Cognac',
    badge: 'Limited',
    abv: '40%',
    note: '25 Years Aged',
  },
  {
    id: 3,
    name: 'ETHO Reserve Blend',
    type: 'Signature Blend',
    price: 4200,
    originalPrice: null,
    rating: 4.8,
    reviews: 67,
    category: 'Blends',
    badge: null,
    abv: '45%',
    note: "Master Distiller's Selection",
  },
  {
    id: 4,
    name: 'ETHO Navy Strength',
    type: 'Premium Gin',
    price: 3200,
    originalPrice: null,
    rating: 4.7,
    reviews: 38,
    category: 'Gin',
    badge: null,
    abv: '57%',
    note: 'Bold & Complex',
  },
  {
    id: 5,
    name: 'ETHO VSOP',
    type: 'Cognac',
    price: 5800,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 54,
    category: 'Cognac',
    badge: 'Popular',
    abv: '40%',
    note: '10 Years Aged',
  },
  {
    id: 6,
    name: 'ETHO Gold Edition',
    type: 'Prestige Blend',
    price: 12500,
    originalPrice: null,
    rating: 5.0,
    reviews: 21,
    category: 'Blends',
    badge: 'Exclusive',
    abv: '42%',
    note: 'Rare Small Batch',
  },
];

const categories = ['All', 'Gin', 'Cognac', 'Blends'];

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
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Shop</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              <span className="gold-gradient">ETHO</span> Collection
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore our collection of premium Ethiopian spirits. From our signature gin to aged cognacs, 
              each bottle represents the pinnacle of Ethiopian craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-950 border-y border-amber-600/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-500 text-black'
                    : 'border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
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
                <div className="glass rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-500">
                  <div className="relative h-80 bg-gradient-to-b from-amber-500/5 to-black flex items-center justify-center p-8">
                    <div className="relative">
                      <div className="w-28 h-56 border-2 border-amber-600/30 rounded-lg bg-gradient-to-b from-gray-900 to-black relative">
                        <div className="absolute inset-2 border border-amber-600/20 rounded" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
                          <span className="text-amber-500 text-xs font-bold">ETHO</span>
                        </div>
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                          <span className="text-amber-500/60 text-[8px]">{product.type}</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-20 bg-amber-500/10 blur-2xl rounded-full" />
                    </div>

                    <div className="absolute top-4 left-4 flex gap-2">
                      {product.badge && (
                        <span className="px-3 py-1 text-xs font-bold uppercase rounded bg-amber-500/20 text-amber-500">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300">
                        <Heart size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-500" fill="#c9a962" />
                        <span className="text-white text-sm">{product.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({product.reviews})</span>
                      <span className="ml-auto text-amber-500 text-sm font-semibold">{product.abv}</span>
                    </div>

                    <p className="text-amber-500/60 text-xs uppercase tracking-wider mb-1">{product.type}</p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-1 group-hover:text-amber-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{product.note}</p>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-semibold text-white">ETB {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">ETB {product.originalPrice.toLocaleString()}</span>
                      )}
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

                      <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] transition-all duration-300">
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

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-amber-600/10"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                Wholesale Orders
              </h3>
              <p className="text-gray-400 mb-6">
                Looking to stock ETHO spirits in your bar, restaurant, or retail store? 
                We offer competitive wholesale pricing for qualified businesses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-amber-600/10"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                Corporate Gifting
              </h3>
              <p className="text-gray-400 mb-6">
                Make a lasting impression with premium ETHO spirits gift sets. Perfect for 
                corporate events, celebrations, and special occasions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
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
