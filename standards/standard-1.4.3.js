export default function standard_1_4_3 () {
    const style = document.createElement("style");
    style.textContent = `
    body, p, span, a {
        color: #000 !important;
        background: #fff !important;
    }`;

    document.head.appendChild(style);
}