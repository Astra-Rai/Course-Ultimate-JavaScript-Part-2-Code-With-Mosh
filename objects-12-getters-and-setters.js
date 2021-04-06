function Circle(radius) {
    this.radius = radius;

// defaultLocation is a private property; it cannot be access from the outside
// objective: to read the default location, but not modify it
let defaultLocation = {x:0, y:0};

// use a method that returns default location
// clousure, we have access to vars in parent function
this.getDefaultLocation = function() {
    return defaultLocation;
}; 

this.draw = function () {
    console.log( 'draw' ); 
};

// interface obj, objs we want to add new property to, 
// the obj is referenced my this, name of the property, 'defaultLocation'   
// 3rd argument, key value pair, get (a key word) set to a function    
Object.defineProperty(this, 'defaultLocation', {
    
    
    // function returns default  location when called
    // getter: function used to read a property
    get: function() {
        return defaultLocation;
    },
    // to 
    set: function(value) {
        // validate value before setting default location
        // if value x or y is falsely, throw error
        if (!value.x || !value.y)
        
        // error is a built in constructor use to create error objs 
            throw new Error('Invalid location');
        
        // set default location to value
        defaultLocation = value;
    }
});

}
const circle = new Circle(10);
//circle.defaultLocation = {x:0, y:0};
circle.draw(); // Type error: cirlce.draw is not a funciton





    /**
       defineProperty(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any; 
       Adds one or more properties to an object, and/or modifies attributes of existing properties.
       @ param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
       @ param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
      
         A reference to the prototype for a class of objects; readonly protype: Object. 
          Returns the prototype of an object; Read only
           @ param o The object that references the prototype.

         *
         **/