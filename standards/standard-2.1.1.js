window.standard_2_1_1 = function () {
    document.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        document.body.classList.add("keyboard-nav");
    }});
}