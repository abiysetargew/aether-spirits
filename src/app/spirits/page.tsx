'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Filter, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Heisberg BR',
    type: 'lager',
    category: 'Premium',
    subcategory: 'Brown Ale',
    abv: '6.1%',
    ibu: 60,
    og: '1.102',
    description: 'Rich brown ale with caramel notes, brewed with Ethiopian barley.',
    price: 450,
    rating: 4.8,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-brown.png',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Heisberg RD',
    type: 'lager',
    category: 'Premium',
    subcategory: 'Red Lager',
    abv: '6.1%',
    ibu: 60,
    og: '1.102',
    description: 'Smooth red lager with malty Ethiopian flavor profile.',
    price: 450,
    rating: 4.7,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/ber-red.png',
  },
  {
    id: 3,
    name: 'Heisberg BL',
    type: 'ale',
    category: 'Premium',
    subcategory: 'Blonde',
    abv: '6.1%',
    ibu: 60,
    og: '1.102',
    description: 'Crisp golden blonde ale, our flagship brew.',
    price: 450,
    rating: 4.9,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-blue-X2PSV6.png',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Heisberg GR',
    type: 'cider',
    category: 'Premium',
    subcategory: 'Green',
    abv: '6.1%',
    ibu: 60,
    og: '1.102',
    description: 'Refreshing green apple cider with crisp finish.',
    price: 450,
    rating: 4.6,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-green-QRHPVB6.png',
  },
  {
    id: 5,
    name: 'Heisberg SM Black',
    type: 'small',
    category: 'Small Bottle',
    subcategory: 'Black',
    abv: '6.5%',
    ibu: 60,
    og: '1.104',
    description: 'Bold dark brew in convenient small bottle format.',
    price: 280,
    rating: 4.8,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/black-small-829HCTV.png',
  },
  {
    id: 6,
    name: 'Heisberg SM Brown',
    type: 'small',
    category: 'Small Bottle',
    subcategory: 'Brown',
    abv: '6.5%',
    ibu: 60,
    og: '1.104',
    description: 'Warm nutty flavor in every sip.',
    price: 280,
    rating: 4.7,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/brownn-small-829HCTV.png',
  },
  {
    id: 7,
    name: 'Heisberg SM Green',
    type: 'small',
    category: 'Small Bottle',
    subcategory: 'Green',
    abv: '6.5%',
    ibu: 60,
    og: '1.104',
    description: 'Light citrus finish, perfect for casual moments.',
    price: 280,
    rating: 4.5,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beeer-green.png',
  },
  {
    id: 8,
    name: 'Heisberg SM Gold',
    type: 'small',
    category: 'Small Bottle',
    subcategory: 'Gold',
    abv: '6.5%',
    ibu: 60,
    og: '1.104',
    description: 'Classic golden taste loved by all.',
    price: 280,
    rating: 4.8,
    image: 'https://ethiobeverages.com/wp-content/uploads/2025/09/beer-gold.png',
  },
];

const categories = ['All', 'Premium', 'Small Bottle'];
const subcategories = ['All', 'Brown Ale', 'Red Lager', 'Blonde', 'Green', 'Black', 'Gold'];

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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Our Collection</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              <span className="gold-gradient">Heisberg</span> Beers
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our curated selection of premium Ethiopian craft beers. 
              Each bottle is crafted with passion and delivers consistent quality.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:border-[rgba(201,169,98,0.3)] transition-all duration-500">
                  <div className="relative h-72 bg-gradient-to-b from-[rgba(201,169,98,0.05)] to-[#0a0a0a] flex items-center justify-center p-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    
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

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-[rgba(201,169,98,0.1)] rounded p-2">
                        <p className="text-[10px] text-gray-500 uppercase">ABV</p>
                        <p className="text-sm font-semibold text-[#c9a962]">{product.abv}</p>
                      </div>
                      <div className="bg-[rgba(201,169,98,0.1)] rounded p-2">
                        <p className="text-[10px] text-gray-500 uppercase">IBU</p>
                        <p className="text-sm font-semibold text-[#c9a962]">{product.ibu}</p>
                      </div>
                      <div className="bg-[rgba(201,169,98,0.1)] rounded p-2">
                        <p className="text-[10px] text-gray-500 uppercase">OG</p>
                        <p className="text-sm font-semibold text-[#c9a962]">{product.og}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <span className="text-2xl font-semibold text-white">ETB {product.price}</span>
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
              Experience the <span className="gold-gradient">Heisberg</span> Taste
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              The taste that makes you feel awesome. Visit us or find Heisberg at a retailer near you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Find a Retailer <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
