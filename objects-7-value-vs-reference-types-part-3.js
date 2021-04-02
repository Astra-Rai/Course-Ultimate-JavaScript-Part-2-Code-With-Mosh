
/* 

   - when object is used, object value is not stored in the variable that it's assigned to for example: 
   - address of memory location is stored inside that variable
   - copying x into y, it is the address/reference that is copied
   - primitives are copied by their VALUE
   - objects are copied by their REFERENCE
   - JavaScript has function scope: Each function creates a new scope. 
     Scope determines the accessibility (visibility) of these variables. 
     Variables defined inside a function are not accessible (visible) from outside the function
*/

let obj = { value :10 } ;

function increase (obj) {

    obj.value++;
}

/* 
    - when increase function is called, obj is passed by its REFERENCE 
    - the local parameter obj in the function incrasese (obj), points to same obj defined on line 14
    - two variables pointing to same obj, any changes made will be visible to other variable

*/

increase(obj);
console.log(obj); // { value: 11 }




