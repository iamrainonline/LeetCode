// longest common prefix

let words = ["xcarambol", "zcar", "ycarmangerie"];

const LCP = (words) => {
  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (words[i].indexOf(prefix) !== 0) {
      if (prefix.length === 0) {
        return "No prefix";
      }
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(LCP(words));
