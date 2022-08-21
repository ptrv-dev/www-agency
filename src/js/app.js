// Header burger adaptive
const burgerButton = document.querySelector("button.header__burger");
const nav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", (e) => {
	e.preventDefault();
	burgerButton.classList.toggle("header__burger_active");
	nav.classList.toggle("nav_active");
	document.body.classList.toggle("no-scroll");
});

// Section Reviews Slider

const sliderSlides = document.querySelectorAll(".slider-reviews__slide");

const initSliderNav = () => {
	document.querySelector(".slider-reviews-nav").innerHTML =
		'<button class="slider-reviews-nav__button"></button>'.repeat(
			sliderSlides.length
		);
};
initSliderNav();

let currentSlide = 0;

const sliderButtons = document.querySelectorAll(
	"button.slider-reviews-nav__button"
);

const moveSlider = () => {
	sliderSlides.forEach((element) => {
		element.style.transform = `translateX(-${currentSlide * 100}%)`;
	});
};

const sliderNav = () => {
	sliderButtons.forEach((el) => {
		el.classList.remove("slider-reviews-nav__button_active");
	});
	sliderButtons[currentSlide].classList.add(
		"slider-reviews-nav__button_active"
	);
};
sliderNav();

sliderButtons.forEach((element, key) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		currentSlide = key;
		moveSlider();
		sliderNav();
	});
});

const sliderWrapper = document.querySelector(".slider-reviews__wrapper");

let startX = 0;
let endX = 0;

const swipeSlider = () => {
	if(startX < endX) { // left
		currentSlide <= 0 ? currentSlide = 0 : currentSlide--;
	} else { // right
		currentSlide >= sliderSlides.length - 1 ? currentSlide = (sliderSlides.length - 1) : currentSlide++;
	}
	moveSlider();
	sliderNav();
}

sliderWrapper.addEventListener('touchstart', (event) => {
	startX = event.changedTouches[0].clientX;
});
sliderWrapper.addEventListener('touchend', (event) => {
	endX = event.changedTouches[0].clientX;
	swipeSlider();
});