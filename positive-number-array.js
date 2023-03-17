const arr = [-40, 56, 0, 1, -5, -6, 2, -4, 3, 4, -1, -2, 5, 6];

function positiveNumber(arr) {
  const positive = [];

  for (const element of arr) {
    if (element > 0) {
      positive.push(element);
    }
  }
  return positive;
}

console.log(positiveNumber(arr));

const positiveArr = arr.filter((n) => n > -1);
console.log(positiveArr);

const negativeArray = arr.filter((n) => n < 0);
console.log(negativeArray);
