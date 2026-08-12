import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiArrowRight, HiShieldCheck, HiServer, HiWifi } from "react-icons/hi";

// Image URLs provided
const imgServerRack = "https://img.pikbest.com/backgrounds/20250127/server-rack-with-blue-led-lights-and-network-cables-in-high-tech-data-center_11463142.jpg!bwr800";
const imgTechnician = "https://static.vecteezy.com/system/resources/thumbnails/081/991/559/small_2x/it-technician-plugging-ethernet-cable-into-server-in-data-center-photo.jpeg";
const imgCCTV = "https://accendsecurity.co.za/wp-content/uploads/2024/04/Outdoor-security-cameras-in-Midrand.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#00132A] text-white pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Column: Tech Messaging & CTAs */}
        <div className="w-full lg:w-1/2 space-y-8">
          
          {/* Badge */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-500/30 px-4 py-2 rounded-full text-blue-400 text-sm font-medium shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>Leading ICT & Infrastructure Provider</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
          >
            Powering Business Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 relative inline-block">
              Technology
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80" />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            DynImpact delivers robust IT infrastructure, Biometric installation and configuration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-md pt-2"
          >
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              Explore Solutions <HiArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#newsletter"
              className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all hover:text-white"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-400 text-xs sm:text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <HiShieldCheck className="text-blue-400 w-5 h-5 flex-shrink-0" />
              <span>CCTV Security</span>
            </div>
            <div className="flex items-center gap-2">
              <HiServer className="text-blue-400 w-5 h-5 flex-shrink-0" />
              <span>Server & Racks</span>
            </div>
            <div className="flex items-center gap-2">
              <HiWifi className="text-blue-400 w-5 h-5 flex-shrink-0" />
              <span>Fibre & Wi-Fi</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative 3-Image Composition */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center"
        >
          {/* Decorative Polygon Overlay Grid */}
          <div className="absolute inset-0 bg-blue-500/5 rounded-3xl border border-blue-500/20 backdrop-blur-3xl -rotate-1 scale-95 pointer-events-none" />

          {/* 1. Main Large Centerpiece (Server Rack) with Slanted Hex Cutout */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-[78%] h-[320px] sm:h-[380px] p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-slate-800 rounded-2xl shadow-2xl shadow-blue-950/80"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)"
            }}
          >
            <div className="w-full h-full bg-slate-900 overflow-hidden rounded-xl relative group">
              <img
                src={imgServerRack}
                alt="Server Rack Data Center"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00132A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400 bg-slate-900/90 px-3 py-1 rounded-md border border-blue-500/30 backdrop-blur-md">
                  High-Tech Data Centers
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. Top-Right Floating Card (Network Cabling / Technician) */}
          <motion.div 
            variants={fadeIn("down", 0.6)}
            whileHover={{ y: -6, scale: 1.05 }}
            className="absolute top-2 right-0 sm:right-2 z-20 w-44 sm:w-56 h-32 sm:h-40 p-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-xl shadow-black/60"
            style={{
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)"
            }}
          >
            <div className="w-full h-full bg-slate-900 overflow-hidden rounded-xl relative group">
              <img
                src={imgTechnician}
                alt="IT Technician Plugging Ethernet Cable"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-2 right-2 bg-blue-600 text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                Cabling
              </div>
            </div>
          </motion.div>

          {/* 3. Bottom-Left Floating Card (Outdoor CCTV Camera) */}
          <motion.div 
            variants={fadeIn("up", 0.7)}
            whileHover={{ y: 6, scale: 1.05 }}
            className="absolute bottom-2 left-0 sm:left-2 z-20 w-40 sm:w-52 h-30 sm:h-36 p-1 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-2xl shadow-xl shadow-black/60"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)"
            }}
          >
            <div className="w-full h-full bg-slate-900 overflow-hidden rounded-xl relative group">
              <img
                src={imgCCTV}
                alt="Outdoor Security CCTV Camera"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-2 left-2 bg-emerald-500 text-[10px] font-bold text-white px-2 py-0.5 rounded shadow">
                CCTV Systems
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;