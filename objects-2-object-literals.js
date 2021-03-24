
// let keyword in ES6 is a replacement for var
// const, cannot be reassigned, reassign variable, use let
// obj literal syntax, obj has key value pairs
// properties used to hold values, function/mehtod used to define logic
// circle obj has three memebers, if member is a function, it is a method

let circle = {
    radius: 1,
    // object w/in an object
    location:{
            x: 1,
            y: 2
    },
    // function in 
    draw: function() {
        console.log('draw');
    }
};
// access members of circle obj using dot notation
circle.draw();