// Part 1

function Circle(radius) {

    this.radius = radius;


    // this.df and this.col from the consumers of this obj, expose only the essentials: raidus and raw()
    // property defined, dl, and set to an obj
    this.defaultlocation = {x: 0, y:0 };

    // defined another method set to a funciton, it's called inside draw method
    this.computeOptimumLocation = function() {
        // ...
    }


    this.draw = function() {

        //there is an issue with computerOptimumLoaction here
        this.computeOptimumLocation();

        console.log('draw');
    };

}

const Circle = new Circle(10);
circle.computeOptimumLocation();// this could put object in a bad state
circle.draw(); // this yields an error
//not all members  should be accessible as a consumer / client of the circle obj

// abstract = hide detalis, show essentials

// if you change implementaiton of obj w/o abstraction concept, results in a # of changes in your suorce code
// one will have to modify source code in diffent places
// i'm sorta confused, 4.4.2021