// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
//use google 
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date);

    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    return Array.isArray(value) || (typeof value === 'object' && value !== null && Object.keys(value).length > 0);
    // YOUR CODE ABOVE HERE //
}
console.log(isCollection({ a: 1 })); 
console.log(isCollection([1, 2, 3])); 
console.log(isCollection({}));
console.log(isCollection(new Date())); 
console.log(isCollection(null)); 
console.log(isCollection(42));
/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    if (value === null) {
        return 'null';
    }

    // Check if value is an array
    if (Array.isArray(value)) {
        return 'array';
    }

    // Check if value is a date
    if (value instanceof Date) {
        return 'date';
    }

    // check ysing type variable for other types
    const type = typeof value;

    // Handle special case for 'function' type
    if (type === 'function') {
        return 'function';
    }

    // Return the type as a string
    return type;

    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}