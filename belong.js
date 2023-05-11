function getIndexToIns(arr, num) {

  let sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {

      return i;

    }
  }

  return sortedArr.length;

}

getIndexToIns([40, 60], 50);

//Challenge Completed