// function fib(count) {
//    let a = 0;
//    let b = 1;

//    for (let i = 0; i < count; i++) {
//       let temp = b;
//       b = a + b;
//       a = temp;
//       console.log(temp);
//    }
//    return b;
// }

// console.log(fib(4));

// let mystr = "babic";

// console.log(
//    mystr.replace(/['a-z']/gi, function (x) {
//       console.log(x);
//    })
// );

// function likeOrDislike(buttons) {
//    let state = "Nothing";

//    for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i] === state) {
//          state = "Nothing";
//       } else {
//          state = buttons[i];
//       }
//    }
//    return state;
// }

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// const myObj = {
//    name: "babic",
//    ag: 34,
// };
// const myArray = ["1", "2", "3"];
// sessionStorage.setItem("myStorage", JSON.stringify(myObj));
// const mySessionData = JSON.parse(sessionStorage.getItem("myStorage"));
// console.log(mySessionData);

// function pascals(numRows) {
//    if (numRows === 0) return [];
//    if (numRows === 1) return [[1]];
//    let result = [];
//    for (let row = 1; row <= numRows; row++) {
//       let arr = [];
//       for (let col = 0; col < row; col++) {
//          if (col === 0 || col === row - 1) {
//             arr.push(1);
//          }
//          //...
//       }
//       result.push(arr);
//    }
//    return result;
// }
// console.log(pascals(5));

// const names = ["babic", "babicule"];

// const findWord = (e) => {
//    let prefix = e[0];
//    for (let i = 1; i < e.length; i++) {
//       while (e[i].indexOf(prefix) != 0) {
//          prefix = prefix.substring(0, prefix.length - 1);
//       }
//    }
// };
// console.log(findWord(names));
