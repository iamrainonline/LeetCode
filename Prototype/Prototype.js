// 'person constructor, before es15'
function Person() {
   this.name = "jack";
}

// equivalent with this, es15
class Person {
   constructor() {
      this.name = "jack";
   }
}
// Every method that I attach to this Person class,
// will be available for every instantiated person.
Person.prototype.sayHello = function () {
   console.log("Hello");
};

const p = new Person();
console.log(p.name, p.sayHello());

// Cu getPrototypeOf sau setPrototypeOf ( sau instanceof )
// verifici daca metoda apartine functiei sau clasei respective.
