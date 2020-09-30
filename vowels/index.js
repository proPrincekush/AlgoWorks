// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
//    regular expression solution
const matches = str.match(/[aeiou]/gi);
return matches ? matches.length : 0
}

module.exports = vowels;


// function vowels(str) {
//     // iterative solution
//     let total_vowels = 0;
//    vowels_arr = ['a','e','i','o','u'];
//    for (const char of str.toLowerCase()) {
//       if (vowels_arr.includes(char)) {
//          total_vowels+=1;
//       }
//    }
//    return total_vowels;
// }