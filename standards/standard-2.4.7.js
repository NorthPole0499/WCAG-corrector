window.standard_2_4_7 = function () {
    const style = document.createElement("style");
    style.textContent = `
        *:focus {
            outline: 3px solid #ffbf47 !important;
            outline-offset: 2px !important;
        }`;

    document.head.appendChild(style);
}