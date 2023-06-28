/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// const str3 = "hello";
// const expected3 = "olleh";

// const str4 = "";
// const expected4 = "";

// /**
//  * Reverses the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str String to be reversed.
//  * @returns {string} The given str reversed.
//  */
// function reverseString(str) {}


// function reverseString(str1){
//     var newString = "";
//     for (var i = str1.length - 1; i >= 0; i--){
//     newString += str1[i];
    
//     }
//     console.log(newString);
//     return newString;
// } 


/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
reverseString(str1);
reverseString(str2);
reverseString(str3);
reverseString(str4);

function reverseString(str) {
    var newStr="";
    for(var i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    console.log(newStr);
    return newStr;
}