class Plinko {
    constructor (x,y,radius) {
        var plinkooptions = {
            isStatic: true,
            restitution: 0.5,
            friction: 0.4,
            density: 1.1
        }

        this.body = Bodies.circle(x,y,radius,plinkooptions);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        
        fill(255);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}