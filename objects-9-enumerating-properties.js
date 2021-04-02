function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('');
    }
}

const circle = new Circle(10);
// interate through obj and return the keys of obj, not the values tho
for (let key in circle) {

    //display 

    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);//radius 10, this doesn't return the draw() method
    //console.log(key);   // radius, draw 
    //use bracket notation to get values of propeties

    //console.log(circle[key]); //10, draw [function]

    //use type of operator to check key value
}

// return keys in circle as an array

const keysAsArray = Object.keys(circle);
console.log(keysAsArray);// returns an array with two members, radius and draw [ 'radius', 'draw' ]


// search if object has a given property, use the in operator

if ('radius' in circle) console.log('radius is \'bout that circle life');