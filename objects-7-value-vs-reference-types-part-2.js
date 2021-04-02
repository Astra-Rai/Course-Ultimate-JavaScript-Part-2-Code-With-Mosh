
/* 

   - when object is used, object value is not stored in the variable that it's assigned to for example: 
   - address of memory location is stored inside that variable
   - copying x into y, it is the address/reference that is copied
   - primitives are copied by their value
   - objects are copied by their reference
   - JavaScript has function scope: Each function creates a new scope. 
     Scope determines the accessibility (visibility) of these variables. 
     Variables defined inside a function are not accessible (visible) from outside the function
*/

// number variable is global 

let number = 10;

function increase (number) {

    // increment number by 1, after fuction, number goes out of scope    
    number++;
}

// primitatives are copied by there value
// call increase function and pass number 
// when increase is called, it's vaule,num, is copied locally, paramater, w/in the function
console.log(increase()); // undefined
console.log(number); //10
console.log(increase(20));

