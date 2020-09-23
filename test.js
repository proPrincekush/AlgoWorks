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

console.log(anagrams('Hi there', 'Bye there'));