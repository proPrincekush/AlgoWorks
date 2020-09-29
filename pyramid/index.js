// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
    
//     // Iterative solution
//     let col_no = n+n-1;
//     let mid = Math.floor(col_no/2)
//     for(let row = 0;row<n;row++){
//         let stair = ""
//         for(let col = 0; col<col_no;col++){
//             if (col>=mid-row && col<=mid+row) {
//                 stair+="#" 
//             }else{
//                 stair+=" " 
//             }
//         }
//         console.log(stair);
//     }

// }


//  recursive solution
function pyramid(n,row=0,stair='') {
    // hit the end of problem 
    if (n===row) {
       return;
    }
 
    let col_no = n+n-1;
    let mid = Math.floor(col_no/2)
    
 
    if (col_no === stair.length) {
       console.log(stair);
     return  pyramid(n,row+1)
    }
 
    if (stair.length>=mid-row && stair.length<=mid+row) {
       stair+="#";
    } else {
       stair+=" "
    }
 
    pyramid(n,row,stair)
 }
module.exports = pyramid;
