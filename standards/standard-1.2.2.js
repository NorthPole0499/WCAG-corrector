window.standard_1_2_2 = function () {
    document.querySelectorAll("video:not([controlslist])").forEach(e => {
    e.setAttribute("controls", "");
    const track = document.createElement("track");
    track.kind = "subtitles";
    track.label = "Русские субтитры";
    track.srclang = "ru";
    e.appendChild(track);});
}