import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { loadGLTF } from './loader.js';

const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
	imageTargetSrc: "./assets/targets/planets.mind"
});
  
  const {renderer, scene, camera} = mindarThree;

  const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

  const earth = await loadGLTF('../../assets/models/earth/scene.gltf');
    earth.scene.scale.set(0.1, 0.1, 0.1);
    earth.scene.position.set(0, -0.4, 0);

  const earthAnchor = mindarThree.addAnchor(0);
    earthAnchor.group.add(earth.scene);

  const jupiter = await loadGLTF('../../assets/models/jupiter/scene.gltf');
  jupiter.scene.scale.set(0.1, 0.1, 0.1);
  jupiter.scene.position.set(0, -0.4, 0);

  const jupiterAnchor = mindarThree.addAnchor(0);
  jupiterAnchor.group.add(jupiter.scene);
  
  const start = async() => {
	  await mindarThree.start();
      renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
      });
    }

  const startButton = document.querySelector("#startButton");
    
  startButton.addEventListener("click", () => {
	  start();
  });
  
  stopButton.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
  });
