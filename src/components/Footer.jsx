import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaHeadset,
  FaUserShield,
  FaShoppingCart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const emailContacts = [
    {
      role: "General Enquiries",
      email: "info@dynimpact.co.za",
      icon: <FaHeadset className="w-5 h-5 text-blue-400" />,
      badge: "Info",
    },
    {
      role: "Administration",
      email: "admin@dynimpact.co.za",
      icon: <FaUserShield className="w-5 h-5 text-cyan-400" />,
      badge: "Admin",
    },
    {
      role: "Sales & Quotes",
      email: "sales@dynimpact.co.za",
      icon: <FaShoppingCart className="w-5 h-5 text-emerald-400" />,
      badge: "Sales",
    },
  ];

  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      id="footer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative bg-slate-950 text-slate-300 pt-16 pb-10 overflow-hidden border-t border-slate-800"
    >
      {/* ================= MAGIC ANIMATION EFFECTS ================= */}
      {/* Glowing Ambient Sphere 1 */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Glowing Ambient Sphere 2 */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-16 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Subtle Tech Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center justify-between">
          
          {/* Brand & Logo Column */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="lg:col-span-5 space-y-6 flex flex-col items-start"
          >
            {/* Logo Component Wrapped in Glowing Magic Card */}
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
              <motion.a
                href="#home"
                variants={fadeIn("right", 0.3)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center cursor-pointer overflow-hidden py-1 bg-slate-900/90 rounded-xl px-3 border border-slate-800"
              >
                <img
                  src="/Dynamic Impact (4) (1).png"
                  alt="Dynamic Impact Solutions Logo"
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain scale-125 transition-all"
                />
              </motion.a>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
              Connecting enterprises across South Africa with certified hardware procurement, networking infrastructure, and dedicated support.
            </p>

            {/* Social Media Icons */}
            <motion.div variants={fadeIn("up", 0.5)} className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all shadow-md"
              >
                <FaFacebookF className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all shadow-md"
              >
                <FaTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-600 transition-all shadow-md"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all shadow-md"
              >
                <FaWhatsapp className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Email Contacts Section */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            className="lg:col-span-7 space-y-4"
          >
            <motion.h3
              variants={textVariant(0.2)}
              className="text-white font-bold text-lg uppercase tracking-wider mb-2 flex items-center gap-2"
            >
              <FaEnvelope className="text-blue-500" /> Direct Communication Lines
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {emailContacts.map((contact, idx) => (
                <motion.a
                  key={idx}
                  href={`mailto:${contact.email}`}
                  variants={fadeIn("up", 0.15 * (idx + 1))}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 p-4 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                      {contact.icon}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/60">
                      {contact.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-medium">
                    {contact.role}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors truncate mt-1">
                    {contact.email}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright Strip */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="border-t border-slate-800/80 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            <p>© {new Date().getFullYear()} Dynamic Impact Solutions. All rights reserved.</p>
            <p className="text-slate-400 font-medium">Dynamic Impact Solutions (DynImpact)</p>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;