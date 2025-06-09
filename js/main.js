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
