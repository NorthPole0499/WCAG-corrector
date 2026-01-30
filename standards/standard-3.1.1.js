export default function standard_3_1_1 () {
    const title = document.title || "";
    const isEnglish = /^[A-Za-z0-9\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/.test(title);

    document.documentElement.lang = isEnglish ? "en" : "ru";
}

