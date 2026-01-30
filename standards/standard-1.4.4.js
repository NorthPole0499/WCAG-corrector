export default function standard_1_4_4 () {
    const style = document.createElement("style");
    style.textContent = `
        html {
            font-size: 125%;
        }
        * {
            max-width: none !important;
        }`;

    document.head.appendChild(style);
}