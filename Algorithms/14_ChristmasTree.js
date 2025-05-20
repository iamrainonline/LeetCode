const cTree = (n) => {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
};

console.log(cTree(6));

// Create a christmas tree
// example:

//      #
//     ##
//    ###
//  #####
// ######
