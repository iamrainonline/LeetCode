// O(n)
var reverseString = function (s) {
   let reversed = [];
   for (let i = s.length - 1; i >= 0; i--) {
      reversed.push(s[i]);
   }
   return reversed;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

// O(1)

var reverseString = function (s) {
   return s.reverse().join("");
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
