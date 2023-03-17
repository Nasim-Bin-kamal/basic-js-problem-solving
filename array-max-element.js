const arr = [12, 23, 43, 54, 652, 154, 76, 12, 67];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (element > max) {
    max = element;
  }
}

console.log(max);

function maxElement(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxElement([1, 2, 34, 45, 56]));
console.log(maxElement([1, 2, 34, 35, 35, 45, 26]));

//--------------------------------------------------------------------

const arr2 = [12, 43, -49, 34, 87, 34, 2, 6, 82, 76];

function maxElement(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxElement(arr2));
