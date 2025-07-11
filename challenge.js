function createCounter() {
  let count = 0; // Variabilă "privată"

  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

// const counter = createCounter();
// console.log(counter);
// // NU pot accesa count direct!
// console.log(counter.count); // undefined
// counter.count = 1000; // Nu afectează count-ul real
// Memoization or a "Cache"

const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
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
fastFunction(200000000);

// console.time();
// console.log(ridiculousSlowFunc(3000000000));
// console.timeEnd();

// console.time();
// console.log(ridiculousSlowFunc(3000000000));
// console.timeEnd();
