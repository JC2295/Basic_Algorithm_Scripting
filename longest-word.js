function findLongestWordLength(str) {

  let regex = /\w+/ig;

  let longest = 0;

  let words = str.match(regex);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
    else {
      continue;
    }

  }

  //console.log(words);

  //console.log(words.length);

  //console.log(longest);

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");