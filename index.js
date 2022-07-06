import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

// start game time 
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// creating a camera object (player's perspective), render object, and scene object.
const canvas = document.getElementById('canvas1');

// 1st arg: vertical field of view | 2nd arg:  the ratio of width to height | 3rd arg: the near clip plane | 4th arg: the far clip plane
const camera = new THREE.PerspectiveCamera(60, 1.33, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const scene = new THREE.Scene();

const loader = new THREE.FontLoader();


const clue3 = loader.load(
	// resource URL
	'fonts/Kool Baby_Regular.json',

	// onLoad callback
	function ( font ) {
		// do something with the font
        const bluetext = new THREE.TextGeometry('Yellow tree',{
            height: 1,
            size: 1,
            font: font

        })
        const textmesh = new THREE.Mesh(bluetext, [
            new THREE.MeshPhongMaterial({color: 0xad4000}),
            new THREE.MeshPhongMaterial({color: 0x5c2301}),

        ])
        textmesh.castShadow = true
        textmesh.position.x = 0
        textmesh.position.y = 0
        textmesh.position.z = -3
        scene.add(textmesh)
		console.log( font );
	},

	// onProgress callback
	function ( xhr ) {
		
	},
    
	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);


// setting up lights 
// Creating ambient light
const light = new THREE.AmbientLight(0xffffff, 0.2);

// Adding the light to the scene
scene.add(light);


// creating a floor of grass (using css colour codes) 

var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
var mat = new THREE.MeshBasicMaterial({ color: "#556B2F", side: THREE.DoubleSide });
var plane = new THREE.Mesh(geo, mat);

scene.add(plane);

plane.rotateX(- Math.PI / 2);

// getting the camera aligned with the floor
camera.position.y += 1;

// creating the MOON 
const geom2 = new THREE.SphereGeometry(100);
const material2 = new THREE.MeshBasicMaterial({color: "#F8F8FF"});
const mesh2 = new THREE.Mesh(geom2, material2);
mesh2.position.x = 500;
mesh2.position.y = 500;
mesh2.position.z = -1000;


// function to create trees
function tree(x, y, z){
    // creating a brown trunk 
    const geom6 = new THREE.CylinderGeometry(1, 1, 6);
    const material6 = new THREE.MeshBasicMaterial({color: "#B8860B"});
    const mesh6 = new THREE.Mesh(geom6, material6);
    mesh6.position.x = x;
    mesh6.position.y = y;
    mesh6.position.z = z;

    // creating green leaves 
    const geom7 = new THREE.ConeGeometry(5, 7);
    const material7 = new THREE.MeshBasicMaterial({color: "#006400"});
    const mesh7 = new THREE.Mesh(geom7, material7);
    mesh7.position.x = x;
    mesh7.position.y = 8; 
    mesh7.position.z = z;

    scene.add(mesh6);
    scene.add(mesh7);
}
// gray mountain
const geom8 = new THREE.CylinderGeometry(30, 100, 100);
const material8 = new THREE.MeshBasicMaterial({color: "#808080"});
const mesh8 = new THREE.Mesh(geom8, material8);
mesh8.position.x = 0;
mesh8.position.y = 50;
mesh8.position.z = -1000;

// adding shapes to our scene
scene.add(mesh2); // MOON
scene.add(mesh8); // MOUNTAIN


// initialising locations that will keep changing in our loop to create a forest with random trees
var z1 = 0;
var z2 = 0;
var x1 = 0;
var x2 = 0;


// adding multiple trees randomly to our scene
for (let i = 0; i < 20; i++) {
 
    z1 -= 10;
    z2 -= 50;
    x1 -= 50;
    x2 += 50;

    tree(1, 3, z2 - 40);
    tree(1, 3, -z2 + 40);


    tree(x1, 3, z1 - 40);
    tree(x1, 3, z1 - 80);
    tree(x1, 3, z1 - 120);
    tree(x1, 3, z1 - 160);
    tree(x1, 3, z1 - 200);
    tree(x1, 3, z1 - 240);
    tree(x1, 3, z1 - 280);
    tree(x1, 3, z1 - 320);
    tree(x1, 3, z1 - 360);
    tree(x1, 3, z1 - 400);
    tree(x1, 3, z1 - 440);
    tree(x1, 3, z1 - 480);
    tree(x1, 3, z1 - 520);
    tree(x1, 3, z1 - 560);
    tree(x1, 3, z1 - 600);
    tree(x1, 3, z1 - 640);
    tree(x1, 3, z1 - 680);
    tree(x1, 3, z1 - 720);
    tree(x1, 3, z1 - 760);
    tree(x1, 3, z1 - 800);

    tree(x1, 3, z1 + 40);
    tree(x1, 3, z1 + 80);
    tree(x1, 3, z1 + 120);
    tree(x1, 3, z1 + 160);
    tree(x1, 3, z1 + 200);
    tree(x1, 3, z1 + 240);
    tree(x1, 3, z1 + 280);
    tree(x1, 3, z1 + 320);
    tree(x1, 3, z1 + 360);
    tree(x1, 3, z1 + 400);
    tree(x1, 3, z1 + 440);
    tree(x1, 3, z1 + 480);
    tree(x1, 3, z1 + 520);
    tree(x1, 3, z1 + 560);
    tree(x1, 3, z1 + 600);
    tree(x1, 3, z1 + 640);
    tree(x1, 3, z1 + 680);
    tree(x1, 3, z1 + 720);
    tree(x1, 3, z1 + 760);
    tree(x1, 3, z1 + 800);

    tree(x2, 3, z1);
    tree(x2, 3, z1 + 40);
    tree(x2, 3, z1 + 80);
    tree(x2, 3, z1 + 120);
    tree(x2, 3, z1 + 160);
    tree(x2, 3, z1 + 200);
    tree(x2, 3, z1 + 240);
    tree(x2, 3, z1 + 280);
    tree(x2, 3, z1 + 320);
    tree(x2, 3, z1 + 360);
    tree(x2, 3, z1 + 400);
    tree(x2, 3, z1 + 440);
    tree(x2, 3, z1 + 480);
    tree(x2, 3, z1 + 520);
    tree(x2, 3, z1 + 560);
    tree(x2, 3, z1 + 600);
    tree(x2, 3, z1 + 640);
    tree(x2, 3, z1 + 680);
    tree(x2, 3, z1 + 720);
    tree(x2, 3, z1 + 760);
    tree(x2, 3, z1 + 800);
    
    tree(x2, 3, z1 - 40);
    tree(x2, 3, z1 - 80);
    tree(x2, 3, z1 - 120);
    tree(x2, 3, z1 - 160);
    tree(x2, 3, z1 - 200);
    tree(x2, 3, z1 - 240);
    tree(x2, 3, z1 - 280);
    tree(x2, 3, z1 - 320);
    tree(x2, 3, z1 - 360);
    tree(x2, 3, z1 - 400);
    tree(x2, 3, z1 - 440);
    tree(x2, 3, z1 - 480);
    tree(x2, 3, z1 - 520);
    tree(x2, 3, z1 - 560);
    tree(x2, 3, z1 - 600);
    tree(x2, 3, z1 - 640);
    tree(x2, 3, z1 - 680);
    tree(x2, 3, z1 - 720);
    tree(x2, 3, z1 - 760);
    tree(x2, 3, z1 - 800);

}

// board
const geom9 = new THREE.PlaneGeometry(1, 1, 2, 2)
const material9 = new THREE.MeshBasicMaterial({color: "#778899"});
const mesh9 = new THREE.Mesh(geom9, material9);
mesh9.position.x = 0;
mesh9.position.y = 1;
mesh9.position.z = -2.8;

// board stand
const geom16 = new THREE.PlaneGeometry(0.1, 2, 1, 1)
const material16 = new THREE.MeshBasicMaterial({color: "#B8860B"});
const mesh16 = new THREE.Mesh(geom16, material16);
mesh16.position.x = 0;
mesh16.position.y = 0;
mesh16.position.z = -2.85;

// adding our board to the scene
scene.add(mesh9)
scene.add(mesh16)

// house
const geom11 = new THREE.BoxGeometry(10,10,10);
const material11 = new THREE.MeshBasicMaterial({color: "#8B4513"});
const mesh11 = new THREE.Mesh(geom11, material11);
mesh11.position.x = -400;
mesh11.position.y = 5;
mesh11.position.z = 400;

// window
const geom12 = new THREE.PlaneGeometry(2, 2, 3, 3)
const material12 = new THREE.MeshBasicMaterial({color: "#778899"});
const mesh12 = new THREE.Mesh(geom12, material12);
mesh12.position.x = -4;
mesh12.position.y = 5;
mesh12.position.z = -69.99;

// roof
const geom13 = new THREE.OctahedronGeometry(5, 0)
const material13 = new THREE.MeshBasicMaterial({color: "#778899"});
const mesh13 = new THREE.Mesh(geom13, material13);
mesh13.position.x = -400;
mesh13.position.y = 10;
mesh13.position.z = 400;

// adding the house to our scene
scene.add(mesh11) // house
scene.add(mesh12) // window
scene.add(mesh13) // roof

mesh13.rotateX(- Math.PI/ 45) // rotating roof so that it'll fit

// abnormal tree
const geom14 = new THREE.TorusKnotGeometry( 3, 1, 30, 4 );
const material14 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geom14, material14 );
torusKnot.position.x = 600;
torusKnot.position.y = 8;
torusKnot.position.z = 350;

