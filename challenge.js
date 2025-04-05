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

// linked listed looool

// var commonChars = function (words) {
//   //
//   let mainWord = words[0];
//   let memory = [];
//   for (let i = 1; i < words.length; i++) {
//     let x = false;
//     for (let j = 0; j < mainWord.length; j++) {
//       if (words[i].includes(mainWord[j])) {
//         x = true;
//       }
//       memory.push(mainWord[j]);
//     }
//   }
//   return memory;
// };

// console.log(commonChars(["bella", "label", "roller"]));
