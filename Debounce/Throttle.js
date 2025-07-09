const input = document.querySelector("input");

// THROTTLE - limitează frecvența de execuție
let lastExecution = 0;
const throttleInput = (event) => {
  const now = Date.now();
  const timeSinceLastExecution = now - lastExecution;

  console.log(`Au trecut ${timeSinceLastExecution}ms de la ultima execuție`);

  if (timeSinceLastExecution >= 3000) {
    console.log("SE EXECUTĂ!");
    lastExecution = now;
  } else {
    console.log("Prea devreme, se ignoră");
  }
};

input.addEventListener("keypress", throttleInput);