scene.add( torusKnot );

// its trunk
const geom15 = new THREE.CylinderGeometry(1, 1, 6);
const material15 = new THREE.MeshBasicMaterial({color: "#B8860B"});    
const mesh15 = new THREE.Mesh(geom15, material15);
mesh15.position.x = 600;
mesh15.position.y = 3;
mesh15.position.z = 350;

// adding the abnormal tree to the scene
scene.add(mesh15)

// chest
const geom17 = new THREE.BoxGeometry(2, 0.8, 1);
const material17 = new THREE.MeshBasicMaterial({color: "#D2B48C"});
const mesh17 = new THREE.Mesh(geom17, material17);
mesh17.position.x = 0;
mesh17.position.y = 0.25;
mesh17.position.z = -10;

scene.add(mesh17)


// ######################################################## text (didn't work)
// var loader = new THREE.FontLoader();
// loader.load( 'fonts/fontname.js', function ( font ) {
//     const geometry = new TextGeometry( 'Hello three.js!', {
//         font: font,
//         size: 80,
//         height: 5,
//         curveSegments: 12,
//         bevelEnabled: true,
//         bevelThickness: 10,
//         bevelSize: 8,
//         bevelOffset: 0,
//         bevelSegments: 5
//     } );
//     var textMaterial = new THREE.MeshPhongMaterial( 
//         { color: 0xff0000, specular: 0xffffff }
//     );
// });
// var mesh15 = new THREE.Mesh( textGeometry, textMaterial );
// mesh15.position.x = 10;
// mesh15.position.y = 10;
// mesh15.position.z = -100;

