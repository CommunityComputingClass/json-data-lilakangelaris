let data;


function preload() {
  data = loadJSON("flower.json");
}

function setup() {
  createCanvas(400, 400);
  background(194, 196, 255);
  
  let flowers = data.flowers;
 
  fill(flowers[2].r,flowers[2].g,flowers[2].b);
  ellipse(150,150,150,150);
  stroke(0);
  textSize(22);
  text(flowers[2].name, 100, 150);
}



