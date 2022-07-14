var mostWordsFound = function (sentences) {
  //     Brute-force approach
  let stringLength = 0;
  let maxWords = 0;
  let count = 1;

  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (sentences[i][j] === " ") {
        count++;
      }
    }
    maxWords = Math.max(maxWords, count);
    count = 1;
  }

  return maxWords;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
