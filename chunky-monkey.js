function chunkArrayInGroups(arr, size) {

  let newArr = [];

  let chunks = Math.floor(arr.length / size); 

  let remainderChunkSize = arr.length % size;

  for(let i = size; i <= (chunks*size); i += size){
    newArr.push(arr.slice(i - size, i))
    console.log(i);
  }
  
  if(remainderChunkSize > 0){
    newArr.push(arr.slice((arr.length - remainderChunkSize), arr.length))
  }
  
  console.log(newArr)

  return newArr;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
