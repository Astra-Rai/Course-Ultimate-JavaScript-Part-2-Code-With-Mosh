

/* 

 - value types: #'s, string, boolean, symbol, undefined, null
 - reference types: objects, functions (funcs are also objects), arrays
 - difference b/t primitives and objs behavior
*/ 

// example 1
let x = 10; // x is reassigned value 20
let y = x; // don't understand why y is not 20 and 10

x = 20;
// note: both x and y independent of one another 
//console.log(x) // x is 20
//console.log(y); // y is 10

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
