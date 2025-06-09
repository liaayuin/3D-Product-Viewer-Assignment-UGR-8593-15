export function createTable(scene) {
  const tabletopMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b4513,
    roughness: 0.5,
    metalness: 0.1,
  });
  const tabletopGeometry = new THREE.BoxGeometry(3, 0.2, 2);
  const tabletop = new THREE.Mesh(tabletopGeometry, tabletopMaterial);
  tabletop.position.set(0, 1.2, 0);
  tabletop.name = "Tabletop";
  scene.add(tabletop);

  const legMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.2, 16);
  const legPositions = [
    [-1.3, 0.6, -0.9],
    [1.3, 0.6, -0.9],
    [-1.3, 0.6, 0.9],
    [1.3, 0.6, 0.9],
  ];
  const legs = [];
  for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(...legPositions[i]);
    leg.name = `Table Leg ${i + 1}`;
    scene.add(leg);
    legs.push(leg);
  }

  const lampBaseMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 });
  const lampBaseGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 32);
  const lampBase = new THREE.Mesh(lampBaseGeometry, lampBaseMaterial);
  lampBase.position.set(-1.2, 1.3, 0);
  lampBase.name = "Lamp Base";
  scene.add(lampBase);

  const lampStandMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
  const lampStandGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 32);
  const lampStand = new THREE.Mesh(lampStandGeometry, lampStandMaterial);
  lampStand.position.set(-1.2, 1.55, 0);
  lampStand.name = "Lamp Stand";
  scene.add(lampStand);

  const lampShadeMaterial = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
  const lampShadeGeometry = new THREE.ConeGeometry(0.3, 0.4, 32);
  const lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
  lampShade.position.set(-1.2, 1.8, 0);
  lampShade.name = "Lamp";
  scene.add(lampShade);

  const lampLight = new THREE.PointLight(0xffffaa, 1.5, 2);
  lampLight.position.set(-1.2, 1.85, 0);
  lampLight.name = "Lamp Light";
  scene.add(lampLight);

  return [tabletop, ...legs, lampBase, lampStand, lampShade, lampLight];
}
