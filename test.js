function chunk(array, size) {
    arr= []
  for(let i = 0; i<array.length;i=i+size){
        arr.push(array.slice(i,i+size))
  }
console.log(arr);
}

chunk([1,2,3,4,5],3);