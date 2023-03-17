const arr = [12, 23, 43, 54, 52, 154, 761, 12, 67];

function secondMaxElement(arr) {
  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

console.log(secondMaxElement(arr));
