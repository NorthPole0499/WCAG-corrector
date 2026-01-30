window.standard_1_4_2 = function () {
    const mediaElements = document.querySelectorAll("audio, video");

    mediaElements.forEach(media => {
        if (!media.paused) {
            media.pause();
        }
    });
}