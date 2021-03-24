
// two ways to create an object: use a factory funciton or constructor
// if we use the 'this' keyword w/a 'new' operator, = constructor funciton

// if you return an object within the function of a obj, it is referred to as a factory funciton
// if you use this this
// to access the object, a method can use the this keyword.
// the value of this is the object “before dot”, the one used to call the method ??
// constructor function, first letter of name is capitalized?

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
            console.log('love');
    }
}

const anotherCircle = new Circle(5);
console.log(anotherCircle);

// withoutthe new keyword, this will reference the window object, the gloabl object in the browswer
// new, creates an empty object
