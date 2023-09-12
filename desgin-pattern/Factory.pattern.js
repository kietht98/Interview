const myMemoize = (fn, context) => {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
};

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;
};

const memoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizeClumsyProduct(9476, 8888));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizeClumsyProduct(9476, 8888));
console.timeEnd("Second call");
