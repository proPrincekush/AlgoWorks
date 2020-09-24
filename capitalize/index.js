// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(data) {
let splt = data.split(" ")
let str="";
splt.map(ele=>{
  str= str+" "+ele[0].toUpperCase()+ele.slice(1)
})
return str.slice(1);
}

module.exports = capitalize;
