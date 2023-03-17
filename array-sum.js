const n = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (i = 0; i < n.length; i++) {
  sum = sum + n[i];
}

console.log(sum);

function arraySum(arr) {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
}

console.log(arraySum([10, 20, 30, 45, 55]));
