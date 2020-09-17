// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// //// method 1
// function reverse(str) {
//    let tempStr = str;
//    var reverseStr = "";
//    for (let i = 0; i < str.length; i++) {
//     reverseStr+= tempStr[tempStr.length-(i+1)]  
//    }
//    return reverseStr;
// }

// ///// method 2
function reverse(str) {
   var reverseStr = "";
   for (let characters of str) {
    reverseStr = characters+reverseStr  
   }
   return reverseStr;
}

module.exports = reverse;
