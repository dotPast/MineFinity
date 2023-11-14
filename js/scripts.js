function toggleTheme() {
    var styleSheet = document.getElementById('styleSheet');
    if (styleSheet.getAttribute('href') === '/css/color-style-light.css') {
        styleSheet.href = '/css/color-style-dark.css';
    } else {
        styleSheet.href = '/css/color-style-light.css';
    }
}
