class Person {
   constructor() {
      this.name = "bob";
   }
   sayHello() {
      const that = this;
      setTimeout(function () {
         console.log(that.name);
      }, 1000);
   }
}

const p = new Person();
p.sayHello();
