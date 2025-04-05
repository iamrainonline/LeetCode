class Person {
  constructor() {
    this.name = "bob";
  }
  sayHello() {
    const that = this;
    return function plm() {
      console.log(that.name);
    };
  }
}

const p = new Person();
const f = p.sayHello();
