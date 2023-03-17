function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// ----------------------

function recursiveFactorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

console.log('hello'[1]);
