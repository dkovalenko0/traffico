import "./styles/style.scss";

const li = document.querySelectorAll(".question");
// const hiddenBlock = document.querySelector(".answer");

li.forEach((el) => {
  el.onclick = function () {
    this.classList.toggle("active");
    // this.classList.toggle("showed-block");
  };
});
