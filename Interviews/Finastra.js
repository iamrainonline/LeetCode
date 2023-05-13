function solution(S, C) {
   let totalCost = 0;

   for (let i = 0; i < S.length; i++) {
      if (S[i] === S[i + 1]) {
         totalCost += Math.min(C[i], C[i + 1]);
      }
   }
   return totalCost;
}

console.log(solution("abccbd", [0, 1, 2, 3, 4, 5]));
