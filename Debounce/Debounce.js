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

//

let counter = 0;
const getData = () => {
  console.log("fetchin data", counter++);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = doSomeMagic(getData, 300);
