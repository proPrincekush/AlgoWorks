// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let tempStr = str;
   var reverseStr = "";
   for (let i = 0; i < str.length; i++) {
    reverseStr+= tempStr[tempStr.length-(i+1)]  
   }
   return reverseStr;
}

module.exports = reverse;
