class Plinko{
    constructor(x, y, rad) {
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.rad = 10
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
          var pos = this.body.position;
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
       // pop();
       circle(pos.x, pos.y, this.rad * 2 , this.rad * 2);
      }
}