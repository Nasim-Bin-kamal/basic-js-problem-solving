let factorial = 1;

for (let i = 1; i <= 10; i++) {
  factorial = factorial * i;
}

console.log(factorial);

function nthFactorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}

console.log(nthFactorial(5));
console.log(nthFactorial(7));

//-----------------------------------------------

function factorial2(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial2(8));
