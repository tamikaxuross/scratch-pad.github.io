// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

//I-string 
//O- length of string
//C-n/a
//E-n/a


function length(string) {
    // YOUR CODE BELOW HERE //
//use dot notation to access length of the string 
   return string.length;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

//I-string
//O-new string 
//C-returned string needs to be lowercase 
//E-n/a
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //initalize new string 
    var stringNew = '';
    //create a for loop to iterate 
    for(let i = 0; i < string.length; i++) {
        //convert stringNew to lowercase 
        stringNew += string[i].toLowerCase();

    }
   return stringNew;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
//I-input string 
//O-new string 
//C-returned string should be uppercase
//E- n/a
function toUpperCase(string) {
    //initalize new string 
    var stringNew = '';
    //create a for loop to iterate 
    for(let i = 0; i < string.length; i++) {
        //convert stringNew to upperxAE 
        stringNew += string[i].toUpperCase();

    }
   return stringNew;

    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
//I-string
//O-new string 
//C-new string must be forced with dash-case
//E-n/a 
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// YOUR CODE BELOW HERE /    //initalize newssString
    var newssString = '';
//process for loop input string for dash case
    for (let i = 0; i < string.length; i++) {
        // Check if current character is a space
        if (string[i] === ' ') {
            // Replace space with dash
            newssString += '-';
        } else {
            // Convert character to lowercase and add to newssString
            newssString += string[i].toLowerCase();
        }

    }
    // Return the dash-case string
    return newssString;

    console.log(toDashCase('Hello World'));
  


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//I-
//O-
//C-
//E-
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//covert both string and char to lowercase
const lowerString = string.toLowerCase();
const lowerChar = char.toLowerCase();
//check if the string is empty or char is not one charatcter
if (lowerString.length === 0 || lowerChar.length !== 1) {
    //return false
    return false;
}

//check if the first character of lowerString matches lowerChar
return lowerString.charAt(0) === lowerChar;
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//I-
//O-
//C-
//E-
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    string = string.toLowerCase();
    char = char.toLowerCase();
    const lastChar = string[string.length - 1];
    return lastChar === char;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//I-
//O-
//C-
//E-
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
//I-
//O-
//C-
//E-
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
//I-
//O-
//C-
//E-
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 // Compare the lengths of stringOne and stringTwo
 if (stringOne.length >= stringTwo.length) {
    return stringOne;
} else {
    return stringTwo;
}



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//I-
//O-
//C-
//E-
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne < stringTwo) {
        return 1;
    } else if (stringOne > stringTwo) {
        return -1;
    } else {
        return 0;
    }



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//I-
//O-
//C-
//E-
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) {
        return 1;
    } else if (stringOne < stringTwo) {
        return -1;
    } else {
        return 0;
    }




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}