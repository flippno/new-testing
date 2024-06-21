import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { loadGLTF } from './loader.js';

const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
	imageTargetSrc: "./assets/targets/musicband.mind"
});
  
  const {renderer, scene, camera} = mindarThree;
  
  const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

  const raccoon = await loadGLTF('../../assets/models/musicband-raccoon/scene.gltf');
    raccoon.scene.scale.set(0.1, 0.1, 0.1);
    raccoon.scene.position.set(0, -0.4, 0);

  const raccoonAnchor = mindarThree.addAnchor(0);
    raccoonAnchor.group.add(raccoon.scene);
  
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
