import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { loadGLTF } from './loader.js';

const mindarThree = new MindARThree({
	container: document.querySelector("#container"),
	imageTargetSrc: "./assets/targets/planets.mind"
});

let p = document.getElementById("planet");
p.style.display = "none";
  
  const {renderer, scene, camera} = mindarThree;

  const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

  const earth = await loadGLTF('../../assets/models/earth/scene.gltf');
    earth.scene.scale.set(0.3, 0.3, 0.3);
    earth.scene.position.set(0, -0.4, 0);
    earth.scene.visible = false;

  const earthAnchor = mindarThree.addAnchor(0);
    earthAnchor.group.add(earth.scene);

  const jupiter = await loadGLTF('../../assets/models/jupiter/scene.gltf');
    jupiter.scene.scale.set(0.3, 0.3, 0.3);
    jupiter.scene.position.set(0, -0.4, 0);
    jupiter.scene.visible = false;

  const jupiterAnchor = mindarThree.addAnchor(1);
    jupiterAnchor.group.add(jupiter.scene);

  const mars = await loadGLTF('../../assets/models/mars/scene.gltf');
    mars.scene.scale.set(0.3, 0.3, 0.3);
    mars.scene.position.set(0, -0.4, 0);
    mars.scene.visible = false;

  const marsAnchor = mindarThree.addAnchor(2);
    marsAnchor.group.add(mars.scene);

  const mercury = await loadGLTF('../../assets/models/mercury/scene.gltf');
    mercury.scene.scale.set(0.3, 0.3, 0.3);
    mercury.scene.position.set(0, -0.4, 0);
    mercury.scene.visible = false;

  const mercuryAnchor = mindarThree.addAnchor(3);
    mercuryAnchor.group.add(mercury.scene);

  const neptune = await loadGLTF('../../assets/models/neptune/scene.gltf');
    neptune.scene.scale.set(0.3, 0.3, 0.3);
    neptune.scene.position.set(0, -0.4, 0);
    neptune.scene.visible = false;

  const neptuneAnchor = mindarThree.addAnchor(4);
    neptuneAnchor.group.add(neptune.scene);

  const saturn = await loadGLTF('../../assets/models/saturn/scene.gltf');
    saturn.scene.scale.set(0.3, 0.3, 0.3);
    saturn.scene.position.set(0, -0.4, 0);
    saturn.scene.visible = false;

  const saturnAnchor = mindarThree.addAnchor(5);
    saturnAnchor.group.add(saturn.scene);

  const uranus = await loadGLTF('../../assets/models/uranus/scene.gltf');
    uranus.scene.scale.set(0.3, 0.3, 0.3);
    uranus.scene.position.set(0, -0.4, 0);
    uranus.scene.visible = false;

  const uranusAnchor = mindarThree.addAnchor(6);
    uranusAnchor.group.add(uranus.scene);

  const venus = await loadGLTF('../../assets/models/venus/scene.gltf');
    venus.scene.scale.set(0.3, 0.3, 0.3);
    venus.scene.position.set(0, -0.4, 0);
    venus.scene.visible = false;

  const venusAnchor = mindarThree.addAnchor(7);
    venusAnchor.group.add(venus.scene);

  const modelURL = "./model.json";
  const metadataURL = "./metadata.json";

  const model = await tmImage.load(modelURL, metadataURL);
  const maxPredictions = model.getTotalClasses();
  
  const start = async() => {
	  await mindarThree.start();
      renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
      });

    const video = mindarThree.video;
    let skipCount = 0;

    const detect = async () => {
      //     if (activeAction !== idleAction) {
      // window.requestAnimationFrame(detect);
      // return;
      //     }
    if (skipCount < 10) {
      skipCount += 1;
      window.requestAnimationFrame(detect);
      return;
    }
    skipCount = 0;

    const prediction = await model.predict(video)
      for (let i = 0; i < maxPredictions; i++) {
        if(prediction[i].className === 'venus' && prediction[i].probability.toFixed(2) >= 0.75){
          p.style.display = "block";
          p.innerHTML = "Venus";
          // venus.scene.visible = true;
        } else if(prediction[i].className === 'saturn' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("saturn")
          p.style.display = "block";
          p.innerHTML = "Saturn";
          // saturn.scene.visible = true;
        } else if(prediction[i].className === 'earth' && prediction[i].probability.toFixed(2) >= 0.80){
          console.log("earth")
          p.style.display = "block";
          p.innerHTML = "Earth";
          // earth.scene.visible = true;
        } else if(prediction[i].className === 'jupiter' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("jupiter")
          p.style.display = "block";
          p.innerHTML = "Jupiter";
          // jupiter.scene.visible = true;
        } else if(prediction[i].className === 'mars' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("mars")
          p.style.display = "block";
          p.innerHTML = "Mars";
          // mars.scene.visible = true;
        } else if(prediction[i].className === 'mercury' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("mercury")
          p.style.display = "block";
          p.innerHTML = "Mercury";
          // mercury.scene.visible = true;
        } else if(prediction[i].className === 'neptune' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("neptune")
          p.style.display = "block";
          p.innerHTML = "Neptune";
          // neptune.scene.visible = true;
        } else if(prediction[i].className === 'uranus' && prediction[i].probability.toFixed(2) >= 0.75){
          console.log("uranus")
          p.style.display = "block";
          p.innerHTML = "Uranus";
          // uranus.scene.visible = true;
        }
      }
      window.requestAnimationFrame(detect);
    };
    window.requestAnimationFrame(detect);
  }

  const startButton = document.querySelector("#startButton");
  const planetButton = document.querySelector("#planet");
  
  planetButton.addEventListener("click", () => {
    if(p.innerText === "Venus"){
      venus.scene.visible = true;
    } else if(p.innerText === "Saturn"){
      saturn.scene.visible = true;
    } else if(p.innerText === "Earth"){
      earth.scene.visible = true;
    } else if(p.innerText === "Jupiter"){
      jupiter.scene.visible = true;
    } else if(p.innerText === "Mars"){
      mars.scene.visible = true;
    } else if(p.innerText === "Mercury"){
      mercury.scene.visible = true;
    } else if(p.innerText === "Neptune"){
      neptune.scene.visible = true;
    } else if(p.innerText === "Uranus"){
      uranus.scene.visible = true;
    }
  })
  startButton.addEventListener("click", () => {
	  start();
  });
  
  stopButton.addEventListener("click", () => {
    mindarThree.stop();
    mindarThree.renderer.setAnimationLoop(null);
  });
