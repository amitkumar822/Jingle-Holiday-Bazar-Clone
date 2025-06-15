import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

const Services = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true,
      mirror: false,
      offset: 120
    });

    // Three.js Water Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 20000);
    camera.position.set(0, 5, 15);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Add sunlight
    const sun = new THREE.Vector3();
    const sunlight = new THREE.DirectionalLight(0xffffff, 0.8);
    sunlight.position.set(0, 50, 50);
    sunlight.castShadow = true;
    sunlight.shadow.camera.near = 0.1;
    sunlight.shadow.camera.far = 500;
    sunlight.shadow.mapSize.width = 2048;
    sunlight.shadow.mapSize.height = 2048;
    scene.add(sunlight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Create water
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const water = new Water(
      waterGeometry,
      {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load('/textures/waternormals.jpg', function(texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: sunlight.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x0077be,
        distortionScale: 3.7,
        fog: scene.fog !== undefined
      }
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0;
    scene.add(water);

    // Add sky
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    // Sky and sun configuration
    const skyUniforms = sky.material.uniforms;
    skyUniforms['turbidity'].value = 10;
    skyUniforms['rayleigh'].value = 2;
    skyUniforms['mieCoefficient'].value = 0.005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    // Add floating islands
    const islandGeometry = new THREE.SphereGeometry(3, 32, 32);
    const islandMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4b5320,
      roughness: 0.8
    });

    for (let i = 0; i < 5; i++) {
      const island = new THREE.Mesh(islandGeometry, islandMaterial);
      island.position.x = (Math.random() - 0.5) * 40;
      island.position.z = (Math.random() - 0.5) * 40;
      island.position.y = Math.random() * 2 + 1;
      island.scale.y = Math.random() * 0.5 + 0.5;
      island.castShadow = true;
      island.receiveShadow = true;
      
      // Add palm trees
      if (Math.random() > 0.5) {
        const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.2, 2);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 3;
        trunk.castShadow = true;
        
        const leavesGeometry = new THREE.SphereGeometry(1.5, 8, 8);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 4.5;
        leaves.castShadow = true;
        
        island.add(trunk);
        island.add(leaves);
      }
      
      scene.add(island);
    }

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;
      
      // Update water
      water.material.uniforms['time'].value += 0.01;
      
      // Move islands gently
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry.type === 'SphereGeometry') {
          child.position.y = 1 + Math.sin(time + child.position.x) * 0.3;
          child.rotation.y += 0.002;
        }
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const serviceItems = [
    {
      title: "Jingle Holiday Bazar Homestays",
      subtitle: "Book Villas, Apartments and Resorts",
      description: "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing... great homestay experiences to its customers as well as benefits to its hosts.",
      link: "#",
      icon: "🏡",
      color: "from-purple-100/90 via-purple-50/90 to-white/90",
      border: "border-purple-200",
      hover: "hover:shadow-purple-200"
    },
    {
      title: "Jingle Holiday Bazar Hotels",
      subtitle: "Book Hotels with Jingle Holiday Bazar.com",
      description: "We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging... from leisure to business ones with a new outlook.",
      link: "#",
      icon: "🏨",
      color: "from-blue-100/90 via-blue-50/90 to-white/90",
      border: "border-blue-200",
      hover: "hover:shadow-blue-200"
    },
    {
      title: "Jingle Holiday Bazar flights",
      subtitle: "Why to book Flights Online with Jingle Holiday Bazar.com",
      description: "Purchasing flight tickets and confirming your flight booking is the key aspect of planning a... trip.",
      link: "#",
      icon: "✈️",
      color: "from-green-100/90 via-green-50/90 to-white/90",
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
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Three.js Background Container */}
      <div 
        ref={mountRef} 
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-400">
              OUR SERVICES
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-aos={getAosAnimation(index)}
              data-aos-delay={index * 150}
              data-aos-duration="800"
              whileHover="hover"
              className={`relative rounded-2xl bg-gradient-to-b ${service.color} border ${service.border} overflow-hidden shadow-lg ${service.hover} hover:shadow-xl transition-all duration-500 backdrop-blur-sm`}
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

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 rounded-full bg-white/20"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 7 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-0 left-0 w-20 h-20 -ml-8 -mb-8 rounded-full bg-[rgba(0,0,0,0.05)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;