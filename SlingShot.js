class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        //200,20
        //170,20
        this.PR3 = loadImage("sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
                    image(this.PR3,pointA.x-30,pointA.y+25,15,30);
                    strokeWeight(4);
                    stroke("#301609");
                    line(pointA.x-30,pointA.y,pointB.x,pointB.y-5);
                    line(pointA.x-30,pointA.y,pointB.x,pointB.y+150);
        }
    }
    
}