/**
 * @param {string} url
 */
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}
/**
 * Skrypt ładuje pełne zdjęcia po najechaniu
 */
export function preloadFullLytebox() {
    const lyteElements = document.querySelectorAll('main a[rel]');
    lyteElements.forEach((e) => {
        // @ts-ignore
        e.addEventListener('mouseover', () => preloadImage(e.href));
    });
}
