function truncateString(str, num) {

  let arr = [];

  arr = str.split("");

  if (arr.length > num) {

    arr.splice((num - 1), (str.length - num - 1));
  }

  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);