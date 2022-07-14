"use strict";

const isSubSequence = (str1, str2) => {
  let strPointer1 = 0;
  let strPointer2 = 0;

  if (!str1) {
    return true;
  }

  while (strPointer2 < str2.length) {
    if (str2[strPointer2] === str1[strPointer1]) {
      strPointer1++;
    }
    if (strPointer1 === str1.length) {
      return true;
    }
    strPointer2++;
  }

  return false;
};

console.log(isSubSequence("awds", "sdfwfsefdsdfsv"));
