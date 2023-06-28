/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";

  const str4 = "bbcc";
  const expected4 = "bbcc";

  const str5 = "abcdeffffffffff";
  const expected5 = "a1b1c1d1e1f10";
  

  const str6 = "aaabbaaa";
  const expected6 = "a3b2a3";

//   /**
//    * Encodes the given string such that duplicate characters appear once followed
//    * by a number representing how many times the char occurs. Only encode strings
//    * when the result yields a shorter length.
//    * - Time: O(?).
//    * - Space: O(?).
//    * @param {string} str The string to encode.
//    * @returns {string} The given string encoded.
//    */
//   function encodeStr(str) {}

function encodeStr(str) {
    var newStr="";
    var currentChar=str[0];
    var count=1;
    for (var i=1;i<str.length;i++){
      if (str[i]==currentChar){
        count++;
      }
      else{
        newStr+=currentChar+count;
        count=1;
        currentChar=str[i];
      }
    }
    newStr+=currentChar+count;
    if(newStr.length>=str.length){
      return str;
    }
    else{
      return newStr;
    }
  }