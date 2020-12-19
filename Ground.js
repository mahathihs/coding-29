class Ground {
    constructor(x,y,width,height) {
      var ground_options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,ground_options);
      this.width = width;
      this.height = height;
      World.add(world, this.gorund);
    }
    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("lightblue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
