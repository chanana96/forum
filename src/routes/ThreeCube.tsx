import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCube = () => {
  const cubeRef = useRef(document.createElement('div'));
  var renderer = new THREE.WebGLRenderer();
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      cubeRef.current.clientWidth / cubeRef.current.clientHeight,
      0.1,
      1000
    );

    renderer.setSize(cubeRef.current.clientWidth, cubeRef.current.clientHeight);
    cubeRef.current.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <>
      <div
        ref={cubeRef}
        style={{ width: '90%', height: '600px', margin: '40px' }}></div>
    </>
  );
};

export default ThreeCube;
