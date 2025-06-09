export function setupInteraction(scene, camera, renderer, laptop) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const panel = document.getElementById("partName");

  function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(laptop);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      panel.textContent = obj.name || "Unknown Part";
      obj.material.color.set(0xff0000);
      setTimeout(() => obj.material.color.set(0x8e44ad), 300);
    }
  }

  renderer.domElement.addEventListener("click", onClick);
}
