let boxes = document.querySelector(".boxes");
let box = document.querySelector(".box");

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.matches(".box")) {
    console.log("ai dat click pe cutitua mica");
  }
});
