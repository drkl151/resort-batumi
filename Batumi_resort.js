const offset = 100;
const scrollUp = document.querySelector(".scroll_up");
const scrollUpSvgPath = document.querySelector(".scroll_up-svg_path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;

  //color the arrow blue when the scroll is at the very bottom
  if (dashoffset.toFixed() === "0" || dashoffset.toFixed() === "-0") {
    scrollUp.style.color = "rgb(49, 175, 197)";
  } else {
    scrollUp.style.color = "rgba(125, 128, 125, 0.555)";
  }
};

//onScroll event
window.addEventListener("scroll", () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

//click scrollUp and back to top of page
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
