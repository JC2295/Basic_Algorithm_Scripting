function reverseString(str) {
    let rev = str.split("").reverse().join("");
    //console.log(rev);
    return rev;
  }
  reverseString("hello");