class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255
  }
display(){
  //console to see the speed of the pig
  console.log(this.body.speed);
  // to make the pig vanish if the speed is greater than 3
  if(this.body.speed<3){
  super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    //visiblity is used so the pig doesn't just disappear fast
    this.Visiblity=this.Visiblity-5;
    //used for the same
    tint(255,this.Visiblity);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    //to revert the changes
    pop();
  }
}
};