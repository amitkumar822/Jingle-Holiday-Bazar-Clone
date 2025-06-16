// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";

// const FloatingParticles = () => {
//   const particles = useRef();
//   const ref = useRef();

//   useEffect(() => {
//     // Generate valid particle positions
//     const count = 5000;
//     const positions = new Float32Array(count * 3);

//     for (let i = 0; i < count * 3; i++) {
//       positions[i] = (Math.random() - 0.5) * 10;
//     }

//     particles.current = positions;
//   }, []);

//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.x += 0.001;
//       ref.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <Points ref={ref} positions={particles.current} stride={3}>
//       <PointMaterial
//         transparent
//         color="#6366f1"
//         size={0.01}
//         sizeAttenuation={true}
//         depthWrite={false}
//       />
//     </Points>
//   );
// };

// const HeroTest = () => {
//   const titleRef = useRef();
//   const subtitleRef = useRef();
//   const buttonsRef = useRef();
//   const pathRef = useRef();

//   useEffect(() => {
//     const animate = () => {
//       if (
//         titleRef.current &&
//         subtitleRef.current &&
//         buttonsRef.current &&
//         pathRef.current &&
//         titleRef.current.children.length > 0 &&
//         buttonsRef.current.children.length > 0
//       ) {
//         // Animate title characters
//         gsap.from(titleRef.current.children, {
//           opacity: 0,
//           y: 40,
//           duration: 1,
//           stagger: 0.03,
//           ease: "power3.out",
//         });

//         // Animate subtitle
//         gsap.from(subtitleRef.current, {
//           opacity: 0,
//           y: 30,
//           duration: 1,
//           delay: 0.5,
//           ease: "power3.out",
//         });

//         // Animate buttons
//         gsap.from(buttonsRef.current.children, {
//           opacity: 0,
//           y: 20,
//           duration: 0.8,
//           stagger: 0.1,
//           delay: 0.8,
//           ease: "back.out(1.7)",
//         });

//         // Animate SVG path
//         const length = pathRef.current.getTotalLength();
//         pathRef.current.style.strokeDasharray = length;
//         pathRef.current.style.strokeDashoffset = length;

//         gsap.to(pathRef.current, {
//           strokeDashoffset: 0,
//           duration: 2,
//           delay: 0.3,
//           ease: "power2.inOut",
//         });
//       } else {
//         requestAnimationFrame(animate); // Try again next frame
//       }
//     };

//     requestAnimationFrame(animate);
//   }, []);

//   const titleWords = "Discover The World's Most Beautiful Places".split(" ");

//   return (
//     <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92]">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <Canvas camera={{ position: [0, 0, 1] }}>
//           <ambientLight intensity={0.5} />
//           <FloatingParticles />
//         </Canvas>
//       </div>

//       {/* Geometric SVG background */}
//       <svg
//         className="absolute inset-0 w-full h-full opacity-20"
//         viewBox="0 0 1440 900"
//         preserveAspectRatio="none"
//       >
//         <path
//           ref={pathRef}
//           d="M0,0 C150,100 300,50 450,150 C600,250 750,100 900,200 C1050,300 1200,150 1350,250 L1440,200 L1440,900 L0,900 Z"
//           fill="none"
//           stroke="#6366f1"
//           strokeWidth="2"
//         />
//       </svg>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-6 z-10 text-center">
//         <motion.h1
//           ref={titleRef}
//           className="text-4xl md:text-7xl z-10 font-bold mb-8 text-white flex flex-wrap justify-center gap-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           {titleWords.map((word, i) => (
//             <motion.span
//               key={i}
//               className="inline-block"
//               whileHover={{ y: -5, color: "#a5b4fc" }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <span className="mr-2">{word}</span>
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.div
//           ref={buttonsRef}
//           className="flex flex-wrap justify-center gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <motion.a
//             href="#"
//             className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg relative overflow-hidden group"
//             whileHover={{
//               y: -5,
//               boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">Explore Packages</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//           </motion.a>

//           <motion.a
//             href="#"
//             className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full relative overflow-hidden group"
//             whileHover={{
//               y: -5,
//               boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">Learn More</span>
//             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//           </motion.a>
//         </motion.div>
//       </div>

//       {/* Animated scroll indicator */}
//       <motion.div
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5 }}
//       >
//         <motion.span
//           className="text-gray-300 mb-2 text-sm"
//           animate={{ opacity: [0.6, 1, 0.6] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           Scroll to explore
//         </motion.span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-gray-300"
//           >
//             <path d="M12 5v14M19 12l-7 7-7-7" />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroTest;

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const FloatingParticles = () => {
  const particles = useRef();
  const ref = useRef();

  useEffect(() => {
    // Generate valid particle positions
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particles.current = positions;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={particles.current} stride={3}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const HeroTest = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonsRef = useRef();
  const pathRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // Ensure all elements are present before animating
    if (!titleRef.current || !buttonsRef.current || !pathRef.current) return;

    // Set initial styles to prevent flash of unstyled content
    gsap.set(titleRef.current.children, { opacity: 0, y: 40 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
    gsap.set(buttonsRef.current.children, { opacity: 0, y: 20 });
    
    // Prepare SVG path animation
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = length;
    pathRef.current.style.strokeDashoffset = length;

    // Create a master timeline for better sequencing
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // SVG path animation first
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 1.5
    }, 0);
    
    // Then title animation
    tl.to(titleRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.03
    }, 0.2);
    
    // Then subtitle
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, 0.5);
    
    // Finally buttons
    tl.to(buttonsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, 0.8);

    // Clean up animations on unmount
    return () => {
      tl.kill();
    };
  }, []);

  const titleWords = "Discover The World's Most Beautiful Places".split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight intensity={0.5} />
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Geometric SVG background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0,0 C150,100 300,50 450,150 C600,250 750,100 900,200 C1050,300 1200,150 1350,250 L1440,200 L1440,900 L0,900 Z"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
        />
      </svg>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 z-10 text-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl z-10 font-bold mb-8 text-white flex flex-wrap justify-center gap-2"
        >
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              whileHover={{ y: -5, color: "#a5b4fc" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="mr-2">{word}</span>
            </motion.span>
          ))}
        </h1>

        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center gap-6"
        >
          <motion.a
            href="#"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-lg relative overflow-hidden group"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore Packages</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>

          <motion.a
            href="#"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full relative overflow-hidden group"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </motion.a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.span
          className="text-gray-300 mb-2 text-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-300"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroTest;