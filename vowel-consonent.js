const arr = [
  "a",
  "s",
  "d",
  "f",
  "q",
  "w",
  "e",
  "r",
  "t",
  "Z",
  "X",
  "C",
  "U",
  "I",
  "O",
  "P",
];
let vowel = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes("a" || "e" || "i" || "o" || "u")) {
    vowel.push(arr[i]);
  }
}
// for (const element of arr) {
//   if (element.includes("a" || "e" || "i" || "o" || "u")) {
//     vowel.push(element);
//   }
// }
console.log(vowel);
