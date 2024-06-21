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
    earth.scene.scale.set(0.3, 0.3, 0.3);
    earth.scene.position.set(0, -0.4, 0);

  const earthAnchor = mindarThree.addAnchor(0);
    earthAnchor.group.add(earth.scene);

  const jupiter = await loadGLTF('../../assets/models/jupiter/scene.gltf');
    jupiter.scene.scale.set(0.3, 0.3, 0.3);
    jupiter.scene.position.set(0, -0.4, 0);

  const jupiterAnchor = mindarThree.addAnchor(1);
    jupiterAnchor.group.add(jupiter.scene);

  const mars = await loadGLTF('../../assets/models/mars/scene.gltf');
    mars.scene.scale.set(0.3, 0.3, 0.3);
    mars.scene.position.set(0, -0.4, 0);

  const marsAnchor = mindarThree.addAnchor(2);
    marsAnchor.group.add(mars.scene);

  const mercury = await loadGLTF('../../assets/models/mercury/scene.gltf');
    mercury.scene.scale.set(0.3, 0.3, 0.3);
    mercury.scene.position.set(0, -0.4, 0);

  const mercuryAnchor = mindarThree.addAnchor(3);
    mercuryAnchor.group.add(mercury.scene);

  const neptune = await loadGLTF('../../assets/models/neptune/scene.gltf');
    neptune.scene.scale.set(0.3, 0.3, 0.3);
    neptune.scene.position.set(0, -0.4, 0);

  const neptuneAnchor = mindarThree.addAnchor(4);
    neptuneAnchor.group.add(neptune.scene);

  const saturn = await loadGLTF('../../assets/models/saturn/scene.gltf');
    saturn.scene.scale.set(0.3, 0.3, 0.3);
    saturn.scene.position.set(0, -0.4, 0);

  const saturnAnchor = mindarThree.addAnchor(5);
    saturnAnchor.group.add(saturn.scene);

  const uranus = await loadGLTF('../../assets/models/uranus/scene.gltf');
    uranus.scene.scale.set(0.3, 0.3, 0.3);
    uranus.scene.position.set(0, -0.4, 0);

  const uranusAnchor = mindarThree.addAnchor(6);
    uranusAnchor.group.add(uranus.scene);

  const venus = await loadGLTF('../../assets/models/venus/scene.gltf');
    venus.scene.scale.set(0.3, 0.3, 0.3);
    venus.scene.position.set(0, -0.4, 0);

  const venusAnchor = mindarThree.addAnchor(7);
    venusAnchor.group.add(venus.scene);
  
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
