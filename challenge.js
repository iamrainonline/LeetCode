const names = {
  name: "vasile",
};

function info(age) {
  this.age = age = 30;
  console.log(this.name, this.age);
  console.log(this);
}

// info.call(names);

const myName = {
  name: "ion",
};

class Person {
  constructor() {
    this.name = "bob";
  }

  sayHello() {
    setTimeout(function () {
      // console.log(this);
    });
  }
}

const p = new Person();
p.sayHello();

function outer() {
  var num = 1;
  function inner() {
    console.log(num++);
  }
  return inner;
}

var inner = outer();
// inner();
// inner();
outer()();
outer()();
outer()();
