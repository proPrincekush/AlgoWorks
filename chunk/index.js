// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
 
    /* // method 1
    let arr = [];
    let mainArr =[];
    for(let i=0;i<array.length;i++){
        if (i%size==0) {
            if (arr.length>0) {
                mainArr.push(arr)
            }
             arr = []
            arr.push(array[i])
        } else {
            arr.push(array[i])
        }
    }
    mainArr.push(arr)
    return mainArr */

  // method 2
  arr= []
  for(let i = 0; i<array.length;i=i+size){
        arr.push(array.slice(i,i+size))
  }
  return arr;

 
}

module.exports = chunk;
