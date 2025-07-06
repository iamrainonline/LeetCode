const user = {
  name: "Cristian",
  normalFunc: function () {
    console.log("normal:", this.name);
  },
  arrowFunc: () => {
    console.log("arrow:", this.name);
  },
};

// user.normalFunc(); // linia 1
// user.arrowFunc(); // linia 2

// class Person {
//   constructor() {
//     this.name = "bob";
//   }
//   sayHello() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// }

// const p = new Person();
// p.sayHello();

// let nums = [1, 2, 3];

let counter = 0;
const getData = () => {
  console.log("fetchin data", counter++);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);
