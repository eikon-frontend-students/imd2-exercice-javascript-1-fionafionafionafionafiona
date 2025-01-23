var changeColorBox = document.querySelector(".change-color");

function changeColor() {
  changeColorBox.classList.toggle("is-active");
}

changeColorBox.addEventListener("click", changeColor);

//
var toggleColorBox = document.querySelector(".toggle-color");

function toggleColor() {
  toggleColorBox.classList.toggle("is-active");
}

toggleColorBox.addEventListener("click", toggleColor);

//
var triggerBox = document.querySelector(".trigger");
var targetBox = document.querySelector(".target");
function trigger() {
  targetBox.classList.toggle("is-active");
}

triggerBox.addEventListener("click", trigger);

//
var triggerAllBox = document.querySelector(".trigger-all");
function triggerAll() {
  changeColorBox.classList.toggle("is-active");
  toggleColorBox.classList.toggle("is-active");
}

triggerAllBox.addEventListener("click", triggerAll);

//
var triggerAllSelfBox = document.querySelector(".trigger-all-self");
function triggerAllSelf() {
  triggerAllSelfBox.classList.toggle("is-active");
  changeColorBox.classList.toggle("is-active");
  toggleColorBox.classList.toggle("is-active");
}

triggerAllSelfBox.addEventListener("click", triggerAllSelf);
