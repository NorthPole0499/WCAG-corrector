export default function standard_1_4_2 () {
    const mediaElements = document.querySelectorAll("audio, video");

    mediaElements.forEach(media => {
        if (!media.paused) {
            media.pause();
        }
    });
}