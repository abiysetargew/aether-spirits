'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: 'ETHO Signature Gin',
    category: 'Products',
    description: 'Our flagship London Dry Gin with Ethiopian botanicals',
  },
  {
    id: 2,
    title: 'Distillery Interior',
    category: 'Facility',
    description: 'State-of-the-art copper pot stills in Akaki Kality',
  },
  {
    id: 3,
    title: 'XO Cognac Barrel Aging',
    category: 'Production',
    description: '25 years of patience in French oak barrels',
  },
  {
    id: 4,
    title: 'Bottle Collection',
    category: 'Products',
    description: 'The complete ETHO spirits range',
  },
  {
    id: 5,
    title: 'Ethiopian Botanicals',
    category: 'Ingredients',
    description: 'Hand-selected highland botanicals',
  },
  {
    id: 6,
    title: 'Master Distiller',
    category: 'People',
    description: 'Crafting excellence since 2021',
  },
  {
    id: 7,
    title: 'Aging Cellar',
    category: 'Facility',
    description: 'Climate-controlled maturation rooms',
  },
  {
    id: 8,
    title: 'Packaging Line',
    category: 'Production',
    description: 'Premium packaging for every bottle',
  },
  {
    id: 9,
    title: 'Gold Edition Launch',
    category: 'Events',
    description: 'Celebrating our prestige blend release',
  },
  {
    id: 10,
    title: 'Founders',
    category: 'People',
    description: 'Sisay H.W and Alula Setarge, Addis Ababa 2021',
  },
  {
    id: 11,
    title: 'Night View',
    category: 'Facility',
    description: 'The ETHO headquarters at dusk',
  },
  {
    id: 12,
    title: 'Cocktail Creation',
    category: 'Lifestyle',
    description: 'Mixology with ETHO spirits',
  },
];

const categories = ['All', 'Products', 'Facility', 'Production', 'People', 'Events', 'Lifestyle', 'Ingredients'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const filteredImages = galleryImages.filter((img) =>
    activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <div ref={containerRef} className="pt-24">
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
                Visual Journey
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                <span className="gold-gradient">Gallery</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Explore the world of ETHO spirits through our curated collection of images 
                showcasing our products, facility, and the people behind our excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black border-y border-amber-600/10 sticky top-16 z-30 backdrop-blur-lg">
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

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-amber-500/50 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-40 border border-amber-600/30 rounded-lg bg-gradient-to-b from-gray-900 to-black relative">
                      <div className="absolute inset-2 border border-amber-600/20 rounded" />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-amber-500 text-xs uppercase tracking-wider">{image.category}</span>
                    <h3 className="text-white font-semibold text-lg mt-1">{image.title}</h3>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Camera className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-6">
              Share Your <span className="gold-gradient">ETHO Moments</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Have you experienced ETHO spirits? Share your moments with us on social media 
              using #ETHOBeverages and tag us to be featured in our gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
              setSelectedImage(filteredImages[prevIndex]);
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
              const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(filteredImages[nextIndex]);
            }}
          >
            <ChevronRight size={24} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-amber-600/30 flex items-center justify-center">
              <div className="w-48 h-64 border-2 border-amber-600/30 rounded-lg bg-gradient-to-b from-gray-900 to-black relative">
                <div className="absolute inset-3 border border-amber-600/20 rounded" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg" />
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-amber-500 text-sm uppercase tracking-wider">{selectedImage.category}</span>
              <h3 className="text-white font-[family-name:var(--font-playfair)] text-2xl mt-2">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-2">{selectedImage.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
