// objects, private properties and methods

function Circle(radius) {
  /*
        - example of local variable declared w/in a function
        - local varible isn't relevant when we get out of function, it is not part of a new object
        -  exmaple of making a new object: const circle = new Circle(10)
        - let color = ' red ' isn't the same as this.color = color (setting color to property of object using this)
        -  this.color = color;
    
    */

    
    this.radius = radius;

    this.computeOptimumLocation = function() {

    };

    this.draw = function() {
    
    // computeOptimumLocation function is called WITHIN the ' draw ' funciton / method

    this.computeOptimumLocation();

    console.log("draw");
  };
}


const circle = newCricle(10);
circle.draw();
