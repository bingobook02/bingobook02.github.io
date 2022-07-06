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

const camera = new THREE.PerspectiveCamera(60, 1.33, 0.1, 10000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const scene = new THREE.Scene();

// setup device rotation
// import {DeviceOrientationControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/DeviceOrientationControls.js';

// var controls = new DeviceOrientationControls(camera);


// setting up lights 
// Creating ambient light
const light = new THREE.AmbientLight(0xffffff, 0.2);

// Adding the light to the scene
scene.add(light);

// our 3 clues' text

// creating text for the first hint
const loader = new THREE.FontLoader();
const font = loader.load(
	// resource URL
	'fonts/Kool-Baby_Regular.json',

	// onLoad callback
	function ( font ) {
		// do something with the font
        const bluetext = new THREE.TextGeometry('Yellow Tree',{
            height: 1,
            size: 1,
            font: font

        })
        const textmesh = new THREE.Mesh(bluetext, [
            new THREE.MeshPhongMaterial({color: "#6A5ACD"}),
            new THREE.MeshPhongMaterial({color: "#6A5ACD"}),

        ])
        textmesh.castShadow = true;
        textmesh.position.x = -5;
        textmesh.position.y = 0;
        textmesh.position.z = -10;
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

// creating text for the second hint
const loader2 = new THREE.FontLoader();
const font2 = loader2.load(
	// resource URL
	'fonts/Kool-Baby_Regular.json',

	// onLoad callback
	function ( font2 ) {
		// do something with the font
        const bluetext = new THREE.TextGeometry('House',{
            height: 1,
            size: 2,
            font: font2

        })
        const textmesh2 = new THREE.Mesh(bluetext, [
            new THREE.MeshPhongMaterial({color: "#FF0000"}),
            new THREE.MeshPhongMaterial({color: "#FF0000"}),

        ])
        textmesh2.castShadow = true;
        textmesh2.position.x = 590;
        textmesh2.position.y = 0;
        textmesh2.position.z = 350;
        scene.add(textmesh2);
		console.log( font2 );
	},

	// onProgress callback
	function ( xhr ) {
		
	},
    
	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

// creating text for the third hint
const loader3 = new THREE.FontLoader();
const font3 = loader3.load(
	// resource URL
	'fonts/Kool-Baby_Regular.json',

	// onLoad callback
	function ( font3 ) {
		// do something with the font
        const bluetext = new THREE.TextGeometry('F_ll_w The M__n',{
            height: 1,
            size: 1,
            font: font3

        })
        const textmesh3 = new THREE.Mesh(bluetext, [
            new THREE.MeshPhongMaterial({color: "#FFFF00"}),
            new THREE.MeshPhongMaterial({color: "#FFFF00"}),

        ])
        textmesh3.castShadow = true;
        textmesh3.position.x = -390;
        textmesh3.position.y = 0;
        textmesh3.position.z = 400;
        scene.add(textmesh3);
		console.log( font3 );
	},

	// onProgress callback
	function ( xhr ) {
		
	},
    
	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

// creating a floor of grass 

var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
var mat = new THREE.MeshBasicMaterial({ color: "#556B2F", side: THREE.DoubleSide });
var plane = new THREE.Mesh(geo, mat);

scene.add(plane);

// putting the floor in the correct position
plane.rotateX(- Math.PI / 2);

// getting the camera aligned with the floor
camera.position.y += 1;

// creating the moon 
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
};

// function to create stars
function star(x, z){
    const geom19 = new THREE.SphereGeometry(2);
    const material19 = new THREE.MeshBasicMaterial({color: "#F8F8FF"});
    const mesh19 = new THREE.Mesh(geom19, material19);
    mesh19.position.x = x;
    mesh19.position.y = 500;
    mesh19.position.z = z;

    scene.add(mesh19);
};

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

// initialising stars locations
var x = -1000;
var z = -1000;

// creating stars
for (let i = 0; i < 20; i++){
    x += 100;
    z += 100;

    star(x, z);
    star(x, z - 100);
    star(x, z - 200);
    star(x, z - 300);
    star(x, z - 400);
    star(x, z - 500);
    star(x, z - 600);
    star(x, z - 700);
    star(x, z - 800);
    star(x, z - 900);
    star(x, z - 1000);
    star(x, z - 1100);
    star(x, z - 1200);
    star(x, z - 1300);
    star(x, z - 1400);
    star(x, z - 1500);
    star(x, z - 1600);
    star(x, z - 1700);
    star(x, z - 1800);
    star(x, z - 1900);
    star(x, z - 2000);

    star(x, z + 100);
    star(x, z + 200);
    star(x, z + 300);
    star(x, z + 400);
    star(x, z + 500);
    star(x, z + 600);
    star(x, z + 700);
    star(x, z + 800);
    star(x, z + 900);
    star(x, z + 1000);
    star(x, z + 1100);
    star(x, z + 1200);
    star(x, z - 1300);
    star(x, z - 1400);
    star(x, z + 1500);
    star(x, z + 1600);
    star(x, z + 1700);
    star(x, z + 1800);
    star(x, z + 1900);
    star(x, z + 2000);

}

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


// house
const geom11 = new THREE.BoxGeometry(10,10,10);
const material11 = new THREE.MeshBasicMaterial({color: "#8B4513"});
const mesh11 = new THREE.Mesh(geom11, material11);
mesh11.position.x = -400;
mesh11.position.y = 5;
mesh11.position.z = 400;

// window 1
const geom12 = new THREE.PlaneGeometry(2, 2, 3, 3);
const material12 = new THREE.MeshBasicMaterial({color: "#EEE8AA"});
const mesh12 = new THREE.Mesh(geom12, material12);
mesh12.position.x = -403;
mesh12.position.y = 7;
mesh12.position.z = 405.2;

// window 2
const geom18 = new THREE.PlaneGeometry(2, 2, 3, 3);
const material18 = new THREE.MeshBasicMaterial({color: "#EEE8AA"});
const mesh18 = new THREE.Mesh(geom18, material18);
mesh18.position.x = -397;
mesh18.position.y = 7;
mesh18.position.z = 405.2;

// door
const geom20 = new THREE.PlaneGeometry(2, 4, 3, 3);
const material20 = new THREE.MeshBasicMaterial({color: "#808000"});
const mesh20 = new THREE.Mesh(geom20, material20);
mesh20.position.x = -400.1;
mesh20.position.y = 2;
mesh20.position.z = 405.2;

// roof
const geom13 = new THREE.OctahedronGeometry(5, 0);
const material13 = new THREE.MeshBasicMaterial({color: "#778899"});
const mesh13 = new THREE.Mesh(geom13, material13);
mesh13.position.x = -400;
mesh13.position.y = 10;
mesh13.position.z = 400;

// adding the house to our scene
scene.add(mesh11); // house
scene.add(mesh12); // window 1
scene.add(mesh13); // roof
scene.add(mesh18); // window 2
scene.add(mesh20); // door


mesh13.rotateX(- Math.PI/ 45); // rotating roof so that it'll fit

// abnormal tree
const geom14 = new THREE.TorusKnotGeometry( 8, 3, 60, 6 );
const material14 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geom14, material14 );
torusKnot.position.x = 600;
torusKnot.position.y = 23; 
torusKnot.position.z = 350;

scene.add( torusKnot );

// its trunk
const geom15 = new THREE.CylinderGeometry(1, 1, 17);
const material15 = new THREE.MeshBasicMaterial({color: "#B8860B"});    
const mesh15 = new THREE.Mesh(geom15, material15);
mesh15.position.x = 600;
mesh15.position.y = 3;
mesh15.position.z = 350;

// adding the abnormal tree to the scene
scene.add(mesh15);

// chest (won't appear until both clues locations are closed)
const geom17 = new THREE.BoxGeometry(15, 8, 3);
const material17 = new THREE.MeshBasicMaterial({color: "#D2B48C"});
const mesh17 = new THREE.Mesh(geom17, material17);
mesh17.position.x = 500;
mesh17.position.y = 0.25;
mesh17.position.z = -800;

// boolean variables represinting clues locations
var clue1_closed = false;
var clue2_closed = false;


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
    console.log(clue1_closed);
    console.log(clue2_closed);


    // in order for the treasure to emerge in the game and become attainable both clues must be found respectively
    // first clue
    if (580 <= camera.position.x && camera.position.x <= 620 && camera.position.y == 1){
        if (330 <= camera.position.z && camera.position.z <= 380){
            clue1_closed = true;
        }

    };

    // second clue
    if (-420 <= camera.position.x && camera.position.x <= -380 && camera.position.y == 1 && clue1_closed == true){
        if (380 <= camera.position.z && camera.position.z <= 420){
            clue2_closed = true;
             // adding the treasure to our scene
            scene.add(mesh17);

            // creating text indicating the treasure 
            const loader4 = new THREE.FontLoader();
            const font4 = loader4.load(
                // resource URL
                'fonts/Kool-Baby_Regular.json',

                // onLoad callback
                function ( font4 ) {
                    // do something with the font
                    const bluetext = new THREE.TextGeometry('Reach for the treasure',{
                        height: 1,
                        size: 1,
                        font: font4

                    })
                    const textmesh4 = new THREE.Mesh(bluetext, [
                        new THREE.MeshPhongMaterial({color: "#EEE8AA"}),
                        new THREE.MeshPhongMaterial({color: "#EEE8AA"}),

                    ])
                    textmesh4.castShadow = true;
                    textmesh4.position.x = 490;
                    textmesh4.position.y = 6;
                    textmesh4.position.z = -800;
                    scene.add(textmesh4);
                    console.log( font4 );
                },

                // onProgress callback
                function ( xhr ) {
                    
                },
                
                // onError callback
                function ( err ) {
                    console.log( 'An error happened' );
                }
            );
        }

    };

    // when user at 5 meters from treasure end game
    if (470 <= camera.position.x && camera.position.x <= 520 &&clue2_closed == true ){
            alert("GGss you win! You found the treasure chest! Your score is " + (600 - totalSeconds));
            location.reload();
    }
    // forward (W)
    if(e.keyCode == 87) {
        if (camera.position.z >= -900){
            camera.position.x -= 0.4 * Math.sin(camera.rotation.y); 
            camera.position.z -= 0.4 * Math.cos(camera.rotation.y);

        }
    }
    // sprint (SHIFT)
    else if(e.keyCode == 16) {
        if (camera.position.z >= -900){
            camera.position.x -= 1 * Math.sin(camera.rotation.y);
            camera.position.z -= 1 * Math.cos(camera.rotation.y);

        }
    }
    // backward (S)
    else if(e.keyCode == 83) {
        if (camera.position.z <= 1000){
            camera.position.z += 0.4;

        }
    }
    // right (D)
    else if(e.keyCode == 68) {
        if (camera.position.x <= 1000){
            camera.position.x += 0.4;

        }
    }
    // left (A)
    else if(e.keyCode == 65) {
        if (camera.position.x >= -1000){
            camera.position.x -= 0.4;

        }
    }
    // ANTI CLOCK WISE (C)
    else if(e.keyCode == 67) {
        camera.rotation.set(0, rotate_left += 0.1, 0);

    }
    // CLOCK WISE (V)
    else if(e.keyCode == 86) {
        camera.rotation.set(0, rotate_right -= 0.1, 0);

    }
});


