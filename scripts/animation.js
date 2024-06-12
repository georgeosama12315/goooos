
const hidingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle('show', entry.isIntersecting);
	});
});

// Observe elements with class 'hidden' and apply transition delay
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element, i) => {
	element.style.transitionDelay = `${i * 200}ms`;
	hidingObserver.observe(element);
});

// Observe elements with class 'logo' without transition delay
const logoElements = document.querySelectorAll(".logo");
logoElements.forEach((element) => {
	hidingObserver.observe(element);
});
