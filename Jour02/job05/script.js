document.addEventListener("scroll", function () {
    const footer = document.querySelector("footer");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.offsetHeight - windowHeight;
    const scrollPercentage = scrollPosition / totalHeight;

    footer.style.backgroundColor = `rgb(${255 * scrollPercentage}, 0, ${
        255 * (1 - scrollPercentage)
    })`;
});
