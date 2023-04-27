function findLongestWordLength(str) {

// let regex = /\w+/ig;

  let longest = 0;

  //let words = str.match(regex);

  let words = str.split();
  
/*
  for(let i = 0; i < words.length; i++)
  {
      if(words[i].length > words[i + 1].length)
      {
        longest = words[i].length;
      }
      else if (words[i + 1].length > words[i].length)
      {
        longest = words[i + 1].length;
      }
      else
      {
        continue;
      }
  }
*/
  console.log(words);
  
  console.log(words.length);
  
  //console.log(longest);
  
  //return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");