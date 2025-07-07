const user = {
  name: "Cristian",
  sayHello() {
    setTimeout(() => {
      console.log(this.name, "ba");
    }, 1000);
  },

  normalFunc: function () {
    console.log("normal:", this.name);
  },

  arrowFunc: () => {
    console.log("arrow:", this.name);
  },
};

user.normalFunc();
user.arrowFunc();
