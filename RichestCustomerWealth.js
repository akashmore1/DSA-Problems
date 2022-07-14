"use strict";

var maximumWealth = function (accounts) {
  //     Brute force
  let maxWealth = 0;
  let sum = 0;

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }
    maxWealth = Math.max(maxWealth, sum);
    sum = 0;
  }

  return maxWealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
