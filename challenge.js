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

var longestCommonPrefix = function (strs) {
   //
   let prefix = strs[0];
   for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) != 0) {
         prefix = prefix.substring(0, prefix.length - 1);
      }
   }
   return prefix;
};

// console.log(longestCommonPrefix(["aba", "abac", "abxacca"]));

const depthFirstPrint = (graph, source) => {
   const stack = [source];
   while (stack.length > 0) {
      const current = stack.pop();
      console.log(current);

      for (let neighbor of graph[current]) {
         stack.push(neighbor);
      }
   }
};
// Adjacency list
const graph = {
   a: ["b", "c"],
   b: ["d"],
   c: ["e"],
   d: ["f"],
   e: [],
   f: [],
};
// depthFirstPrint(graph, "a");

// linked listed looool

class LinkedList {
   constructor(head) {
      this.head = null;
   }
   insertFirst(data) {
      let increment = 0;
      let newNode = new Node(data, this.head);
      this.head = newNode;
      increment++;
   }
   displayNodes() {
      let node = this.head;
      while (node.next != null) {
         console.log(node);
         node = node.next;
      }
   }
}

class Node {
   constructor(data, next) {
      this.data = data;
      this.next = next;
   }
}

const ll = new LinkedList();
ll.insertFirst("100");
ll.insertFirst("200");
ll.insertFirst("300");
ll.insertFirst("400");
ll.insertFirst("500");
// console.log(ll);
// ll.displayNodes();
//
//
//
//
//
//
//

var numRows = 7;
var array = [];

for (var i = 0; i < numRows; i++) {
   var row = [];
   for (var j = 0; j <= i; j++) {
      row.push(1);
   }
   array.push(row);
}

console.log(array);
