// one change implemented in object, resutls in having to make a number of changes in your source code

function Circle(radius) {
  
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    /*
        - if computeOptimumLocation function had an argument added to it..
        - if outide of the object we called circle.compu
    */
    this.computeOptimumLocation = function() {

    };

    this.draw = function() {
        
        //  - note computeOptimumLocation function is called WITHIN the draw funciton / method  
        this.computeOptimumLocation();
    
        console.log("draw");
  };
}

// creating a circle object
const circle = newCricle(10);

// if method not accessible from outside, we wouldn't have to modify line 12 where function is called
circle.computeOptimumLocation(0.1);

circle.draw()