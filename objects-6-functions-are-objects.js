

function Circle(radius) {
    this.radius = radius * 2;
    this.draw = function() {
        console.log('draw circle');
    }
}
// new operator iternally creats and empty ojb & passes as 1st argument of call method
// Circle.call({},5), same as expression on line #11
//this references {}
// don't use new operator, this will point to global obj which is window
const anotherCircle = new Circle(5);
// mehtod apply, pass the arguments in [] instead of explicity

//console.log(anotherCircle); // Circle { radius: 10, draw: [Function] }
//console.log(Circle.draw); // undefined
// Circle. purple icos methods, blue, properties
// Every obj in JS has a constructor property that references func used to create obj
console.log(Circle.name); // " Circle "
console.log(Circle.length);// 1
console.log(Circle.constructor); // [Function: Function], internally JS uses constructor function to create obj

const Circle3 = new Funciton ('radius', `

    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

