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

// console.log(isValid("{[]}"));
const input = document.querySelector("#mybtn");

let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    console.log("Fetching..");
    fetchData("some random api");
  }, 1000);
};

// input.addEventListener("onkeypress", onInput);

// find duplicates and return []

const cTree = (num) => {
  for (let i = 1; i <= num; i++) {
    const spaces = " ".repeat(num - i);
    const stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  // Add a little trunk
  const trunkSpaces = " ".repeat(num - 1);
  console.log(trunkSpaces + "|");
};

// cTree(3);

// let var in loop

for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(() => {
      // console.log(x);
    }, 1000);
  })(i);
}

for (var i = 0; i < 3; i++) {
  // setTimeout(console.log.bind(null, i), 1000);
}

// cartesian product

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

const cartesian = (arg1, arg2) => {
  let total = [];
  for (let i = 0; i < arg1.length; i++) {
    for (let j = 0; j < arg2.length; j++) {
      total.push(arg1[i] + arg2[j]);
    }
  }
  return total;
};

console.log(cartesian(num1, num2));
