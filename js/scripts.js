function toggleTheme() {
    var styleSheet = document.getElementById('styleSheet');
    if (styleSheet.getAttribute('href') === '/css/color-style-light.css') {
        styleSheet.href = '/css/color-style-dark.css';
    } else {
        styleSheet.href = '/css/color-style-light.css';
    }
}

"use strict"
window.onload = function() {
    const parallax = document.querySelector('.parallax');

    if(parallax){
        const content = document.querySelector('.parallax__container');
        const bgl1 = document.querySelector('.images-parallax__bgl1');
        const bgm = document.querySelector('.images-parallax__bgm');
        const bgl2 = document.querySelector('.images-parallax__bgl2');

        //Коэффициенты
        const forbgl1 = 10;
        const forbgm = 40;
        const forbgl2 = 20;

        //Скорость анимации
        const speed = 0.05;

        //Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Передаём стили
            bgl1.style.cssText = `transform: translate(${positionX / forbgl1}%, ${positionY / forbgl1}%);`;
            bgm.style.cssText = `transform: translate(${positionX / forbgm}%, ${positionY / forbgm}%);`;
            bgl2.style.cssText = `transform: translate(${positionX / forbgl2}%, ${positionY / forbgl2}%);`;
            
            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function(e) {
            //Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            //Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }
}