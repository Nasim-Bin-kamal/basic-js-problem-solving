const arr = [12, 23, 43, 54, 52, 154, 76, 12, 67, 23, 43];

const unique = [];

for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}
console.log(unique);

const unique2 = [];
for (const element of arr) {
  if (unique2.indexOf(element) === -1) {
    unique2.push(element);
  }
}

console.log(unique2.sort((a, b) => a - b));

//------------------------------------------------------------------

const arr2 = [1, 2, 3, 4, 2, 5, 2, 5, 4, 8, 2, 3, 1, 6, 9];

function removeDuplicate(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicate(arr2));
