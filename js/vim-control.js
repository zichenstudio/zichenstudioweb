document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (key === 'k') {
        window.scrollBy(0, -100);
    };
    if (key === 'j') {
        window.scrollBy(0, 100);
    };
    if (key === 'h') {
        window.scrollBy(-100, 0);
    };
    if (key === 'l') {
        window.scrollBy(100, 0);
    };
});
