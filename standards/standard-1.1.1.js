window.standard_1_1_1 = function () {
    document.querySelectorAll("img:not([alt])").forEach(img => {
    img.alt = img.title || "";});
}