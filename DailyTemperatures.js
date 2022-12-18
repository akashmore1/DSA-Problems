var dailyTemperatures = function (temperatures) {
  const answer = [];
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        answer.push(j - i);
        break;
      }

      if (j === temperatures.length - 1) {
        answer.push(0);
      }
    }
  }

  if (answer.length !== temperatures.length) {
    answer.push(0);
  }
  return answer;
};
