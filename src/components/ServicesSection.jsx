import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { HiArrowSmRight, HiCheckCircle } from "react-icons/hi";

const ServicesSection = () => {
  // Array of 8 Products & Services with provided images & tailored descriptions
  const productsAndServices = [
    {
      id: "01",
      title: "Computer and Laptop Resale",
      image: "https://clickcomputer.co.za/wp-content/uploads/2024/09/AdobeStock_273993067-scaled-1.jpeg",
      description: "Procurement, supply, and resale of enterprise-grade desktops, workstations, and high-performance business laptops.",
      tag: "Hardware Resale",
    },
    {
      id: "02",
      title: "Server Supply, Installation & Config",
      image: "https://img.magnific.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?semt=ais_hybrid&w=740&q=80",
      description: "End-to-end server rack deployment, storage provisioning, active directory setups, and data center configurations.",
      tag: "Data Infrastructure",
    },
    {
      id: "03",
      title: "Network Cabling & Data Points",
      image: "https://www.bcsconsultants.com/wp-content/uploads/2023/10/network-cabling.png",
      description: "Structured cabling solutions including CAT5e, CAT6, CAT6A, and fibre optic installations with cabinet patching.",
      tag: "Structured Cabling",
    },
    {
      id: "04",
      title: "CCTV Surveillance Systems",
      image: "https://siyawire.co.za/wp-content/uploads/2020/09/best-security-camera-systems60631995c7962.jpg",
      description: "Commercial and residential IP camera installations, remote mobile monitoring, and security recording systems.",
      tag: "Physical Security",
    },
    {
      id: "05",
      title: "Wireless Access Point Installations",
      image: "https://www.thesslstore.com/blog/wp-content/uploads/2018/10/bigstock-183620632.jpg",
      description: "High-density Wi-Fi network design, access point deployment, mesh networking, and signal coverage optimization.",
      tag: "Wireless Networking",
    },
    {
      id: "06",
      title: "Computer Installation & Support",
      image: "https://media.istockphoto.com/id/2153478836/photo/digital-technology-internet-network-connection-big-data-digital-marketing-iot-internet-of.jpg?s=612x612&w=0&k=20&c=t_CHPyJiIM2-_ZOPKs9Vz9zL-opSBZvEGrTlJzpBIgs=",
      description: "Comprehensive desktop deployment, software configuration, network integration, and ongoing technical IT helpdesk support.",
      tag: "IT Support Services",
    },
    {
      id: "07",
      title: "Hardware Upgrades & Maintenance",
      image: "https://png.pngtree.com/thumb_back/fw800/background/20220121/pngtree-computer-technician-for-hardware-maintenance-and-upgrades-hardware-computer-pc-photo-image_44098134.jpg",
      description: "RAM, SSD, and component upgrades alongside preventive hardware diagnostics and component repairs.",
      tag: "Maintenance",
    },
    {
      id: "08",
      title: "ICT Consulting & Project Management",
      image: "https://img.magnific.com/free-photo/diverse-creative-team-using-cad-software_482257-123545.jpg?semt=ais_hybrid&w=740&q=80",
      description: "Strategic technology planning, infrastructure architecture design, vendor management, and full project oversight.",
      tag: "Consulting",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-block bg-blue-50 text-blue-700 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
          >
            OUR CORE OFFERINGS
          </motion.div>

          <motion.h2
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Products & <span className="text-blue-600">Services</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Comprehensive computer hardware supply, server deployment, structured networking cabling, and specialized ICT support for enterprise stability.
          </motion.p>
        </div>

        {/* Products & Services Cards Grid */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {productsAndServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.15 * (index + 1))}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                {/* Image Container with Geometric Clip Path & Gradient Highlight */}
                <div className="relative p-2">
                  <div
                    className="w-full h-48 bg-slate-900 rounded-xl overflow-hidden relative"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Tag */}
                    <span className="absolute top-3 left-3 bg-slate-900/80 border border-slate-700/80 backdrop-blur-md text-blue-400 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {service.tag}
                    </span>

                    {/* ID Index Number */}
                    <span className="absolute bottom-2 right-3 text-white/40 text-2xl font-black italic">
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Callout */}
              <div className="p-5 pt-0 mt-2 flex items-center justify-between border-t border-slate-200/60 pt-4">
                <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <HiCheckCircle className="w-4 h-4 text-blue-500" />
                  Quality Assured
                </span>
                <span className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <HiArrowSmRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        

      </div>
    </section>
  );
};

export default ServicesSection;