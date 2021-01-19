class Chain{
constructor(body1,body2){
    var options= {
        bodyA : bird.body,
        bodyB : log6.body,
        stiffness:0.2,
        length: 10

        
    }
    this.chain=Constraint.create(options)
    

    World.add(world,this.chain)
}
display(){
   var firstpos = this.chain.bodyA.position;
   var secpos = this.chain.bodyB.position;

    line(firstpos.x,firstpos.y,secpos.x,secpos.y)
}
}