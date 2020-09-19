// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
    let str = String(number);
    let revStr = "";

   for (const char of str) {
       revStr = char+revStr;
   }

   if (number >= 0) {
    return parseInt(revStr)
   } else {
    return parseInt(revStr)*(-1)
   }

   //    or  
// return Math.sign(number)*parseInt(revStr)
}

module.exports = reverseInt;
