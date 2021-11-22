class Arrow extends BaseClass{
    constructor(x,y){
      super(x,y,100,20);
      var options ={
        "restitution": 0
      }
      this.image = loadImage("arrow.png");
      this.humo = loadImage("smoke.png");
      this.Trayecto = [];
    }
  
    display() {
      super.display();
      var Position = [this.body.position.x,this.body.position.y];
      if(this.body.velocity.x>10 && this.body.position.x<310 && this.body.position.x>270){
        this.Trayecto.push(Position);
      }
      for(var i=0; i<this.Trayecto.length; i++){
        image(this.humo,this.Trayecto[i][0],this.Trayecto[i][1]);
      }
    }
  
    Vaciar(){
      this.Trayecto = [];
    }
  }