'use strict';

const winkFace = document.querySelector('.js__winkFace');
const head = document.querySelector('.js__head');
const smileyFace = document.querySelector('.js__face');

function handleClick(event) {
    smileyFace.classList.add('hidden');
    winkFace.classList.remove('hidden');
}

function handleHover(event) {
  
    smileyFace.classList.remove('hidden');
    winkFace.classList.add('hidden');
}

console.log(handleHover());

head.addEventListener('click', handleClick);

head.addEventListener('mouseleave', handleHover);