// scene.add( mesh15 );

requestAnimationFrame(renderScene);

// drawing and keeping the scene animated as we move
function renderScene() {
    // the if statment is in place to resize the app on different screens if any changes occur, and to prevent resolution deterioration
    if(canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
}
renderer.render(scene, camera);
requestAnimationFrame(renderScene);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~ player's movements ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var rotate_left = 0;
var rotate_right = 0;

// using keyboard
canvas.addEventListener ("keydown", e=> {
    // Print out the key code
    console.log(`keyCode=${e.keyCode} shift?=${e.shiftKey}`);
    console.log(camera.position.x);
    console.log(camera.position.y);
    console.log(camera.position.z);



    // forward (w)
    if(e.keyCode == 87) {
        if (camera.position.z >= -900){
            camera.position.x -= 0.4 * Math.sin(camera.rotation.y); 
            camera.position.z -= 0.4 * Math.cos(camera.rotation.y);

        }
    }
    // sprint (shift)
    else if(e.keyCode == 16) {
        if (camera.position.z >= -900){
            camera.position.x -= 1 * Math.sin(camera.rotation.y);
            camera.position.z -= 1 * Math.cos(camera.rotation.y);

        }
    }
    // backward (s)
    else if(e.keyCode == 83) {
        if (camera.position.z <= 1000){
            camera.position.z += 0.4;

        }
    }
    // right (d)
    else if(e.keyCode == 68) {
        if (camera.position.x <= 1000){
            camera.position.x += 0.4;

        }
    }
    // left (a)
    else if(e.keyCode == 65) {
        if (camera.position.x >= -1000){
            camera.position.x -= 0.4;

        }
    }
    // moving towards the sky for testing purposes (space)
    else if(e.keyCode == 32) {
        // not operational yet
        camera.position.y += 1;

    }
    // C (rotate left)
    else if(e.keyCode == 67) {
        camera.rotation.set(0, rotate_left += 0.1, 0)
        if(camera.rotation.y > Math.PI*2) {
            camera.rotation.y -= Math.PI*2;
        }

    }
    else if(e.keyCode == 66) {
        camera.position.y -= 1;
    }
    // V (rotate right)
    else if(e.keyCode == 86) {
        camera.rotation.set(0, rotate_right -= 0.1, 0)

    }
});
canvas1.addEventListener ("mousemove", e => {
    console.log(`Mouse moved! Coordinates are ${e.offsetX},${e.offsetY}`);
    // if (e.offsetY)
        // camera.rotation.set(0,rotate_y +=0.01,0)
});

// ending the game (didn't work)
if (camera.position.z == -10){
    
    scene.remove(); 
    console.log("game over !")
}

