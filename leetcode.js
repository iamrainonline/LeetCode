let words = ["calculator", "cal", "calmant", "calamar"];

let commonPrefix = (words) => {
  let prefix = words[0];
  for (let i = 1; i < words.length; i++) {
    while (prefix.indexOf(words[i]) != 0) {
      prefix.substring(0, words.length - 1);
    }
  }
  return prefix;
};

// commonPrefix(words);
