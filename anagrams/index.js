// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strA = stringA.replace(/[^\w]/g,"").toLowerCase()
    let strB = stringB.replace(/[^\w]/g,"").toLowerCase()
    charA = charMap(strA)
    charB = charMap(strB)
    console.log(charA);
    console.log(charB);
   
    for (const key in charB) {
      if (charA[key]!==charB[key]){
        return false
   }}
   return true
   }
   
   
   function charMap(str) {
     let mystr = str;
     let charmap ={}
     for (const char of mystr) {
         if(charmap[char]){
           charmap[char]= charmap[char]+1
         }
         else{
           charmap[char]=1
         }
   }
   
   return charmap;
   }
   
module.exports = anagrams;
