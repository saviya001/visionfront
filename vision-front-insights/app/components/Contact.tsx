"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react'; 

export default function Contact() {
  
  
  const [state, handleSubmit] = useForm("xdanrvny");

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white sm:text-5xl"
          >
            Get in Touch
          </motion.h2>
          <p className="mt-4 text-gray-400 text-lg">Have a project in mind? Let's build something amazing together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info  */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <a href="mailto:info@visionfront.com" className="text-white font-medium hover:text-indigo-400 transition-colors">info@visionfrontinsights.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <a href="tel:+94701234567" className="text-white font-medium hover:text-purple-400 transition-colors">+94 71 751 0640</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. send */}
          {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-full"
              >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for contacting VisionFront. We will get back to you soon.</p>
              </motion.div>
          ) : (
            // 3. Form  (not Send )
            <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
                onSubmit={handleSubmit} // Formspree Handle Submit
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input 
                        id="name"
                        type="text" 
                        name="name" // "name" attribute 
                        placeholder="Your Name" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" // "name" attribute 
                        placeholder="your@email.com" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                </div>

                <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                    id="message"
                    name="message" // "name" attribute 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all disabled:opacity-50"
                >
                {state.submitting ? "Sending..." : "Send Message"}
                </motion.button>
            </motion.form>
          )}

        </div>
      </div>
    </section>
  );
}