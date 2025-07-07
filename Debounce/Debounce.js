const input = document.querySelector("input");

let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData("some random api");
  }, 1000);
};
input.addEventListener("onkeypress", onInput);
