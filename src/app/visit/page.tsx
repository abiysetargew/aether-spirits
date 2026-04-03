'use client';

import { useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Calendar, Users, Car, Wine, Camera, MessageCircle, CheckCircle } from 'lucide-react';

const tourTypes = [
  {
    id: 'standard',
    name: 'Standard Distillery Tour',
    duration: '90 minutes',
    price: 'Free',
    maxGuests: 10,
    description: 'A comprehensive overview of our spirits production facility',
    includes: [
      'Guided tour of production floor',
      'Aging cellar visit',
      'Product tasting session',
      'Q&A with our master distiller',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Experience',
    duration: '3 hours',
    price: 'ETB 2,500',
    maxGuests: 6,
    description: 'An exclusive, hands-on spirits experience',
    includes: [
      'Everything in Standard Tour',
      'Behind-the-scenes access',
      'Cocktail masterclass',
      'Premium product tasting',
      'Souvenir gift bag',
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate Event',
    duration: 'Customizable',
    price: 'Contact for pricing',
    maxGuests: 50,
    description: 'Host your corporate event at our stunning facility',
    includes: [
      'Private venue hire',
      'Customized experience',
      'Catering options',
      'Branded experience',
      'Dedicated event coordinator',
    ],
  },
];

const facilities = [
  {
    icon: Wine,
    title: 'Tasting Room',
    description: 'Elegant space for guided tastings',
  },
  {
    icon: Camera,
    title: 'Photo Opportunities',
    description: 'Capture memories in our stunning setting',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient parking for all visitors',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Wheelchair accessible throughout',
  },
];

export default function VisitPage() {
  const [selectedTour, setSelectedTour] = useState('standard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="pt-24">
      <section className="relative h-[70vh] overflow-hidden">
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
              className="max-w-3xl"
            >
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
                Experience ETHO
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
                <span className="gold-gradient">Visit</span>
                <br />
                <span className="text-white font-light">Us</span>
              </h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                Experience the world of ETHO spirits firsthand. Tour our state-of-the-art 
                distillery in Addis Ababa and discover the passion behind every bottle.
              </p>
            </motion.div>
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
            >
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Location</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
                Find <span className="gold-gradient">Us</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Distillery & Headquarters</h3>
                    <p className="text-gray-400">Industrial Zone, Akaki Kality</p>
                    <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-amber-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visiting Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-400">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 border border-amber-600/10">
                <h3 className="text-white font-semibold mb-4">Facility Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {facilities.map((facility) => (
                    <div key={facility.title} className="flex items-center gap-3">
                      <facility.icon className="text-amber-500" size={20} />
                      <div>
                        <p className="text-white text-sm">{facility.title}</p>
                        <p className="text-gray-500 text-xs">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden border border-amber-600/10"
            >
              <div className="h-64 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-amber-500 mx-auto mb-4" size={48} />
                  <p className="text-white text-lg">Interactive Map</p>
                  <p className="text-gray-400 text-sm">Akaki Kality, Addis Ababa</p>
                </div>
              </div>
              <div className="p-6">
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_30px_rgba(201,169,98,0.4)] transition-all duration-300"
                >
                  Get Directions <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">Tours</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl">
              Choose Your <span className="gold-gradient">Experience</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {tourTypes.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTour === tour.id
                    ? 'ring-2 ring-amber-500'
                    : 'hover:border-amber-500/30'
                }`}
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="glass rounded-2xl p-8 border border-amber-600/10 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-500 text-sm uppercase tracking-wider">Tour</span>
                    <Calendar className="text-amber-500" size={20} />
                  </div>
                  <h3 className="text-white font-[family-name:var(--font-playfair)] text-xl mb-2">{tour.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tour.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <Clock size={14} />
                    <span>{tour.duration}</span>
                    <span className="mx-2">•</span>
                    <Users size={14} />
                    <span>Max {tour.maxGuests}</span>
                  </div>
                  <div className="text-2xl font-bold text-amber-500 mb-6">{tour.price}</div>
                  <div className="space-y-2">
                    {tour.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="text-amber-500" size={14} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <MessageCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl mb-4">
                Book Your <span className="gold-gradient">Visit</span>
              </h2>
              <p className="text-gray-400">
                Fill out the form below and our team will contact you to confirm your booking.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-12 text-center border border-amber-500/20"
              >
                <CheckCircle className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                  Booking Request Received!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thank you for your interest in visiting ETHO. We&apos;ll be in touch within 24 hours 
                  to confirm your tour booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Book Another Visit
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-amber-600/10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="+251..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Additional Notes</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Any special requests or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300"
                >
                  Request Booking <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
