'use srict';

const colors = ['blue', 'green', '#333fae', 'rgb(223, 23, 122)', 'rgba(122, 121, 225, 0.4)']


const btn = document.querySelector('.btn');
const bgColor = document.querySelector('.color');


function getRandomNum() {
    const num = Math.floor(Math.random() * colors.length);
    return num;
}


btn.addEventListener('click', function () {
    const color = colors[getRandomNum()]

    document.body.style.backgroundColor = `${color}`
    bgColor.textContent = `${color}`
})