class Ground {
    constructor(x, y){
    var options = {
        isStatic : true
    } 
        this.body = Bodies.rectangle(x, y, 400, 20, options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, 400, 20);
    }
}