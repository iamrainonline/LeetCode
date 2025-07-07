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

class Person {
  constructor() {
    this.name = "bob";
  }
  sayHello() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
}

const p = new Person();
p.sayHello();

//

let myAge = {
  age: 30,
};
const ceva = {
  name: "babic",
  saySomething() {
    return () => {
      console.log(this);
    };
  },
};

ceva.saySomething()();
