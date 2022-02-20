const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const randomImg = images[Math.floor(Math.random()*images.length)];

const img = `img/${randomImg}`;

document.body.style.backgroundImage = `url(${img})`;