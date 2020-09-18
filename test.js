// method 1
function palindrome(str){
    let revStr="";
    /* method 1

    for (let char of str) {
        revStr=char+revStr;
     } 

     */ 

   /* // method 2
    for (let i = 0; i < str.length; i++) {
       revStr+=str[str.length-(i+1)] 
    }

    return revStr===str; */

    // method 3 
    for (let i = 0; i < (str.length/2); i++) {
        // console.log(i);
        if (str[i]!==str[str.length-(i+1)]) {
            return false
        }
    }
    return true
}

console.log(palindrome("malayalam"));