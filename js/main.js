import { initScene } from "./initScene.js";
import { createTable } from "./createProduct.js";
import { addLighting } from "./addLighting.js";
import { setupInteraction } from "./interaction.js";
import { animateCamera } from "./cameraAnimation.js";
const { scene, camera, renderer } = initScene();
const table = createTable(scene);
addLighting(scene);
setupInteraction(scene, camera, renderer, table);
function animate(time) {
  requestAnimationFrame(animate);
  animateCamera(camera, time);
  renderer.render(scene, camera);
}
animate();
