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
    const result = fn(...args);
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

// console.time();
// console.log(fastFunction(3000000000));
// console.timeEnd();

var isValid = function (s) {
  const hashmap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (char of s) {
    if (char in hashmap) {
      stack.push(hashmap[char]);
    } else if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      return false;
    }
  }
};

console.log(isValid("{[]}"));
