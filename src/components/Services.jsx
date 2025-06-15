import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      mirror: false,
      offset: 120
    });
  }, []);

  const serviceItems = [
    {
      title: "Jingle Holiday Bazar Homestays",
      subtitle: "Book Villas, Apartments and Resorts",
      description: "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing... great homestay experiences to its customers as well as benefits to its hosts.",
      link: "#",
      icon: "🏡",
      color: "from-purple-100 via-purple-50 to-white",
      border: "border-purple-200",
      hover: "hover:shadow-purple-200"
    },
    {
      title: "Jingle Holiday Bazar Hotels",
      subtitle: "Book Hotels with Jingle Holiday Bazar.com",
      description: "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging... from leisure to business ones with a new outlook.",
      link: "#",
      icon: "🏨",
      color: "from-blue-100 via-blue-50 to-white",
      border: "border-blue-200",
      hover: "hover:shadow-blue-200"
    },
    {
      title: "Jingle Holiday Bazar flights",
      subtitle: "Why to book Flights Online with Jingle Holiday Bazar.com",
      description: "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a... trip.",
      link: "#",
      icon: "✈️",
      color: "from-green-100 via-green-50 to-white",
      border: "border-green-200",
      hover: "hover:shadow-green-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.3
      }
    }
  };

  const getAosAnimation = (index) => {
    switch(index) {
      case 0: return "fade-right";
      case 1: return "fade-up";
      case 2: return "fade-left";
      default: return "fade-up";
    }
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-pink-100 overflow-hidden">
      
      {/* SVG Background Animation */}
      <svg className="absolute -top-20 -left-20 w-[600px] opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#D8B4FE" d="M43.8,-76.7C55.2,-68.8,62.8,-55.1,69.8,-41.3C76.7,-27.5,83,-13.7,79.5,-2.5C76.1,8.7,62.9,17.5,52.1,28.6C41.4,39.6,33.2,52.9,21.6,60.3C9.9,67.7,-5.2,69.3,-19.2,65.1C-33.2,60.9,-46.1,50.9,-58.7,39C-71.3,27,-83.6,13.5,-81.2,1C-78.9,-11.4,-61.9,-22.8,-49.5,-33.2C-37,-43.6,-29.1,-53,-18.3,-62.6C-7.5,-72.2,6.1,-82,20.6,-83.8C35.2,-85.5,51.5,-79.1,43.8,-76.7Z" transform="translate(100 100)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
            OUR SERVICES
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10"
      >
        {serviceItems.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            data-aos={getAosAnimation(index)}
            data-aos-delay={index * 150}
            data-aos-duration="800"
            whileHover="hover"
            className={`relative rounded-2xl bg-gradient-to-b ${service.color} border ${service.border} overflow-hidden shadow-lg ${service.hover} hover:shadow-xl transition-all duration-500`}
          >
            <motion.div variants={hoverVariants} className="h-full">
              <div className="p-8 h-full flex flex-col">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-5">{service.subtitle}</h4>
                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#4f46e5",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  href={service.link}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 self-start"
                >
                  Read More
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Floating Decorative Bubbles */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full bg-white bg-opacity-20"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-32 h-32 -ml-10 -mb-10 rounded-full bg-[rgba(0,0,0,0.09)]"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;


// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import * as THREE from 'three';

// const Services = () => {
//   const mountRef = useRef(null);
  
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out-quad',
//       once: true,
//       mirror: false,
//       offset: 120
//     });

//     // Three.js Particle System Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 30;
    
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true,
//       antialias: true 
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     mountRef.current.appendChild(renderer.domElement);

//     // Create particle system
//     const particleCount = 1000;
//     const particles = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);
//     const sizes = new Float32Array(particleCount);

//     const colorPalette = [
//       new THREE.Color(0x7e22ce), // Purple
//       new THREE.Color(0x3b82f6), // Blue
//       new THREE.Color(0x10b981)  // Green
//     ];

//     for (let i = 0; i < particleCount; i++) {
//       // Positions
//       positions[i * 3] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

//       // Colors
//       const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
//       colors[i * 3] = color.r;
//       colors[i * 3 + 1] = color.g;
//       colors[i * 3 + 2] = color.b;

//       // Sizes
//       sizes[i] = Math.random() * 2 + 1;
//     }

//     particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//     particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

//     const particleMaterial = new THREE.PointsMaterial({
//       size: 2,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.8,
//       blending: THREE.AdditiveBlending
//     });

//     const particleSystem = new THREE.Points(particles, particleMaterial);
//     scene.add(particleSystem);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       // Animate particles
//       const positions = particles.attributes.position.array;
//       for (let i = 0; i < particleCount; i++) {
//         positions[i * 3 + 1] += 0.05; // Move particles up
        
//         // Reset particles that go too high
//         if (positions[i * 3 + 1] > 100) {
//           positions[i * 3 + 1] = -100;
//           positions[i * 3] = (Math.random() - 0.5) * 200;
//           positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
//         }
//       }
//       particles.attributes.position.needsUpdate = true;
      
//       // Rotate entire system slowly
//       particleSystem.rotation.y += 0.001;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   const serviceItems = [
//     {
//       title: "Jingle Holiday Bazar Homestays",
//       subtitle: "Book Villas, Apartments and Resorts",
//       description: "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing... great homestay experiences to its customers as well as benefits to its hosts.",
//       link: "#",
//       icon: "🏡",
//       color: "from-purple-100/80 via-purple-50/80 to-white/80",
//       border: "border-purple-200",
//       hover: "hover:shadow-purple-200"
//     },
//     {
//       title: "Jingle Holiday Bazar Hotels",
//       subtitle: "Book Hotels with Jingle Holiday Bazar.com",
//       description: "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging... from leisure to business ones with a new outlook.",
//       link: "#",
//       icon: "🏨",
//       color: "from-blue-100/80 via-blue-50/80 to-white/80",
//       border: "border-blue-200",
//       hover: "hover:shadow-blue-200"
//     },
//     {
//       title: "Jingle Holiday Bazar flights",
//       subtitle: "Why to book Flights Online with Jingle Holiday Bazar.com",
//       description: "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a... trip.",
//       link: "#",
//       icon: "✈️",
//       color: "from-green-100/80 via-green-50/80 to-white/80",
//       border: "border-green-200",
//       hover: "hover:shadow-green-200"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 15,
//         stiffness: 100,
//         duration: 0.5
//       }
//     }
//   };

//   const hoverVariants = {
//     hover: {
//       y: -10,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 10,
//         duration: 0.3
//       }
//     }
//   };

//   const getAosAnimation = (index) => {
//     switch(index) {
//       case 0: return "fade-right";
//       case 1: return "fade-up";
//       case 2: return "fade-left";
//       default: return "fade-up";
//     }
//   };

//   return (
//     <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
//       {/* Three.js Background Container */}
//       <div 
//         ref={mountRef} 
//         className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
//       />
      
//       {/* Content Container */}
//       <div className="relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
//               OUR SERVICES
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us.
//           </p>
//         </motion.div>

//         {/* Cards Section */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
//         >
//           {serviceItems.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               data-aos={getAosAnimation(index)}
//               data-aos-delay={index * 150}
//               data-aos-duration="800"
//               whileHover="hover"
//               className={`relative rounded-2xl bg-gradient-to-b ${service.color} border ${service.border} overflow-hidden shadow-lg ${service.hover} hover:shadow-xl transition-all duration-500 backdrop-blur-md`}
//             >
//               <motion.div variants={hoverVariants} className="h-full">
//                 <div className="p-8 h-full flex flex-col">
//                   <div className="text-5xl mb-6">{service.icon}</div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                   <h4 className="text-lg font-semibold text-gray-700 mb-5">{service.subtitle}</h4>
//                   <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
//                   <motion.a
//                     whileHover={{
//                       scale: 1.05,
//                       backgroundColor: "#4f46e5",
//                       transition: { duration: 0.2 }
//                     }}
//                     whileTap={{ scale: 0.98 }}
//                     href={service.link}
//                     className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 self-start"
//                   >
//                     Read More
//                     <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </motion.a>
//                 </div>
//               </motion.div>

//               {/* Floating Decorative Elements */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -15, 0],
//                   x: [0, 5, 0],
//                   rotate: [0, 5, 0]
//                 }}
//                 transition={{ 
//                   duration: 8 + Math.random() * 4,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 rounded-full bg-white bg-opacity-20"
//               />
//               <motion.div
//                 animate={{ 
//                   y: [0, 10, 0],
//                   x: [0, -8, 0],
//                   rotate: [0, -3, 0]
//                 }}
//                 transition={{ 
//                   duration: 7 + Math.random() * 5,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//                 className="absolute bottom-0 left-0 w-20 h-20 -ml-8 -mb-8 rounded-full bg-[rgba(0,0,0,0.05)]"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Services;