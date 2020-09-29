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
pyramid(3);