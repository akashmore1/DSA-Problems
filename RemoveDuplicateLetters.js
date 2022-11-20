"use strict";

var removeDuplicateLetters = function (s) {
  const uniqueS = [...new Set(s)];
  uniqueS.sort();

  const indexOfLetters = {};

  for (let i = 0; i < s.length; i++) {
    if (indexOfLetters[s[i]]) {
      indexOfLetters[s[i]].push(i);
    } else {
      indexOfLetters[s[i]] = [i];
    }
  }

  console.log(indexOfLetters);

  const uniqueIndexObj = {};
  let temp;

  for (let i = uniqueS.length - 1; i >= 0; i--) {
    uniqueIndexObj[uniqueS[i]] = indexOfLetters[uniqueS[i]][-1];
  }
  console.log(uniqueIndexObj);
};
