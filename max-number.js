function max(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(max(12, 15, 10));
console.log(max(22, 15, 10));
