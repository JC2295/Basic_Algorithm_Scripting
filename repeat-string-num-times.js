function repeatStringNumTimes(str, num) {

  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(str);
  }

  let string = arr.join("")

  console.log(string);

  return string;
}

repeatStringNumTimes("abc", 3);