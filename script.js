// Function to trigger fireworks (confetti)
function fireFireworks() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });

    setTimeout(() => confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.4 },
    }), 500);

    setTimeout(() => confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.2 },
    }), 1000);
}

// Scroll event to trigger fireworks when reaching the conclusion section
window.addEventListener('scroll', function() {
    const conclusionSection = document.querySelector('#conclusion');
    const conclusionPosition = conclusionSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (conclusionPosition < screenHeight) {
        fireFireworks();
    }
});

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

