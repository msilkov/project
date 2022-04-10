$(document).ready(function () {
	const menuToggle = document.querySelector(".toggle-menu");
	const mobMenu = document.querySelector(".menu-mobile");
	const bodyEl = document.body;
	//   gamburger click
	menuToggle.addEventListener("click", function () {
		this.classList.toggle("active");
		mobMenu.classList.toggle("active");
		bodyEl.classList.toggle("noscroll");
	});
	//   mobmenu click
	mobMenu.addEventListener("click", function () {
		this.classList.remove("active");
		menuToggle.classList.remove("active");
		bodyEl.classList.remove("noscroll");
	});
	//   resize close
	window.addEventListener("resize", function () {
		mobMenu.classList.remove("active");
		menuToggle.classList.remove("active");
		bodyEl.classList.remove("noscroll");
	});
	//   header bgc on scroll
	const fixMenu = document.querySelector(".fixed-menu");

	window.addEventListener("scroll", function () {
		if (window.screen.width >= 1366 && this.scrollY > 200) {
			fixMenu.classList.add("active");
		} else if (window.screen.width < 1366 && this.scrollY > 90) {
			fixMenu.classList.add("active");
		} else if (window.screen.width <= 1024 && this.scrollY > 90) {
			fixMenu.classList.add("active");
		} else if (window.screen.width <= 768 && this.scrollY > 45) {
			fixMenu.classList.add("active");
		} else if (window.screen.width <= 360 && this.scrollY > 30) {
			fixMenu.classList.add("active");
		} else {
			fixMenu.classList.remove("active");
		}
	});

	//-фильтрация проектов mixitup3
	let containerEl = document.querySelector("#portfolio-projects");

	let mixer = mixitup(containerEl, {
		animation: {
			enable: false,
			effectsIn: "fade translateY(-100%)",
			effectsOut: "fade translateY(-100%)",
			easing: "ease-in-out",
		},
	});
	// - выравниваем   ширину карточек при фильтрации
	const filterToggles = document.querySelectorAll(
		".section-portfolio__nav button"
	);
	// все кнопки-переключатели
	const portfolioSampleImg = document.querySelectorAll(
		".project-sample__img-wrapper"
	);

	// всe карточки  работ
	for (let i = 0; i < filterToggles.length; i++) {
		filterToggles[i].addEventListener("click", function () {
			if (i == 0) {
				for (let j = 0; j < 2; j++) {
					portfolioSampleImg[j].classList.add("img-wrapper-big");
				}
			} else {
				for (let j = 0; j < 2; j++) {
					portfolioSampleImg[j].classList.remove("img-wrapper-big");
				}
			}
		});
	}
});

// FORM PLACEHOLDER

const formInputs = document.querySelectorAll(".form__field");

for (let item of formInputs) {
	const thisPlaceholder = item.nextElementSibling;

	item.addEventListener("focus", function () {
		thisPlaceholder.classList.add("active");
	});
	item.addEventListener("blur", function () {
		if (item.value == "") {
			thisPlaceholder.classList.remove("active");
		}
	});
}
