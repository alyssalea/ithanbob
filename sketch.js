warning = "epilepsy warning"
function preload(){
  oreo = loadImage ("assests/oreo.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(255)
}

function draw() {
  textSize(30)
  text(warning,500,500)
  
  if(keyIsPressed === true){
    background(random(0,255),random(0,255),random(0,255))
  }
  
  if(mouseIsPressed === true){
  image(oreo,mouseX - 170,mouseY - 20)
  }  
 
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}