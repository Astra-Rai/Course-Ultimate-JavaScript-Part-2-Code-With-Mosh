

function Circle(radius) {

    //let color = 'red'; // isn't part of object,not set to property of obj, only a local variable
    // this. color = color


    this.radius = radius;


    // this.df and this.col from the consumers of this obj, expose only the essentials: raidus and raw()
    // property defined, dl, and set to an obj
    
    
    //this.defaultlocation = {x: 0, y:0 };
    //define defaultLocation and set to a variable
     
    let defaultLocation = {x: 0, y:0};
    
    // defined another method set to a funciton, it's called inside draw method
    //this.computeOptimumLocation = function() {
    // scope is temporary, closure stays there, variables preserve their state    
    // closure determines what's variables are accessible in an inner funciton?
    // an variables defined w/in parent function
    let computeOptimumLocation = function(factor){

    }

    this.draw = function() {

        //there is an issue with computerOptimumLoaction here
        computeOptimumLocation(0.1);

        console.log('draw');
    };

}
// .this references the new circle object directly below this line
const Circle = new Circle(10);
//circle.computeOptimumLocation();
circle.draw(); 
