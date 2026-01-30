window.standard_3_1_1 = function () {
    const title = document.title || "";
    const isEnglish = /^[A-Za-z0-9\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/.test(title);

    document.documentElement.lang = isEnglish ? "en" : "ru";
}

