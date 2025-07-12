document.addEventListener('DOMContentLoaded', () => {
    const candleHolder = document.getElementById('candleHolder'); // Now click the holder
    const cssFlame = document.getElementById('cssFlame'); // The CSS flame element
    const initialMessage = document.querySelector('.initial-message');
    const birthdayMessage = document.getElementById('birthdayMessage');

    // Function to create and append a balloon element
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
        balloon.style.animationDuration = `${Math.random() * 10 + 8}s`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(balloon);

        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Function to create and append a confetti piece
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * -100 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 75%)`;
        confetti.style.animationDuration = `${Math.random() * 4 + 3}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.width = `${Math.random() * 8 + 5}px`;
        confetti.style.height = confetti.style.width;

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    // Initial creation of background elements
    for (let i = 0; i < 10; i++) {
        createBalloon();
    }
    setInterval(createBalloon, 2000);

    for (let i = 0; i < 30; i++) {
        createConfetti();
    }
    setInterval(createConfetti, 1000);

    // Event listener for clicking the candle holder
    candleHolder.addEventListener('click', () => {
        // Only light the candle once
        if (cssFlame.style.opacity === '1') {
            return;
        }

        // Show the flame
        cssFlame.style.opacity = 1;

        // Hide initial message
        initialMessage.style.display = 'none';

        // Show birthday message
        birthdayMessage.style.display = 'block';

        // Add an extra burst of confetti for celebration
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }

        // Optional: Play a celebration sound
        // const audio = new Audio('celebration.mp3');
        // audio.play().catch(e => console.error("Audio playback failed:", e));
    });
});
