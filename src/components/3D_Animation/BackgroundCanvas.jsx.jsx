import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const mountRef = useRef();

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0f172a"); // tailwind: slate-900

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Create moving particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(200)); // x
      vertices.push(THREE.MathUtils.randFloatSpread(200)); // y
      vertices.push(THREE.MathUtils.randFloatSpread(200)); // z
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.5 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
}
