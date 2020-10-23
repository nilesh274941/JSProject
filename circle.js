import * as Shape from shape.js 
function Circle(radius)
{
  Shape.call(this);
  this.calculateArea=function(){
    return 3.14*radius*radius;
  };
}
