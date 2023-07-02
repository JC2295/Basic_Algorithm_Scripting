function titleCase(str) {
  
  let lower = str.toLowerCase();

  console.log(lower);

  let arr = lower.split(" ");

  let outputArr = [];
  
  for(let i = 0; i < arr.length; i++){
    
    let tmpArr = arr[i];

    let tmpStr = tmpArr.toString();

    console.log(tmpStr);

    let tmpChar = tmpStr.substr(0, 1);

    tmpChar = tmpChar.toUpperCase();

    let sliceStr = tmpStr.slice(1);

    let concatStr = tmpChar.concat(sliceStr);

    outputArr.push(concatStr);
    
  }

  console.log(outputArr);

  let outputStr = outputArr.join(" ");

  //console.log(outputStr);
  
  return outputStr;
}

titleCase("I'm a little tea pot");

// Challenge Complete