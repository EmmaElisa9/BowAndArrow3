class Tiro{
  constructor(x,y,r) {
    var options ={
      "restitution": 0,
      isStatic: true
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
  }
  display(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
  }
}