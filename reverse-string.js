const str = "I love Bangladesh";

function reverseString(str) {
  let reverse = "";

  for (const letter of str) {
    reverse = letter + reverse;
  }
  //   for (let i = 0; i < str.length; i++) {
  //     reverse = str[i] + reverse;
  //   }
  return reverse;
}

console.log(reverseString(str));

const reverseStr = str.split("").reverse().join("");

console.log(reverseStr);

const arr = [1, 2, 3, 4, 5, 6];

const reverseArr = arr.reverse();

console.log(reverseArr);

//-----------

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rev = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  rev.push(arr2[i]);
}
console.log(rev);

//------------
function reverseArray(arr) {
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

console.log(reverseArray([12, 12, 34, 567]));
