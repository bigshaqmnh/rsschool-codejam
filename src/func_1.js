module.exports = function sumOfOther(array) {
  let arrOfSum = [], count = 0;

  for (let i = 0; i < array.length; ++i) {
    count = 0;

    for (let j = 0; j < array.length; ++j) {
      if (array[i] !== array[j]) {
        count += array[j];
      }
    }

    arrOfSum.push(count);
  }

  return arrOfSum;
};