let font;
let particles = [];

let c;

function preload() {
  font = loadFont('data/YujiHentaiganaAkari-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let fontSize = 50;
  let textX = 10;
  let textY = height/2;
  let factor = 0.1;
  let points = font.textToPoints('WERE STARS; WE FADE, BUT OUT LIGHT REMAINS', textX, textY, fontSize);
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let p = new Particle(pt.x, pt.y);     
    particles.push(p);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
    p.update();
    p.behavior();
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration =createVector(0, 0);  
    this.velocity = p5.Vector.random2D().mult(0.01);
    this.lifespan = 100;
    this.size = 5;
    this.maxSpeed = 0.01;
    c=random(600);
  }
  
  behavior() { 
    this.acceleration.add(p5.Vector.random2D().mult(0.01));
    if(this.lifespan<=50)
    c=random(300);
  }
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 1;
    
  }
  
 display() {
  push();
  translate(this.position.x, this.position.y);
  noStroke();
  fill(c,this.lifeSpan)
  beginShape();
  let angleOff = TWO_PI / 5; 
  for (let i = 0; i < 5; i++) {
    let angle = i * angleOff;
    let x = cos(angle) * this.size;
    let y = sin(angle) * this.size;
    vertex(x, y);
    x = cos(angle + angleOff / 2) * (this.size / 2); 
    y = sin(angle + angleOff / 2) * (this.size / 2);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}
  
  isDead() {
    return this.lifespan <= 0;
  }
}
