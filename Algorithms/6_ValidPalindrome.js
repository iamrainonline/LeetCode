var isPalindrome = function (s) {
   let word1 = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
   let word2 = "";
   for (let i = word1.length - 1; i >= 0; i--) {
      word2 += word1[i];
   }
   return word1 === word2 ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
