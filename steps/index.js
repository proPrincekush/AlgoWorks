// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row=0,stair='') {
  
   /* // method 1 through iteration
    if (n>0) {
        for (let row = 0; row < n; row++) {
          let stair = ""
          for(let col=0;col<n;col++){
           if (col<=row) {
            stair+="#"
           } else {
             stair+=" "  
           }
          }
          console.log(stair);
        }
       }  */

        // hit the end of problem 
 if (n===row) {
  return;
}

//  on the end of row
if (n===stair.length) {
  console.log(stair);
  return steps(n,row+1)
}

// in between stair
if(stair.length<=row){
  stair+="#";
}else{
  stair+=" "
}

steps(n,row,stair);

}

module.exports = steps;
