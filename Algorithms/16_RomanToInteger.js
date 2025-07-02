const romanToInt = (s) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];

    if (current < next) {
      total = total - current;
    } else {
      total = total + current;
    }
  }

  return total;
};

// Exemplu:
console.log(romanToInt("XIV")); // Output: 14
console.log(romanToInt("MCMXCIV")); // Output: 1994
