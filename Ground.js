class Ground {
    constructor (x,y,width, height) {
        var groundoptions = {
            isStatic: true,
            friction: 0.4,
            density: 1.1
        }
        
        this.body = Bodies.rectangle(x,y,width,height,groundoptions);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}