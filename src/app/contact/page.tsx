'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Briefcase } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: ['Bole Road', 'Addis Ababa, Ethiopia'],
  },
  {
    icon: MapPin,
    title: 'Factory',
    details: ['Industrial Zone', 'Akaki Kality, Addis Ababa'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+251 11 123 4567', '+251 98 765 4321'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@ethiobeverages.com', 'support@ethiobeverages.com'],
  },
];

const departments = [
  {
    icon: MessageCircle,
    title: 'Customer Support',
    email: 'support@ethiobeverages.com',
    description: 'Questions about products, orders, or your account.',
  },
  {
    icon: Users,
    title: 'Partnerships',
    email: 'partners@ethiobeverages.com',
    description: 'Wholesale, distribution, and business inquiries.',
  },
  {
    icon: Briefcase,
    title: 'Careers',
    email: 'careers@ethiobeverages.com',
    description: 'Join the Ethio Beverages family.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'customer-support',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl mb-6">
              Contact <span className="gold-gradient">Us</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a question or want to partner with us? We&apos;d love to hear from you. 
              Based in the heart of Addis Ababa, Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-white mb-8">
                Send Us a <span className="gold-gradient">Message</span>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center border border-[rgba(201,169,98,0.2)]"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[rgba(201,169,98,0.2)] flex items-center justify-center">
                    <Send size={32} className="text-[#c9a962]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111] border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111] border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#111] border border-gray-800 rounded text-white focus:outline-none focus:border-[#c9a962] transition-colors"
                    >
                      <option value="customer-support">Customer Support</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111] border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#111] border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a962] transition-colors resize-none"
                      placeholder="Write your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c9a962] to-[#e8d5a3] text-black font-semibold tracking-wider uppercase rounded hover:shadow-[0_0_40px_rgba(201,169,98,0.4)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="glass rounded-xl p-6">
                    <info.icon size={24} className="text-[#c9a962] mb-4" />
                    <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-8 border border-[rgba(201,169,98,0.1)]">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-6">
                  Department Contacts
                </h3>
                <div className="space-y-6">
                  {departments.map((dept) => (
                    <div key={dept.title} className="border-b border-gray-800 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <dept.icon size={20} className="text-[#c9a962]" />
                        <h4 className="text-white font-semibold">{dept.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-[#c9a962] text-sm hover:text-[#e8d5a3] transition-colors">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-[rgba(201,169,98,0.1)]"
          >
            <div className="h-80 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#c9a962] mx-auto mb-4" />
                <p className="text-white text-xl font-semibold mb-2">Ethio Beverages</p>
                <p className="text-gray-400">Bole Road, Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
