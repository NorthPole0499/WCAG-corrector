export default function standard_4_1_2 () {
    document.querySelectorAll("button, a").forEach(e => {
    if (!e.textContent.trim()) {
        e.setAttribute("aria-label", "Интерактивный элемент");
    }});
}