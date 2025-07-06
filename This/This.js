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
