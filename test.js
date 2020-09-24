let data = "hello World!"
let splt = data.split(" ")

let str="";
splt.map(ele=>{
  str= str+" "+ele[0].toUpperCase()+ele.slice(1)
})
console.log(str.slice(1));