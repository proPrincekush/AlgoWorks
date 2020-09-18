// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let revStr="";
    // method 1
    // for (let char of str) {
    //     revStr=char+revStr;
    //  } 
    //  return revStr===str;
     

    // method 2
    // for (let i = 0; i < str.length; i++) {
    //    revStr+=str[str.length-(i+1)] 
    // }
    // return revStr===str; 

    // method 3 
    for (let i = 0; i < (str.length/2); i++) {
        // console.log(i);
        if (str[i]!==str[str.length-(i+1)]) {
            return false
        }
    }
    return true
}

module.exports = palindrome;
