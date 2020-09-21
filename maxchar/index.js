// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

      // if you want to ignore casing
    // str = str.toLowerCase() ;   

    // my solution
   /* 
   let set={};
    str.split('').map(char=>{
       let keyArr = Object.keys(set);
        if (keyArr.includes(char)){
            set[char]= set[char]+1
        }
        else{
            set[char]=1
        }
    })

     let maxChar;
        let value = 1;
        let keyArr= Object.keys(set);
        keyArr.map(key=>{
        if (set[key]>value) {
            value = set[key]
            maxChar= key
        }
        })
        if (maxChar) {
            console.log(maxChar);
        } else {
            console.log("there is no max Character.");
        }
         */

//  standard solution
let charMap = {}
for (const char of str) {
    // charMap[char] = charMap[char]+1 || 1 ; or
    if (charMap[char]) {
        charMap[char]++;
    }else{
        charMap[char] = 1
    }
}  

let maxChar = "";
let maxValue = 0; // or 1
for (const key in charMap) {
    if (charMap[key]>maxValue) {
        maxValue = charMap[key]
        maxChar = key
    }
}
return maxChar;

}

module.exports = maxChar;
