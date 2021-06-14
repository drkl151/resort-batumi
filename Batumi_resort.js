const offset = 100;
const scrollUp = document.querySelector('.scroll_up');
const scrollUpSvgPath = document.querySelector('.scroll_up-svg_path');
const pathLength = scrollUpSvgPath.getTotalLength();

console.log(pathLength);

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transiton = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    console.log(dashoffset);

    if (dashoffset === 0) {
        scrollUp.classList.add("scroll_bottom");
    } else { scrollUp.classList.remove("scroll_bottom"); }
};




//onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
    } else {
        scrollUp.classList.remove('scroll-up--active');
    }
});

//click scrollUp
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
