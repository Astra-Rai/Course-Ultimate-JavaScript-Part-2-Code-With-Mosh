//constructor function


function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw a circle yo !');
    }
}
// using Circle contructor function, created a circle object
// objects in javascript are dynamic
const anotherCircle = new Circle(10);

//console.log(anotherCircle);

// add new property to anotherCircle obj

anotherCircle.location = { x: 1 };// also can use [] and string to reference the property
// circle['location'] = {x: 1}
console.log(anotherCircle);

// use case from [] notation, ex. name of property unknown until it is calculated at runtime
// using property name that are not valid identifers: special chars, use [] ntation
// dynamically delete property

//delete circle['location'];
// ex. user obj frm database and want to return client, maybe certain user properties you do't want to return...dynamically delete