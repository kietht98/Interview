const myMemoize = (fn, context) => {
  const res = {};
  return function (args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
};

const clumsyProduct = (num1, num2) => {
  for (let index = 0; index < 100000; index++) {}
  return num1 * num2;
};

const memoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("first call");
console.log(memoizeClumsyProduct(123, 456));
console.timeEnd("first call");

console.time("Second call");
console.log(memoizeClumsyProduct(123, 456));
console.timeEnd("Second call");
