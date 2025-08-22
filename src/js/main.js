import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import Stats from 'three/examples/jsm/libs/stats.module'

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);



const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
orbit.update();


const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);
const gridhelper = new THREE.GridHelper(30);
scene.add(gridhelper);

camera.position.set(0, 2, 5);


const planeGeo = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({color: 'white', side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeo, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);



const directionLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionLight.position.set(30, 50, 0);
directionLight.castShadow = true;
scene.add(directionLight);

const dLightHelper = new THREE.DirectionalLightHelper(directionLight, 5);
scene.add(dLightHelper);


const stats = new Stats()
document.body.appendChild(stats.dom)


function animate(){

    renderer.render(scene, camera)
}

stats.update()

renderer.setAnimationLoop(animate);