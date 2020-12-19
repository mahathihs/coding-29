class Block{
    consrtructor(x,y,w,h){
        var options={
            //isStatic:true,
           // density:1.2,
            friction:0.0,
            restitution:0.4
        }
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display()
    {
        var blockPos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(blockPos.x,blockPos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,tthis.h);
        pop();
    }
}