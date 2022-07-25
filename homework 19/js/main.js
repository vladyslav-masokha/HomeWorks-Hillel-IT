'use strict';

// Slider
(() => {
	let offset = 0;
	const sliderLineEl = document.querySelector('.slider__line');
	const onPrevEl = document.querySelector('.prev');
	const onNextEl = document.querySelector('.next');

	onNextEl.addEventListener('click', () => {
		offset += 330;
		if (offset > 1320) {
			offset = 0;
		}
		sliderLineEl.style.left = -offset + 'px';
		clearInterval(stopSlide);
		stopSlide = setInterval(nextSlide, 3000);
	});

	onPrevEl.addEventListener('click', () => {
		offset -= 330;
		if (offset < 0) {
			offset = 1320;
		}
		sliderLineEl.style.left = -offset + 'px';
		clearInterval(stopSlide);
		stopSlide = setInterval(nextSlide, 3000);
	});

	const nextSlide = () => {
		offset += 330;
		if (offset > 1320) {
			offset = 0;
		}
		sliderLineEl.style.left = -offset + 'px';
	};

	let stopSlide = setInterval(nextSlide, 3000);
})();

// Clock
function toDouble(num) {
	if (num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const clockImgElems = document.querySelectorAll('.clock img');

	function updateTime() {
		const newDate = new Date();
		const dateStr = `${newDate.getHours()}${newDate.getMinutes()}${newDate.getSeconds()}`;
		console.log(dateStr);

		for (let i = 0; i < clockImgElems.length; i++) {
			clockImgElems[i].src = 'images/clock/' + dateStr.charAt(i) + '.png';
		}
	}

	setInterval(updateTime, 1000);
});
