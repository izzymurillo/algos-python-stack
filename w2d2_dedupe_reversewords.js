/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

const str5 = "abc1def1"
const expected5 = "abc1def"
const expected5_bonus = "abcdef1"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
// 1. Creat a new dictionary
    var newString = "";
    temp_dir = {};
    for (var i = 0; i < str.length; i++){
        if (str[i] in temp_dir){
            temp_dir[str[i]] += 1;
        }
        else {
            temp_dir[str[i]] = 1;
            newString += str[i]
        }
    }
    return newString;
}



console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));

// *************************************************


/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWordsSplit(wordsStr = "") {
    const words = wordsStr.split(" ");
    let wordsReversed = "";

    for (const word of words) {
        let reversedWord = "";

    for (let i = word.length - 1; i >= 0; --i) {
        reversedWord += word[i];
    }

      // add a space in front of word if it's not the first word
    if (wordsReversed.length > 0) {
        reversedWord = " " + reversedWord;
    }
    wordsReversed += reversedWord;
    }
    return wordsReversed;
}

//************Another solution without split function */
// function reverseWords(str) {
//     end = str.length-1;
//     start = middle = 0;
//     newStr = "";
//     while (start < end) {
//         while(str[middle] !== " " && middle <= end){
//             middle++;
//         }
//         for (let i = middle-1; i >= start; i--) {
//             newStr += str[i];
//         }
//         if(str[middle] == " "){
//             newStr += str[middle];
//         }
//         middle++;
//         start = middle;
//     }
//     return newStr;
// }