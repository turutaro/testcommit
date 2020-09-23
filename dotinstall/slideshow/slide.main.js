'use strict'


{

const images = [
    'images/IMG_8692.jpeg',
    'images/IMG_8729.jpeg',
    'images/IMG_9238.jpeg',
    'images/IMG_9319.jpeg',
    'images/IMG_9326.jpeg',
    'images/IMG_9339.jpeg',
    'images/IMG_9346.jpeg',
    'images/IMG_9496.jpeg',
    'images/IMG_9649.jpeg',
];

let currentIndex = 0;

const mainImage = document.getElementById('main');
mainImage.src = images[currentIndex];

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
        li.classList.add('current');
    }

    li.addEventListener('click', () => {
        mainImage.src = image;
        const thumbnails = document.querySelectorAll('.thumbnails > li');
        thumbnails[currentIndex].classList.remove('current');
        currentIndex = index;
        thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
});

const next = document.getElementById('next');
next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
        target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
});

const prev = document.getElementById('prev');
prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
        target = images.length - 1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
});

let timeoutId;

function playSlideShow() {
    timeoutId = setTimeout(() => {
        next.click();
        playSlideShow();
    }, 1000);
}

let isPlaying = false;

const play = document.getElementById('play');
play.addEventListener('click', () => {
    if (isPlaying === false) {
        playSlideShow();
        play.textContent = 'Pause';
    } else {
        clearTimeout(timeoutId);
        play.textContent = 'Play';
    }
    isPlaying = !isPlaying;
});
}