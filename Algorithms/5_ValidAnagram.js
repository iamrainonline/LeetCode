const validAnagram = (s, t) => {
  let hashmap = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    hashmap[letter] ? hashmap[letter]++ : (hashmap[letter] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    hashmap[letter] ? hashmap[letter]-- : (hashmap[letter] = -1);
  }
  let count = Object.values(hashmap);
  let test = [];
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      test.push(count[i]);
    }
  }
  return test.length > 0 ? false : true;
};

console.log(validAnagram("radar", "radra"));
