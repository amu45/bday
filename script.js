document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = document.getElementById('initialMessage');
    const cakeAndCandleWrapper = document.getElementById('cakeAndCandleWrapper');
    const candleHolder = document.getElementById('candleHolder');
    const cssFlame = document.getElementById('cssFlame');
    const balloonPopMessage = document.getElementById('balloonPopMessage');
    const birthdayMessageContainer = document.getElementById('birthdayMessage');
    const birthdayGreeting = document.getElementById('birthdayGreeting');
    const birthdayWish1 = document.getElementById('birthdayWish1');
    const birthdayWish2 = document.getElementById('birthdayWish2');
    const birthdayWish3 = document.getElementById('birthdayWish3');

    // Define the birthday message text
    const messageLines = [
        "Happy Birthday, BIPANA!", // REMEMBER TO CUSTOMIZE THIS LINE IN JS TOO!
        "Wishing you a day filled with joy, laughter, and everything wonderful!",
        "May all your wishes come true and your year be fantastic.",
        "Lots of love always!"
    ];

    let currentLine = 0;
    let charIndex = 0;
    let typingSpeed = 70; // milliseconds per character

    // Function to type out text character by character
    function typeWriter(element, text, callback) {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(() => typeWriter(element, text, callback), typingSpeed);
        } else {
            // Remove the typing cursor at the end of the line
            element.style.borderRight = 'none';
            if (callback) {
                setTimeout(callback, 500); // Small pause before next line
            }
        }
    }

    // Function to initiate typing sequence
    function startTypingSequence() {
        // Line 1: Greeting
        charIndex = 0; // Reset for new line
        typeWriter(birthdayGreeting, messageLines[0], () => {
            // Line 2: Wish 1
            charIndex = 0;
            typeWriter(birthdayWish1, messageLines[1], () => {
                // Line 3: Wish 2
                charIndex = 0;
                typeWriter(birthdayWish2, messageLines[2], () => {
                    // Line 4: Wish 3
                    charIndex = 0;
                    typeWriter(birthdayWish3, messageLines[3], null); // No callback for the last line
                });
            });
        });
    }

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

    // Initial background elements
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
        // Prevent multiple clicks
        if (cssFlame.style.opacity === '1') {
            return;
        }

        // 1. Light the candle
        cssFlame.style.opacity = 1;
        initialMessage.style.display = 'none'; // Hide initial instructions

        // Optional: Play a short sound for candle lighting or general celebration
        // const lightSound = new Audio('candle_light.mp3');
        // lightSound.play().catch(e => console.error("Audio playback failed:", e));

        // 2. Show balloon pop-up for 5 seconds
        balloonPopMessage.style.display = 'block';
        balloonPopMessage.style.opacity = 1; // Make sure it's visible after display block

        // Add an extra burst of confetti on candle light
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }

        setTimeout(() => {
            balloonPopMessage.style.opacity = 0; // Fade out balloon pop-up
            setTimeout(() => {
                balloonPopMessage.style.display = 'none'; // Hide completely after fade

                // 3. Remove cake/candle and show friend's photo
                cakeAndCandleWrapper.style.opacity = 0;
                cakeAndCandleWrapper.style.transform = 'translateY(50px) scale(0.8)'; // Animate out

                setTimeout(() => {
                    cakeAndCandleWrapper.style.display = 'none'; // Hide cake completely

                    // Show the main birthday message container
                    birthdayMessageContainer.style.display = 'block';

                    // Start the typewriting effect
                    startTypingSequence();

                    // Optional: Play a final celebration sound when message appears
                    // const finalSound = new Audio('celebration_music.mp3');
                    // finalSound.play().catch(e => console.error("Audio playback failed:", e));

                }, 500); // Wait for cake to fade out
            }, 500); // Wait for balloon pop-up to fade out
        }, 5000); // Balloon pop-up visible for 5 seconds
    });
});
