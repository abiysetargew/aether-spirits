'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Clock, Flame, GlassWater, ChevronDown } from 'lucide-react';

const cocktails = [
  {
    id: 1,
    name: 'Highland Sunset',
    spirit: 'ETHO Signature Gin',
    difficulty: 'Easy',
    time: '5 min',
    description: 'A refreshing blend of Ethiopian citrus and Mediterranean herbs.',
    ingredients: ['2 oz ETHO Signature Gin', '1 oz fresh lemon juice', '0.5 oz honey syrup', '2 oz tonic water', 'Garnish: lemon twist & rosemary'],
    method: 'Combine gin, lemon juice, and honey in a shaker with ice. Shake well and strain into a Collins glass filled with ice. Top with tonic water and garnish.',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Emperor\'s Negroni',
    spirit: 'ETHO Navy Strength',
    difficulty: 'Intermediate',
    time: '3 min',
    description: 'A bold, aged take on the classic Italian aperitivo.',
    ingredients: ['1 oz ETHO Navy Strength Gin', '1 oz Campari', '1 oz sweet vermouth', 'Garnish: orange peel'],
    method: 'Stir all ingredients with ice until well-chilled. Strain into a rocks glass over a large ice cube. Express orange peel over the drink and garnish.',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Royal Cognac Sour',
    spirit: 'ETHO XO Cognac',
    difficulty: 'Intermediate',
    time: '5 min',
    description: 'Elegant and balanced with a hint of Ethiopian spice.',
    ingredients: ['2 oz ETHO XO Cognac', '1 oz fresh lemon juice', '0.5 oz simple syrup', '1 egg white', 'Garnish: Angostura bitters'],
    method: 'Dry shake all ingredients (without ice) for 15 seconds. Add ice and shake vigorously for another 15 seconds. Strain into a coupe glass. Add a few drops of bitters on the foam and drag a toothpick through for decoration.',
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Midnight Elegance',
    spirit: 'ETHO Reserve Blend',
    difficulty: 'Advanced',
    time: '7 min',
    description: 'A sophisticated after-dinner drink with espresso notes.',
    ingredients: ['1.5 oz ETHO Reserve Blend', '1 oz coffee liqueur', '0.5 oz fresh espresso', '0.25 oz vanilla syrup', 'Garnish: coffee beans'],
    method: 'Brew espresso and let cool slightly. Combine all ingredients in a shaker with ice. Shake well and strain into a coupe glass. Garnish with three coffee beans.',
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Ethiopian Spritz',
    spirit: 'ETHO Gold Edition',
    difficulty: 'Easy',
    time: '2 min',
    description: 'Light, bubbly, and perfect for celebrations.',
    ingredients: ['2 oz ETHO Gold Edition', '3 oz prosecco', '2 oz soda water', 'Garnish: fresh berries & mint'],
    method: 'Build in a wine glass over ice. Add the blend, then prosecco, and top with soda water. Stir gently. Garnish with fresh berries and a sprig of mint.',
    image: '/placeholder.jpg',
  },
  {
    id: 6,
    name: 'Golden Hour',
    spirit: 'ETHO VSOP',
    difficulty: 'Easy',
    time: '3 min',
    description: 'Warm, inviting, and effortlessly elegant.',
    ingredients: ['2 oz ETHO VSOP', '0.5 oz elderflower liqueur', '2 oz ginger beer', 'Garnish: candied ginger'],
    method: 'Build in a rocks glass over a large ice cube. Add cognac and elderflower liqueur, then top with ginger beer. Stir gently and garnish with candied ginger.',
    image: '/placeholder.jpg',
  },
];

const difficulties = ['All', 'Easy', 'Intermediate', 'Advanced'];

export default function CocktailsPage() {
  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [expandedCocktail, setExpandedCocktail] = useState<number | null>(null);

  const filteredCocktails = cocktails.filter((cocktail) =>
    activeDifficulty === 'All' || cocktail.difficulty === activeDifficulty
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Mixology</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              Cocktail <span className="gold-gradient">Experience</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover exquisite cocktail recipes crafted by world-class mixologists 
              using our award-winning spirits.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#050505] border-y border-[rgba(201,169,98,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setActiveDifficulty(difficulty)}
                  className={`px-6 py-2 text-sm uppercase tracking-wider rounded-full transition-all duration-300 ${
                    activeDifficulty === difficulty
                      ? 'bg-[#c9a962] text-black'
                      : 'border border-gray-700 text-gray-400 hover:border-[#c9a962] hover:text-[#c9a962]'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search cocktails..."
                className="pl-12 pr-4 py-2 bg-[#111] border border-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] w-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 h-48 lg:h-auto bg-gradient-to-br from-[rgba(201,169,98,0.1)] to-[#0a0a0a] flex items-center justify-center">
                    <div className="w-20 h-32 border border-[rgba(201,169,98,0.4)] rounded-lg bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative">
                      <div className="absolute inset-2 border border-[rgba(201,169,98,0.2)] rounded" />
                    </div>
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[#c9a962] text-xs uppercase tracking-wider">
                        {cocktail.spirit}
                      </span>
                      <span className={`text-xs uppercase ${getDifficultyColor(cocktail.difficulty)}`}>
                        {cocktail.difficulty}
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                      {cocktail.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4">
                      {cocktail.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock size={14} />
                        {cocktail.time}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Flame size={14} />
                        {cocktail.difficulty}
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedCocktail(expandedCocktail === cocktail.id ? null : cocktail.id)}
                      className="flex items-center gap-2 text-[#c9a962] text-sm hover:text-[#e8d5a3] transition-colors"
                    >
                      {expandedCocktail === cocktail.id ? 'Hide Recipe' : 'View Recipe'}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${expandedCocktail === cocktail.id ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {expandedCocktail === cocktail.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-gray-800"
                      >
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Ingredients</h4>
                          <ul className="space-y-1">
                            {cocktail.ingredients.map((ing, i) => (
                              <li key={i} className="text-gray-400 text-sm">• {ing}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-2">Method</h4>
                          <p className="text-gray-400 text-sm">{cocktail.method}</p>
                        </div>
                      </motion.div>
                    )}
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
            className="glass rounded-3xl p-12 md:p-16 border border-[rgba(201,169,98,0.1)] text-center"
          >
            <GlassWater className="w-16 h-16 text-[#c9a962] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              Masterclass <span className="gold-gradient">Workshops</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join our expert mixologists for an immersive cocktail-making experience. 
              Learn the art of cocktail creation and discover the nuances of our spirits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
            >
              Book a Workshop <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
