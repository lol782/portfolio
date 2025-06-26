// Three.js scene component
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useScroll } from '@/hooks/useScroll';

const ThreeScene = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  
  const { scrollProgress } = useScroll();
  
  // Set up Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 0); // Start position
    camera.lookAt(0, 1.5, -10); // Look slightly downward at the road ahead
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create road
    const roadGeometry = new THREE.PlaneGeometry(20, 1000, 20, 200);
    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      side: THREE.DoubleSide,
      roughness: 0.8,
    });
    
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2; // Lay flat
    road.position.z = -500; // Center the road
    scene.add(road);
    roadRef.current = road;
    
    // Create simple car shape (as a placeholder)
    const carGroup = new THREE.Group();
    
    // Car body
    const bodyGeometry = new THREE.BoxGeometry(1.5, 0.5, 3);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x2266cc });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.5;
    carGroup.add(body);
    
    // Car top
    const topGeometry = new THREE.BoxGeometry(1.2, 0.4, 1.5);
    const topMaterial = new THREE.MeshStandardMaterial({ color: 0x2266cc });
    const top = new THREE.Mesh(topGeometry, topMaterial);
    top.position.y = 0.95;
    top.position.z = -0.2;
    carGroup.add(top);
    
    // Wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
    
    // Front left wheel
    const wheelFL = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelFL.rotation.z = Math.PI / 2;
    wheelFL.position.set(-0.8, 0.3, 1);
    carGroup.add(wheelFL);
    
    // Front right wheel
    const wheelFR = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelFR.rotation.z = Math.PI / 2;
    wheelFR.position.set(0.8, 0.3, 1);
    carGroup.add(wheelFR);
    
    // Back left wheel
    const wheelBL = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelBL.rotation.z = Math.PI / 2;
    wheelBL.position.set(-0.8, 0.3, -1);
    carGroup.add(wheelBL);
    
    // Back right wheel
    const wheelBR = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheelBR.rotation.z = Math.PI / 2;
    wheelBR.position.set(0.8, 0.3, -1);
    carGroup.add(wheelBR);
    
    // Headlights
    const headlightGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const headlightMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffffcc,
      emissive: 0xffffcc,
      emissiveIntensity: 2
    });
    
    const headlightL = new THREE.Mesh(headlightGeometry, headlightMaterial);
    headlightL.position.set(-0.6, 0.5, 1.5);
    carGroup.add(headlightL);
    
    const headlightR = new THREE.Mesh(headlightGeometry, headlightMaterial);
    headlightR.position.set(0.6, 0.5, 1.5);
    carGroup.add(headlightR);
    
    // Add car to scene
    carGroup.position.y = 0.3; // Lift slightly above the road
    carGroup.position.z = -5; // Position in front of the camera
    scene.add(carGroup);
    carRef.current = carGroup;
    
    // Add roadside objects
    for (let i = 0; i < 50; i++) {
      // Trees or lamp posts on the sides
      const isTree = Math.random() > 0.5;
      
      if (isTree) {
        // Create a tree
        const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
        const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x663300 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        
        const leavesGeometry = new THREE.ConeGeometry(1, 2, 8);
        const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x006600 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.y = 2;
        
        const tree = new THREE.Group();
        tree.add(trunk);
        tree.add(leaves);
        
        // Position on either side of the road
        const side = Math.random() > 0.5 ? 1 : -1;
        tree.position.set(side * (10 + Math.random() * 5), 0, -i * 20);
        scene.add(tree);
      } else {
        // Create a lamp post
        const postGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 8);
        const postMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
        const post = new THREE.Mesh(postGeometry, postMaterial);
        
        const lampGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const lampMaterial = new THREE.MeshStandardMaterial({ 
          color: 0xffffaa,
          emissive: 0xffffaa,
          emissiveIntensity: 1
        });
        const lamp = new THREE.Mesh(lampGeometry, lampMaterial);
        lamp.position.y = 3;
        
        const lampPost = new THREE.Group();
        lampPost.add(post);
        lampPost.add(lamp);
        
        // Create light for the lamp
        const light = new THREE.PointLight(0xffffaa, 1, 10);
        light.position.y = 3;
        lampPost.add(light);
        
        // Position on either side of the road
        const side = Math.random() > 0.5 ? 1 : -1;
        lampPost.position.set(side * 9, 0, -i * 20);
        scene.add(lampPost);
      }
    }
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  // Update camera position based on scroll
  useEffect(() => {
    if (!cameraRef.current || !carRef.current) return;
    
    // Calculate max travel distance (adjust as needed)
    const maxTravel = 500;
    const zPosition = -scrollProgress * maxTravel;
    
    // Move camera and car forward
    cameraRef.current.position.z = zPosition;
    carRef.current.position.z = zPosition - 5; // Keep car in front of camera
    
    // Add some subtle movement to the car
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(scrollProgress * Math.PI * 2) * 0.05;
      carRef.current.position.x = Math.sin(scrollProgress * Math.PI * 4) * 0.5;
    }
  }, [scrollProgress]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ThreeScene;