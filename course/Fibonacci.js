const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [lastIndex, last] = array.slice(-2);
    array.push(lastIndex + last);
    num -= 1;
  }
  return array;
};

fibonacci(12);

const fibonacciRecursion = (num, array = [0, 1]) => {
  if (num <= 2) return array;
  const [lastIndex, last] = array.slice(-2);
  return fibonacciRecursion(num - 1, [...array, lastIndex + last]);
};
