function chunkArrayInGroups(arr, size) {

  let newArr = [];

  let chunks = Math.floor(arr.length / size);

  console.log(chunks);

  let rem = arr.length % size;

  for (let i = 0; i < chunks; i += size) { // cycle through full chunks exluding the remainder.

    newArr.push(arr.slice((i),((i + size))));
    
  }

  if(rem == 0){
    
    console.log(newArr);
    
    return newArr;
  
  }

  newArr.push(arr.slice(arr.length - rem));

  console.log(newArr);

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);