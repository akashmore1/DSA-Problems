"use strict";

// Write a functions which accepts a string and returns length of longest substring with all distinct characters.

// sliding window
function findLongestSubstring(str) {
  const elementSet = new Set();
  let subStringLength;
  let i = 0;
  let j = 0;
  while (j < str.length) {
    if (!elementSet.has(str[j])) {
      elementSet.add(str[j]);
      j++;
    } else if (elementSet.has(str[j])) {
      subStringLength = elementSet.size;
      elementSet.delete(str[i]);
      i++;
    }
  }
  return subStringLength;
}

console.log(findLongestSubstring("akash"));
