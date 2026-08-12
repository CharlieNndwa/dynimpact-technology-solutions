import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  // Purpose items structured from the company profile with Flaticon icons
  const purposeCards = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Who We Are / Corporate
      title: "Who We Are",
      description:
        "A South African technology solutions company specializing in supply, resale, installation, maintenance, and support of computer & network infrastructure.",
      color: "from-blue-500/10 to-blue-600/5",
      borderColor: "border-blue-200",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png", // Vision / Target
      title: "Our Vision",
      description:
        "To become a leading provider of integrated ICT infrastructure and dependability-focused technology solutions in South Africa.",
      color: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-200",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3208/3208726.png", // Mission / Rocket
      title: "Our Mission",
      description:
        "To deliver innovative technology solutions through quality products, professional installations, and exceptional customer service.",
      color: "from-blue-600/10 to-indigo-500/5",
      borderColor: "border-blue-200",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1534/1534070.png", // Objective / Goal
      title: "Core Objective",
      description:
        "Provide SMEs, corporates, and public sectors with dependable end-to-end IT support, CCTV surveillance, and optimized structured cabling.",
      color: "from-sky-500/10 to-cyan-500/5",
      borderColor: "border-sky-200",
    },
  ];

  const purposeImg =
    "https://img.magnific.com/free-photo/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team_482257-33535.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <section id="about" className="w-full bg-white text-slate-800 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3"
          >
            DRIVING DIGITAL EXCELLENCE
          </motion.div>

          <motion.h2
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            The Purpose Behind <span className="text-blue-600">DynImpact</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Dynamic Impact Solutions
          </motion.p>
        </div>

        {/* Main Grid: Left Side Image with Clip Effect, Right Side 4 Cards */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Geometric Cut Effect & Floating Badge */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Background Decorative Polygon Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl opacity-15 transform rotate-2 scale-95 pointer-events-none" />

            {/* Main Clipped Container */}
            <div
              className="relative w-full h-[380px] sm:h-[450px] p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-slate-200 rounded-3xl shadow-2xl shadow-blue-900/10"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)",
              }}
            >
              <div className="w-full h-full bg-slate-900 overflow-hidden rounded-2xl relative group">
                <img
                  src={purposeImg}
                  alt="DynImpact Technical Operations & Engineering Team"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Embedded Label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    South African ICT Excellence
                  </p>
                  <p className="text-white text-lg font-semibold">
                    Dependable End-to-End Technology Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/95 border border-slate-200 shadow-xl rounded-2xl p-4 flex items-center gap-3 backdrop-blur-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Verified Quality"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-xs text-slate-500 font-medium">Quality Assured</p>
                <p className="text-sm font-bold text-slate-900">Certified Hardware & Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Purpose Cards */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {purposeCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * (index + 1))}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${card.color} border ${card.borderColor} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-5 p-2.5">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;