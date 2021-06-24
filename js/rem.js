document.addEventListener('DOMContentLoaded', function () {
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    html.style.fontSize = windowWidth / 10 + 'px';
}, false);

window.onresize = function () {
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    html.style.fontSize = windowWidth / 10 + 'px';
}