

// object literal w/ more than 1 method, use factory or constructor function, also it has behavior
// we want create another circle, use a factory function, also
// factory function, createCircle, parameter is radius

function createCircle(radius) {

    // return object
    return {
        
        // ES6, new feature: if key and value same, remove noise, remove value radius: radius, is radius
        radius,
    
        // key: draw, value: funciton
        draw: function() {
        console.log('draw');
        }
    }
};

// we can call the factory function, createCircle, to create a new circle

const circle1 = new createCircle(2);
console.log(circle1) //output: { radius: 2, draw: [Function: draw] }