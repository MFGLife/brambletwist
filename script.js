
const targetY = window.scrollY + 2600;
let currentY = window.scrollY;

function scrollAnimation() {
  if (currentY < targetY) {
    currentY += Math.min(targetY - currentY, 20); // Scroll in increments of 20px for smoother animation
    window.scrollTo(0, currentY);
    requestAnimationFrame(scrollAnimation);
  }
}
   

document.querySelector('#btnGiveCommand').addEventListener('click', function(){
    recognition.start();
    
});

  
  // Function for scrolling to the absolute bottom
  function scrollToAbsoluteBottom() {
    const targetY = document.body.scrollHeight; // Get actual content height
    let currentY = window.scrollY; // Get current scroll position
  
    function scrollAnimation2() {
      if (currentY < targetY) {
        currentY += Math.min(targetY - currentY, 20);
        window.scrollTo(0, currentY);
        requestAnimationFrame(scrollAnimation2);
      }
    }
  
    scrollAnimation2();
  }
  
  

  

window.addEventListener('resize', onWindowResize);

let scene, camera, renderer, controls, model, mixer, action, delta;
let clock = new THREE.Clock();
let animations, currentAnimationIndex = 6;
let spine, neck;
let mouse = new THREE.Vector2();
let targetRotation = new THREE.Vector3();
let allowHeadTracking = true;

function render() {
  delta = clock.getDelta();
  if (mixer) {
    mixer.update(delta);
  }
  if (spine && neck && allowHeadTracking) {
    spine.rotation.y += 0.3 * (targetRotation.y - spine.rotation.y);
    neck.rotation.y += 0.3 * (targetRotation.y - neck.rotation.y);
    spine.rotation.x += 0.3 * (targetRotation.x - spine.rotation.x);
    neck.rotation.x += 0.3 * (targetRotation.x - neck.rotation.x);
  }
  renderer.render(scene, camera);
}


document.addEventListener('DOMContentLoaded', (event) => {
  init();
});


document.addEventListener('click', function () {
  // Stop the current animation
  action.stop();

  // Set the current animation to index 6 (animation 7)
  currentAnimationIndex = 6;
  action = mixer.clipAction(animations[currentAnimationIndex]);

  // Set the animation to play once and play it
  action.setLoop(THREE.LoopOnce);
  action.reset();
  action.play();

  // Disable head tracking during the new animation
  allowHeadTracking = false;

  // Set a timeout to restart the entire animation (including idle) after the click event
  setTimeout(() => {
    // Allow head tracking to resume after the click event
    allowHeadTracking = true;

    // Revert to the idle animation
    action = mixer.clipAction(animations[6]); // Assuming the idle animation is at index 0
    action.setLoop(THREE.LoopRepeat);
    action.play();
  }, action._clip.duration * 1000); // Assuming action._clip.duration gives the duration of the current animation in seconds
});

let lastAnimationTime = 0;

  
  document.addEventListener('mousemove', function (event) {
    // Only update targetRotation if head tracking is allowed
    if (allowHeadTracking) {
      mouse.x = (event.clientX / window.innerWidth);
      mouse.y = (event.clientY / window.innerHeight);
      targetRotation.x = (mouse.y);
      targetRotation.y = (mouse.x);
    }
  });
  



function init() {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 0, 16);
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 7);
  camera.lookAt(0, 0, 0);

  let ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
  let pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.z = 2500;
  scene.add(pointLight);

  let loader = new THREE.GLTFLoader();
  loader.load('https://luminafields.com/crycella.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.position.x = -.3;

    mixer = new THREE.AnimationMixer(model);
    animations = gltf.animations;
    action = mixer.clipAction(animations[currentAnimationIndex]);
    action.setLoop(THREE.LoopRepeat);
    action.play();

    spine = model.getObjectByName('Spine'); // Replace 'Spine' with the actual name of the spine bone/mesh
    neck = model.getObjectByName('Neck'); // Replace 'Neck' with the actual name of the neck bone/mesh
  });

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById("app").appendChild(renderer.domElement);


  gsap.ticker.add(render);

}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}