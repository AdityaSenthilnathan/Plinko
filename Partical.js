
class Partical{
    constructor(x, y) {
        var options = {
           isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.width = width;
        this.height = height;
this.rad = 10;
        this.color = color(random(0,255), random(0, 255), random(0, 255));
        World.add(world, this.body);
        //this.image = loadImage("sprites/base.png");
        //Matter.Body.setStatic(this.body, false);
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
       fill(this.color);
      ellipse(pos.x, pos.y, this.rad * 2, this.rad * 2);
      }
}