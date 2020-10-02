function matrix(n) {

   
   let results = []
   for(let i = 0;i<n;i++){
      results.push([])
   }
   

   // maintaining variables
   let startRow = 0 ;
   let startCol = 0 ;
   let endRow = n-1 ;
   let endCol = n-1 ;
   let value = 1;
  
   // data = repeat(results,startRow,startCol,endRow,endCol,value)
   // results = data[0]
   // value = data[1]

   // startRow = startRow+1;
   // endRow = endRow-1;
   // startCol = startCol+1;
   // endCol = endCol-1;

   // data = repeat(results,startRow,startCol,endRow,endCol,value)
   // results = data[0]
   // value = data[1]



for(let times = 0;times<n/2;times++){
   data = repeat(results,startRow,startCol,endRow,endCol,value)
   results = data[0]
   value = data[1]

   startRow = startRow+1;
   endRow = endRow-1;
   startCol = startCol+1;
   endCol = endCol-1;
   }
console.log(results);
}

matrix(6)


function repeat(results,startRow,startCol,endRow,endCol ,value) {

   for(let col = startCol; col<=endCol;col++){
      results[startRow][col] = value
      value++;
   }

   for(let row = startRow+1;row<=endRow;row++){
      results[row][endCol]=value;
      value++;
   }
  
   
   for(let col=endCol-1;col>=startCol;col--){
      results[endRow][col]=value
      value++;
   }
   

   for(let row = endRow-1;row>startRow;row--){
      results[row][startCol] = value
      value++
   }
   
   return [results,value];
}