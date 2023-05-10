function factorialize(num) {

  let temp = 1;

  for (let i = num; i > 0; i--) {
      temp = temp *= i;
  }

  //console.log(temp)
  return temp;
}

factorialize(5);