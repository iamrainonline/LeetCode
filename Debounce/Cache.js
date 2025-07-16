const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    console.log(cache, "cache");
    const result = fn(...args);
    console.log(result, " result ");
    cache[args] = result;
    return result;
  };
};

const ridiculousSlowFunc = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i === num) {
      return i;
    }
  }
};

const fastFunction = memoize(ridiculousSlowFunc);

console.time();
console.log(fastFunction(4000000000));
console.timeEnd();
