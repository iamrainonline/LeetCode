function diagonalDifference(arr) {
  // Write your code here
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(diagonal1 - diagonal2);
}

// traverse 2D Array
// Example:
/* 
  [
   [0,1,2,3],
   [4,5,6,7],
   [A,B,C,D],
   [E,F,G,H],
  ]

*/
// Log only the diagonal of the array
// example output:

// 0
//  5
//   C
//     H

// and reverse

//       3
//     6
//   B
// E
