function truncateString(str, num) {

  if (str.length > num) {

    let str2 = str.slice(0, num);

    str2 = str2 + "..."

    console.log(str2);

    return str2;
  }
  else {

    return str;

  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Challenge Complete