function mutation(arr) {

  let str1 = arr[0].toString();

  console.log(str1);

  let str2 = arr[1].toString();

  let trace = [];

  let check = [];

  for(let i = 0; i < str2.length; i++) {
      trace.push(0);
      check.push(1);
  }

  for(let i = 0; i < str1.length; i++){
    
    for(let j = 0; j < str2.length; j++){
      
      let pattern = new RegExp(`\[${str2[j]}\]`, "ig");

      if(str1[i].match(pattern)){
        trace[j] = 1;
      }
      else{
        continue;
      }

    }

  }

  let strace = trace.toString();

  let scheck  = check.toString();

  console.log(strace)

  console.log(scheck)

  if(scheck === strace){
    return true;
  }
  else{
    return false;
  }

}

mutation(["hello", "hey"]);
