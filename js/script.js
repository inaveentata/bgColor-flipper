'use strict';

const colorArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b','c','d','e','f']

const btn = document.querySelector('.btn');
const bgColor = document.querySelector('.color');


function getRandomNum() {
    const num = Math.floor(Math.random() * colorArray.length);
    return num;
}

function randomColor() {
    const hexaLetter1 = colorArray[getRandomNum()]
    const hexaLetter2 = colorArray[getRandomNum()];
    const hexaLetter3 = colorArray[getRandomNum()];
    const hexaLetter4 = colorArray[getRandomNum()];
    const hexaLetter5 = colorArray[getRandomNum()];
    const hexaLetter6 = colorArray[getRandomNum()];
    
    const hex = hexaLetter1 + hexaLetter2 + hexaLetter3 + hexaLetter4 + hexaLetter5 + hexaLetter6;

    document.body.style.backgroundColor = `#${hex}`;
    bgColor.textContent = `#${hex}`;
}

btn.addEventListener('click', randomColor)