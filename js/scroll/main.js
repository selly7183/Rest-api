"use strict";

document.addEventListener("scroll", () => {
	const imgAni = document.querySelectorAll(".img-ani");
	imgAni.forEach((item) => {
		if (item.offsetTop - 500 < document.documentElement.scrollTop) {
			item.classList.add("img-aniload");
		}
	});
});

// window.onscroll = function () {
// 	windowScroll();
// 	window.onscroll = function () {
// 		const scrollTop = document.documentElement.scrollTop;
// 		if (scrollTop > 50) {
// 			windowScroll();
// 		}
// 	};
// };
// function windowScroll() {
// 	const imgAni = document.querySelectorAll(".img-ani");
// 	imgAni.forEach((item) => {
// 		if (item.offsetTop - 500 < document.documentElement.scrollTop) {
// 			item.classList.add("img-aniload");
// 		}
// 	});
// }
