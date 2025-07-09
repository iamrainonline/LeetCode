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

const counter = createCounter();
console.log(counter);
// NU pot accesa count direct!
console.log(counter.count); // undefined
counter.count = 1000; // Nu afectează count-ul real
