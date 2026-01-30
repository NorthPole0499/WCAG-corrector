export default function standard_1_1_1 () {
    document.querySelectorAll("img:not([alt])").forEach(img => {
    img.alt = img.title || "";});
}