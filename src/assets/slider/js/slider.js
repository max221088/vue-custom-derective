const $bottNext = document.querySelector('.arrow.next');
const $bottPrev = document.querySelector('.arrow.prev');
const $sliderRow = document.querySelector('.slider-row');
const $slide = document.querySelectorAll('.slide');
const $navButton = document.querySelectorAll('.but');
let distance = 0;
let currentSlide = 0;
let elements = $slide.length;
let widthSlide = document.querySelector('.slider-container').offsetWidth;


$sliderRow.style.width = (widthSlide * elements + 100) + 'px';

$slide.forEach ( function (slide) {
    slide.style.width = widthSlide + 'px';
});

function move (x) {
    distance = x * widthSlide * (-1);
    $sliderRow.style.transform = 'translateX(' + distance + 'px)';
    
}

function navActiv (currentSlide) {
    $navButton[currentSlide].classList.toggle('active')
}

$bottNext.addEventListener('click', function(){
    navActiv(currentSlide);
    currentSlide++;
    if (currentSlide > (elements - 1) ) {currentSlide = 0}
    move (currentSlide);
    navActiv(currentSlide);
})

$bottPrev.addEventListener('click', function(){
    navActiv(currentSlide);
    currentSlide--;
    if (currentSlide < 0 ) {currentSlide = (elements - 1)}
    move (currentSlide);
    navActiv(currentSlide);
})

$navButton.forEach (function (el) {
    el.addEventListener('click', function () {
        navActiv(currentSlide);
        currentSlide = this.getAttribute('data-position') -1;
        move(currentSlide);
        navActiv(currentSlide);
    });
})