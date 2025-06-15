import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DotDotBubaleAnimation = () => {
  const mountRef = useRef(null);
  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      mirror: false,
    });

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Add floating landmarks
    const createLandmark = (geometry, position, color) => {
      const material = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.2,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.castShadow = true;
      scene.add(mesh);
      return mesh;
    };

    // Create Indian landmarks
    const landmarks = [
      createLandmark(
        new THREE.SphereGeometry(2, 32, 32),
        [-10, 5, -10],
        0xff9933
      ), // Taj Mahal
      createLandmark(new THREE.ConeGeometry(1.5, 3, 4), [10, 3, -15], 0x138808), // Temple
      createLandmark(new THREE.BoxGeometry(3, 1, 3), [0, -5, -20], 0xffffff), // Goa Beach
    ];

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate landmarks
      landmarks.forEach((landmark, i) => {
        landmark.rotation.y += 0.005;
        landmark.position.y =
          landmark.userData.baseY + Math.sin(Date.now() * 0.001 + i) * 0.5;
      });

      // Rotate particles
      particlesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // GSAP Scroll Animations
    gsap.to(camera.position, {
      z: 15,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Three.js Background Container */}
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
    </div>
  );
};

export default DotDotBubaleAnimation;
