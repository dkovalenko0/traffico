import "./styles/style.scss";
import $ from "jquery";
import "slick-carousel";

const li = document.querySelectorAll(".question");
// const hiddenBlock = document.querySelector(".answer");

li.forEach((el) => {
  el.onclick = function () {
    this.classList.toggle("active");
    // this.classList.toggle("showed-block");
  };
});

$(".slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  centerMode: true,
  nextArrow: `<img src="./images/slider-arrow.svg" alt="arrow" class="arrows next-arrow" />`,
  prevArrow: `<img src="./images/slider-arrow.svg" alt="arrow" class="arrows prev-arrow" />`,
});
