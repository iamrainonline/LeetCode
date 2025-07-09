const users = {
  name: "Cristian",

  outerMethod: function () {
    console.log("outer:", this.name); // "Cristian"

    setTimeout(() => {
      console.log(this, "wow");
    });
  },
};

users.outerMethod();
