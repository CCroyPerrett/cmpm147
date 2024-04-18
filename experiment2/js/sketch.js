// sketch.js - purpose and description here
// Author: Chase Croy-Perrett
// Date:4/14/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var centerHorz, centerVert;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}


let seed = 239;

const grassColor = "#74740d";
const skyColor = "#69ade4";
const stoneColor = "#858290";
const treeColor = "#33330b";

const spaceColor = "#000000"
const lowerGroundColor = "#253f4b"
const upperGroundColor = "#365563"
const starColor = "#FFFFFF"

const planet = ["#CFFDBC", "#BDF6FE", "#528AAE", "#967654", "#09639f"];

// setup() function is called once when the program starts
function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized

  // create an instance of the class
  myInstance = new MyClass("VALUE1", "VALUE2");

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  randomSeed(seed);
  background(100);
  
  
  noStroke();
  fill(spaceColor);
  rect(0, 0, width, height);
  
  
  
  //generates random amount of stars in quadrant
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      if(random() <= 0.3){
        fill(starColor);
        circle(j * width/20 + ((random() - 0.5) * 15),i * height/20 + ((random() - 0.5) * 15), (5 * random() + 5));
      }
    }
  }
  
  //Galazy chape in the background
  beginShape();
  fill("#FFA500");
  vertex(30, 20);
  bezierVertex(80 * 10 * random(), 20 * 10 * random(), 80/2 * random() + 80/2, 75/2 * random() + 75/2, 30, 75/2 * random() + 75/2);
  bezierVertex(50 * 10 * random(), 80 * 10 * random(), 60/2 * random() + 60/2, 25/2 * random() + 25/2, 30, 20/2 * random() + 20/2);
  endShape();
  
  
  //generates 5 planets
  for (let i = 0; i < 5; i++) {
    fill(planet[i]);
    circle(width * (0.9 * random() + 0.1) + (random() - 0.5) * 20 * sin(2 * PI * millis()/7000 + 0.8 * i), height/2 * (0.9 * random() + 0.1) +  (random() - 0.5) * 20 * sin(2 * PI * millis()/7000 + 0.8 * i), (200 * random() + 30));
  }
  console.log("millis is: " + millis());
  
  fill(upperGroundColor);
  beginShape();
  vertex(0, height);
  var lean = false; 
  if(random() > 0.5){
    lean = true;
  }
  
  //generates comets
  let cometdir = true;
  if(random() - 0.5 > 0){
    //cometdir = false;
  }
  for (let i = 0; i < 5; i++) {
    stroke('#e8e337');
    strokeWeight(5);
    //if(cometdir){
    var lx =  random() * width ; var ly = random() * height;
    line(lx +((millis() + 1000*i) % 6000.0)/2, ly + ((millis() + 1000*i) % 6000.0)/2, (lx+40) + ((millis() + 1000*i) % 6000.0)/2, (ly+40) +((millis() + 1000*i) % 6000.0)/2);
    //}
    //else{
      //var lx =  random() * width; var ly = random() * height;
      //line(lx * ((millis() / 1000.0) % 1), ly * ((millis() / 1000.0) % 1), lx-40 * ((millis() / 1000.0) % 1), ly-40 *((millis() / 1000.0) % 1);
    //}
    //line(30, 20, 85, 75);
  }
  
  strokeWeight(0);
  
  const steps1 = 20;
  for (let i = 0; i < steps1 + 1; i++) {
    let x = (width * i) / steps1;
    let y;
    if(lean){
      y = 6 * height / 10 + (i%2)* height / 40 - (random() * random() * random() * height) / 4 - height / 50 + i * height/90;
    }
    else{
      y = 6 * height / 10 + (i%2)* height / 40 - (random() * random() * random() * height) / 4 - height / 50 + (2 * steps1/3 - i) * height/90;
    }
    
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
  
  fill(lowerGroundColor);
  beginShape();
  vertex(0, height);
  const steps = 10;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y;
    if(lean){
      y = 7.5 * height / 10 + (i%2)* height / 12 - (random() * random() * random() * height) / 4 - height / 50 + i * height/40 ;
    }
    else{
      y = 7.5 * height / 10 + (i%2)* height / 12 - (random() * random() * random() * height) / 4 - height / 50 + (2 * steps/3 - i) * height/40 ;
    }
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}