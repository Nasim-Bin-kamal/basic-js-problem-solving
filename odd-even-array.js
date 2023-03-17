const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddArray(arr) {
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      odd.push(i);
    }
  }
  return odd;
}

console.log(oddArray(arr));

function evenArray(arr) {
  const even = [];
  for (const i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
}

console.log(evenArray(arr));

//es6 method

const arrayOdd = arr.filter((n) => n % 2 !== 0);
console.log(arrayOdd);

const arrayEven = arr.filter((n) => n % 2 === 0);
console.log(arrayEven);
