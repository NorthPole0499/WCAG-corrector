window.standard_4_1_2 = function () {
    document.querySelectorAll("button, a").forEach(e => {
    if (!e.textContent.trim()) {
        e.setAttribute("aria-label", "Интерактивный элемент");
    }});
}