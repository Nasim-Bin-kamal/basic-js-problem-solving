//nth element in a fibonacci series

function fiboNthElement(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return fiboNthElement(n - 1) + fiboNthElement(n - 2);
}

console.log(fiboNthElement(5));
console.log(fiboNthElement(10));

//fibonacci series by recursion

function fibonacciSeries(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }

  const series = fibonacciSeries(n - 1);
  series[n] = series[n - 1] + series[n - 2];
  return series;
}

console.log(fibonacciSeries(10));
