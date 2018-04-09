var food;
function Snake() {//this is the snake constructor
  this.x = 0;//value of x
  this.y = 0;//value of y
  this.xspeed = 1;//start snake travel to the right
  this.yspeed = 0;//
  
  this.show = function() {
    fill(80,125,249); //this is the color of the snake
    rect(this.x,this.y,scl,scl); // start at 0,0 and move outwards evenly toward the value of scl
  }
  
  this.dir = function(x,y) {
    this.xspeed = x;// sets the vertical speed as the value of x
    this.yspeed = y;// sets the horizontal speed as the value of y
  }
  this.update = function() {
    this.x = this.x + this.xspeed * scl;//
    this.y = this.y + this.yspeed * scl;//
  }
}