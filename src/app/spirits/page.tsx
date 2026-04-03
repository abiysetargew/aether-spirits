'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AETHER Gin No. 1',
    type: 'gin',
    category: 'Gin',
    subcategory: 'London Dry',
    abv: '47%',
    description: 'Our flagship gin, distilled with hand-selected Ethiopian juniper and 12 rare botanicals.',
    price: 89,
    rating: 4.9,
    image: '/placeholder.jpg',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'AETHER Gin Reserve',
    type: 'gin',
    category: 'Gin',
    subcategory: 'Old Tom',
    abv: '45%',
    description: 'A sweeter, more complex gin aged in oak barrels for unprecedented depth.',
    price: 129,
    rating: 4.8,
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'AETHER XO Cognac',
    type: 'cognac',
    category: 'Cognac',
    subcategory: 'XO',
    abv: '40%',
    description: 'Extra Old cognac aged 25 years in Limousin oak. Pure elegance in a bottle.',
    price: 349,
    rating: 5.0,
    image: '/placeholder.jpg',
    badge: 'Limited',
  },
  {
    id: 4,
    name: 'AETHER VSOP',
    type: 'cognac',
    category: 'Cognac',
    subcategory: 'VSOP',
    abv: '40%',
    description: 'Very Superior Old Pale, aged 12 years. Perfect balance of fruit and oak.',
    price: 179,
    rating: 4.7,
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'AETHER Signature Blend',
    type: 'blend',
    category: 'Signature',
    subcategory: 'Blend',
    abv: '45%',
    description: 'Our master distiller\'s personal creation. A harmonious fusion of gin and cognac.',
    price: 199,
    rating: 4.9,
    image: '/placeholder.jpg',
    badge: 'Exclusive',
  },
  {
    id: 6,
    name: 'AETHER Midnight',
    type: 'blend',
    category: 'Signature',
    subcategory: 'Dark',
    abv: '50%',
    description: 'A bold, midnight-hued spirit with notes of espresso and dark chocolate.',
    price: 159,
    rating: 4.6,
    image: '/placeholder.jpg',
  },
];

const categories = ['All', 'Gin', 'Cognac', 'Signature'];
const subcategories = ['All', 'London Dry', 'Old Tom', 'XO', 'VSOP', 'Blend', 'Dark'];

export default function SpiritsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const subcategoryMatch = activeSubcategory === 'All' || product.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">The Collection</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              Our <span className="gold-gradient">Spirits</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our curated selection of luxury gins, cognacs, and signature blends. 
              Each bottle is a testament to craftsmanship and heritage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#050505] border-y border-[rgba(201,169,98,0.1)] sticky top-[80px] z-30 glass-strong">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap gap-3">
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

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-[#c9a962] transition-colors">
                <Filter size={18} />
                <span className="text-sm">Filter</span>
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-gray-700 text-gray-400 px-4 py-2 rounded text-sm focus:outline-none focus:border-[#c9a962]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12">
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded transition-all duration-300 ${
                  activeSubcategory === sub
                    ? 'bg-[rgba(201,169,98,0.2)] text-[#c9a962] border border-[#c9a962]'
                    : 'border border-gray-800 text-gray-500 hover:border-gray-600'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

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
                  <div className="relative h-80 bg-gradient-to-b from-[rgba(201,169,98,0.05)] to-[#0a0a0a] flex items-center justify-center">
                    <div className="w-28 h-56 border border-[rgba(201,169,98,0.4)] rounded-xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative">
                      <div className="absolute inset-2 border border-[rgba(201,169,98,0.2)] rounded-lg" />
                    </div>
                    
                    {product.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-[#c9a962] text-black text-xs font-bold uppercase rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#c9a962] text-xs uppercase tracking-wider">
                        {product.category} • {product.subcategory}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-[#c9a962]" fill="#c9a962" />
                        <span className="text-gray-400 text-xs">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <span className="text-2xl font-semibold text-white">${product.price}</span>
                      </div>
                      <Link
                        href={`/shop/${product.id}`}
                        className="flex items-center gap-2 text-sm text-[#c9a962] hover:text-[#e8d5a3] transition-colors"
                      >
                        View Details <ArrowRight size={16} />
                      </Link>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 md:p-16 text-center border border-[rgba(201,169,98,0.1)]"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              Looking for <span className="gold-gradient">Something Special</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Explore our limited editions and exclusive releases. These rare bottles are crafted 
              in small quantities for the true connoisseur.
            </p>
            <Link
              href="/shop/limited"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Explore Limited Editions <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
