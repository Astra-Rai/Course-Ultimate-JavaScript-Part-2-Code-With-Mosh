// objects, private properties and methods

function Circle(radius) {
  
  // radius is set to property of object by using the 'this' keyword? 
    
  this.radius = radius;

  let defaultLocation = { x:0, y:0}

  // changed from: this.computeOptimumLocation = function() {};.... to a private method by setting to a variable

  // we we call the draw () function, variables below will preserve thier state 
  let computeOptimumLocation = function(factor){

  }

  this.draw = function() {
    // computeOptimumLocation function is called WITHIN the ' draw ' funciton / method

    // this.computeOptimumLocation(); closure allows this funciton to be accessed directly
    // draw can access variable in the parent function
    // note scope is temporary, closure isn't 
    computeOptimumLocation(0.1) 

    console.log("draw");
  };
}

const circle = newCricle(10);
circle.draw();
// circle. if you try to access the members of the object, you will only see draw and radius
