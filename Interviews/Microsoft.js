function solutions(s) {
   let hashmap = {};
   let count = 0;
   for (let i = 0; i < s.length; i++) {
      hashmap[i] = s[i] + s[i + 1];
   }

   console.log(hashmap);
}

// solutions("aakmaakmakda");

let A = ["a", "b", "c", "d", "e", "f", "g", "h"];

function solution(A) {
   let j = A.length - 1;
   for (let i = 0; i < A.length; i++) {
      console.log(A[i], A[j]);
      j--;
   }
}
