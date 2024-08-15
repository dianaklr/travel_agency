const track = document.querySelector('.slider__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

let currentSlide = 0;

function updateSlidePosition() {
    track.style.transform = 'translateX(-' + (slideWidth + 20) * currentSlide + 'px)';
}

nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlidePosition();
    } else {
        currentSlide = 0;
        updateSlidePosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    } else {
        currentSlide = slides.length - 1;
        updateSlidePosition();
    }
});