class BOB {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.radius=radius;
      this.x=x
      this.y=y
      this.body = Bodies.circle(this.x,this.y,(this.radius)/2,options);
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y)
      fill("teal");
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  };