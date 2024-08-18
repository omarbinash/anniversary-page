// Toggle music play/pause
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

const galleryWrapper = document.querySelector('.gallery-wrapper');
let clone = galleryWrapper.innerHTML;
galleryWrapper.innerHTML += clone; // Duplicate the content for seamless looping

let scrollAmount = 0;

function scrollGallery() {
    scrollAmount -= 1; // Adjust speed by changing this value
    if (Math.abs(scrollAmount) >= galleryWrapper.scrollWidth / 2) {
        scrollAmount = 0; // Reset to start the loop seamlessly
    }
    galleryWrapper.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(scrollGallery);
}

// Start the gallery scrolling
scrollGallery();

