class Particle {
    constructor (x,y,radius) {
        var particleoptions = {
            restitution: 0.4
        }

        this.body = Bodies.circle(x,y,radius,particleoptions);
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}