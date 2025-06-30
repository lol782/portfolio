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
    
    // Create scene with light background
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xf0f8ff, 50, 1000);
    scene.background = new THREE.Color(0xf0f8ff); // Light blue sky
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 8);
    camera.lookAt(0, 1, -10);
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf0f8ff, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create lights for daytime scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(50, 50, 25);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    scene.add(directionalLight);
    
    // Create road with better materials
    const roadGeometry = new THREE.PlaneGeometry(20, 2000, 1, 200);
    const roadMaterial = new THREE.MeshLambertMaterial({
      color: 0x444444,
    });
    
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.z = -1000;
    road.receiveShadow = true;
    scene.add(road);
    roadRef.current = road;
    
    // Add lane markings
    for (let i = 0; i < 100; i++) {
      const markingGeometry = new THREE.PlaneGeometry(0.5, 4);
      const markingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const marking = new THREE.Mesh(markingGeometry, markingMaterial);
      marking.rotation.x = -Math.PI / 2;
      marking.position.set(0, 0.01, -i * 20);
      scene.add(marking);
    }
    
    // Create enhanced car with better materials and sharper details
    const carGroup = new THREE.Group();
    
    // Car body - main chassis with higher quality
    const bodyGeometry = new THREE.BoxGeometry(2, 0.6, 4);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2563eb,
      shininess: 100,
      specular: 0x444444
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    body.castShadow = true;
    carGroup.add(body);
    
    // Car roof/cabin
    const roofGeometry = new THREE.BoxGeometry(1.6, 0.8, 2);
    const roofMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x2563eb,
      shininess: 100
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 1.3;
    roof.position.z = -0.3;
    roof.castShadow = true;
    carGroup.add(roof);
    
    // Windshield
    const windshieldGeometry = new THREE.PlaneGeometry(1.4, 0.6);
    const windshieldMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.7
    });
    const windshield = new THREE.Mesh(windshieldGeometry, windshieldMaterial);
    windshield.position.set(0, 1.3, 0.7);
    windshield.rotation.x = -0.2;
    carGroup.add(windshield);
    
    // Wheels with better detail
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
    const rimGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.32, 16);
    const rimMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    
    // Create wheels with rims
    const wheelPositions = [
      [-1.1, 0.4, 1.3],  // Front left
      [1.1, 0.4, 1.3],   // Front right
      [-1.1, 0.4, -1.3], // Back left
      [1.1, 0.4, -1.3]   // Back right
    ];
    
    wheelPositions.forEach(pos => {
      const wheelGroup = new THREE.Group();
      
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.castShadow = true;
      wheelGroup.add(wheel);
      
      const rim = new THREE.Mesh(rimGeometry, rimMaterial);
      rim.rotation.z = Math.PI / 2;
      rim.position.x = pos[0] > 0 ? -0.01 : 0.01;
      wheelGroup.add(rim);
      
      wheelGroup.position.set(...pos);
      carGroup.add(wheelGroup);
    });
    
    // Headlights
    const headlightGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const headlightMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      emissive: 0xffffcc,
      emissiveIntensity: 0.3
    });
    
    const headlightL = new THREE.Mesh(headlightGeometry, headlightMaterial);
    headlightL.position.set(-0.7, 0.6, 2);
    carGroup.add(headlightL);
    
    const headlightR = new THREE.Mesh(headlightGeometry, headlightMaterial);
    headlightR.position.set(0.7, 0.6, 2);
    carGroup.add(headlightR);
    
    // Taillights
    const taillightGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const taillightMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff4444,
      emissive: 0x440000,
      emissiveIntensity: 0.2
    });
    
    const taillightL = new THREE.Mesh(taillightGeometry, taillightMaterial);
    taillightL.position.set(-0.8, 0.6, -2);
    carGroup.add(taillightL);
    
    const taillightR = new THREE.Mesh(taillightGeometry, taillightMaterial);
    taillightR.position.set(0.8, 0.6, -2);
    carGroup.add(taillightR);
    
    // Position car
    carGroup.position.y = 0;
    carGroup.position.z = -2;
    carGroup.castShadow = true;
    scene.add(carGroup);
    carRef.current = carGroup;
    
    // Add environment - buildings and trees for daytime scene
    for (let i = 0; i < 50; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      const distance = 12 + Math.random() * 8;
      
      if (Math.random() > 0.4) {
        // Create buildings with light colors
        const buildingHeight = 5 + Math.random() * 15;
        const buildingGeometry = new THREE.BoxGeometry(
          3 + Math.random() * 4,
          buildingHeight,
          3 + Math.random() * 4
        );
        const buildingMaterial = new THREE.MeshLambertMaterial({ 
          color: new THREE.Color().setHSL(0.1, 0.3, 0.7 + Math.random() * 0.2)
        });
        const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
        building.position.set(
          side * distance,
          buildingHeight / 2,
          -i * 25 - Math.random() * 10
        );
        building.castShadow = true;
        building.receiveShadow = true;
        scene.add(building);
        
        // Add windows
        for (let j = 0; j < Math.floor(buildingHeight / 2); j++) {
          for (let k = 0; k < 3; k++) {
            if (Math.random() > 0.3) {
              const windowGeometry = new THREE.PlaneGeometry(0.3, 0.4);
              const windowMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x87ceeb,
                transparent: true,
                opacity: 0.8
              });
              const window = new THREE.Mesh(windowGeometry, windowMaterial);
              window.position.set(
                side * (distance + (side > 0 ? -1.5 : 1.5)),
                j * 2 + 2,
                building.position.z + (k - 1) * 0.8
              );
              window.rotation.y = side > 0 ? Math.PI : 0;
              scene.add(window);
            }
          }
        }
      } else {
        // Create trees
        const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 3, 8);
        const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
        const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.set(side * (distance + 2), 1.5, -i * 30);
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        scene.add(trunk);
        
        const leavesGeometry = new THREE.SphereGeometry(2, 16, 16);
        const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        leaves.position.set(side * (distance + 2), 4, -i * 30);
        leaves.castShadow = true;
        leaves.receiveShadow = true;
        scene.add(leaves);
      }
    }
    
    // Add clouds
    for (let i = 0; i < 20; i++) {
      const cloudGeometry = new THREE.SphereGeometry(5 + Math.random() * 3, 16, 16);
      const cloudMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        transparent: true,
        opacity: 0.9
      });
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        (Math.random() - 0.5) * 200,
        30 + Math.random() * 20,
        (Math.random() - 0.5) * 500
      );
      scene.add(cloud);
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
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
      renderer.dispose();
    };
  }, []);
  
  // Update camera and car position based on scroll
  useEffect(() => {
    if (!cameraRef.current || !carRef.current) return;
    
    const maxTravel = 800;
    const zPosition = -scrollProgress * maxTravel;
    
    // Smooth camera movement
    cameraRef.current.position.z = zPosition + 8;
    cameraRef.current.position.y = 4 + Math.sin(scrollProgress * Math.PI) * 0.5;
    
    // Car follows camera with better positioning
    carRef.current.position.z = zPosition - 2;
    
    // Add dynamic car movement
    carRef.current.rotation.y = Math.sin(scrollProgress * Math.PI * 3) * 0.02;
    carRef.current.position.x = Math.sin(scrollProgress * Math.PI * 4) * 0.2;
    
    // Slight car bounce
    carRef.current.position.y = Math.sin(scrollProgress * Math.PI * 8) * 0.03;
  }, [scrollProgress]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ThreeScene;