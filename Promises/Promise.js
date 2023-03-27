const firstNum = new Promise((resolve, reject) => {
   resolve(3);
});
const secondNum = new Promise((resolve, reject) => {
   resolve(6);
});

const total = Promise.all([firstNum, secondNum]).then((res) => {
   console.log(res[0] + res[1]);
});

// No need to use .then on promises if you decide to use
// Promise.all().   This replaces the .then() on singple promises
