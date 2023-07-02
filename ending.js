function confirmEnding(str, target) {

  let pattern = new RegExp(`${target}\$`, "g");

  if(str.match(pattern)){
    return true;
  }
  else{
    return false;
  }
 
}

console.log(confirmEnding("Bastian", "n"));

//Challenge Complete