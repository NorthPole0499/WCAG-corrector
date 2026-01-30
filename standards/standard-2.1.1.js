export default function standard_2_1_1 () {
    document.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        document.body.classList.add("keyboard-nav");
    }});
}