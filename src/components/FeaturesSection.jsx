import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  // Why Choose DynImpact Pillars with Flaticon icons
  const whyChooseUs = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1082/1082810.png", // Experienced Professionals
      title: "Experienced ICT Professionals",
      description: "Skilled engineering team with deep technical expertise in computer and network infrastructure.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3699/3699516.png", // Quality Products
      title: "Quality Products & Resale",
      description: "Sourcing top-tier enterprise servers, laptops, cabling hardware, and surveillance equipment.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2454/2454278.png", // Competitive Pricing
      title: "Competitive Pricing",
      description: "Cost-effective technology deployment designed to fit SME and corporate budgets seamlessly.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1067/1067566.png", // Reliable Support
      title: "Reliable Support & Maintenance",
      description: "Dependable ongoing maintenance and swift technical support to minimize network downtime.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1162/1162499.png", // End-to-End Delivery
      title: "End-to-End Project Delivery",
      description: "From initial site survey and design to installation, testing, and final commissioning.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149882.png", // Customer Focused
      title: "Customer-Focused Service",
      description: "Tailored IT solutions built around your exact operational workflows and business goals.",
    },
  ];

  // Industries We Serve Badges
  const industries = [
    { name: "SMEs & Enterprises", icon: "https://cdn-icons-png.flaticon.com/512/4300/4300058.png" },
    { name: "Corporates", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830305.png" },
    { name: "Government Departments", icon: "https://cdn-icons-png.flaticon.com/512/2619/2619277.png" },
    { name: "Educational Institutions", icon: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png" },
    { name: "Healthcare Facilities", icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },
    { name: "Retail & Commerce", icon: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png" },
    { name: "Residential Estates", icon: "https://cdn-icons-png.flaticon.com/512/619/619153.png" },
  ];

  const imgWhyChoose = "https://st4.depositphotos.com/14431644/31291/i/450/depositphotos_312914530-stock-photo-conceptual-hand-writing-showing-why.jpg";
  const imgIndustries = "https://img.magnific.com/premium-photo/industry-4-0-technology-concept-smart-factory-fourth-industrial-revolution_31965-20663.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <section id="why-choose-us" className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* ================= SECTION 1: WHY CHOOSE DYNIMPACT? ================= */}
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="bg-blue-100 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              YOUR TRUSTED ICT PARTNER
            </span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
            >
              Why Choose <span className="text-blue-600">Dynamic Impact Solution?</span>
            </motion.h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Empowering diverse sectors across South Africa with specialized IT infrastructure, Wi-Fi optimization, and CCTV protection, Biometrics Computer and Laptop Resale and Servers.
            </p>
          </motion.div>

          {/* Grid Layout: Image on Left + 6 Pillars Grid on Right */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Image with Geometric Polygon Cutout */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl -rotate-2 scale-95 pointer-events-none" />

              <div
                className="relative w-full h-[360px] sm:h-[420px] p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-slate-300 rounded-3xl shadow-xl"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%)",
                }}
              >
                <div className="w-full h-full bg-slate-900 overflow-hidden rounded-2xl relative group">
                  <img
                    src={imgWhyChoose}
                    alt="Why Choose DynImpact ICT Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                      Proven Advantage
                    </span>
                    <p className="text-white text-lg font-bold">
                      Tailored Technology Built for Growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-2 bg-white border border-slate-200 shadow-xl rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="Verified"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-xs text-slate-500">Service Guarantee</p>
                  <p className="text-sm font-bold text-slate-900">End-to-End Delivery</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: 6 Feature Cards */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            >
              {whyChooseUs.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.15 * (index + 1))}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex-shrink-0 flex items-center justify-center p-2.5">
                      <img
                        src={pillar.icon}
                        alt={pillar.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>


        {/* ================= SECTION 2: INDUSTRIES WE SERVE ================= */}
        <div className="space-y-12">
          
          {/* Section Header */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="bg-cyan-100 text-cyan-800 border border-cyan-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              VERSATILE DEPLOYMENT
            </span>
            <motion.h2
              variants={textVariant(0.3)}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight"
            >
              Industries <span className="text-blue-600">We Serve</span>
            </motion.h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Empowering diverse sectors across South Africa with specialized IT infrastructure, Wi-Fi optimization, and CCTV protection.
            </p>
          </motion.div>

          {/* Grid Layout: Badges on Left + Industry Image on Right */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Industry Badges Grid */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
            >
              {industries.map((ind, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50/80 flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src={ind.icon}
                      alt={ind.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold text-slate-800">
                    {ind.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column Image with Reverse Chamfer Clip-Path */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl rotate-2 scale-95 pointer-events-none" />

              <div
                className="relative w-full h-[360px] sm:h-[420px] p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-slate-300 rounded-3xl shadow-xl"
                style={{
                  clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 12%)",
                }}
              >
                <div className="w-full h-full bg-slate-900 overflow-hidden rounded-2xl relative group">
                  <img
                    src={imgIndustries}
                    alt="Industries We Serve - Smart Technology Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                      Industry 4.0 Ready
                    </span>
                    <p className="text-white text-lg font-bold">
                      Scalable Tech Infrastructure Solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;