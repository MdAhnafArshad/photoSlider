// global variables
let indexCounter = 0;
const images = [
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
    'images/img-6.jpg',
]

const imgEL = document.getElementById('slider-img');

// DOM elements
const intervalId = setInterval(() => {
    if(indexCounter === images.length) {
        indexCounter = 0;
    }
    const imgUrl = images[indexCounter];
    imgEL.setAttribute('src', imgUrl);
    indexCounter++;
    
    
}, 1000);


