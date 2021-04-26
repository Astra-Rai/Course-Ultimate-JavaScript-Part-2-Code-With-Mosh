//objects-10-abstraction-part-1.js

function Circle(radius){

    this.radius = radius;

    this.defaultLocation = {x:0, y:0};

    /* 

    - property default loaction set to an object
    - with abstraction in mind, this.computeOptimumLocation should be hidden
    - abstraction: hide details and complexity, show only essentials
    - in this example, essentials: radius and draw method
    - dvd player methaphor: inside = implementation detail
    - outside, public interface of dvd player, the buttons exposed
    */

    this.computeOptimumLocation = function(){

    }

    this.draw = function(){


        this.computeOptimumLocation;
        console.log('draw');
    };
}

// creating a circle object
const circle = newCricle(10);
circle.computeOptimumLocation();
//circle.draw();  this will cause an error

/*  
    - members of cicle object: computeOptimumLocation, defaultLocation, draw radius...
    cicrcle, Circle, console, log  ??
    - not all members should be accessible to consumer / client of object
    - maybe computeOptimumLocation can be called in draw faction
*/