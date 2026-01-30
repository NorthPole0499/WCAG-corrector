export default function standard_1_3_1 () {
    document.querySelectorAll("nav:not([role])").forEach(el => el.setAttribute("role", "navigation"));
    document.querySelectorAll("main:not([role])").forEach(el => el.setAttribute("role", "main"));
}