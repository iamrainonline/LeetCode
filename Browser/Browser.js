const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);

// add items to localstorage
const myObj = {
  name: "babic",
  ag: 34,
};

const myArray = ["1", "2", "3"];

sessionStorage.setItem("myStorage", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("myStorage"));
console.log(mySessionData);
