
/* It is considered good practice to name constructor functions with an upper-case first letter*/

function Circle(radius){

    this.radius = radius;
    // method draw 
    this.draw = function(){
        console.log('draw');
    };
}


// object created using custom constructor
const anotherCircle = new Circle();
/*
- everytime we call the circle constructor to create a new circle...
- this constructor will create a new object and set its prototype property to 'circle base'
- all objects created by a given cnstructor will have the same prototype
*/