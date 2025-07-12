// Elements
const candle = document.getElementById("cssCandle");
const flame = document.getElementById("cssFlame");
const initialMessage = document.getElementById("initialMessage");
const balloonPop = document.getElementById("balloonPopMessage");
const birthdayMessage = document.getElementById("birthdayMessage");
const greeting = document.getElementById("birthdayGreeting");
const wish1 = document.getElementById("birthdayWish1");
const wish2 = document.getElementById("birthdayWish2");
const wish3 = document.getElementById("birthdayWish3");

// Hide elements initially
flame.style.display = "none";
balloonPop.style.display = "none";
birthdayMessage.style.display = "none";

// Candle click to light
candle.addEventListener("click", () => {
  flame.style.display = "block";
  initialMessage.style.display = "none";

  // Step 1: Show balloon after 5 sec
  setTimeout(() => {
    balloonPop.style.display = "block";

    // Step 2: After 2s hide balloon and show photo bg + wishes
    setTimeout(() => {
      balloonPop.style.display = "none";
      document.body.style.background = "url('bipana.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      birthdayMessage.style.display = "block";

      // Step 3: Typing effect
      typeText(greeting, "Happy Birthday, Bipana!", () => {
        typeText(wish1, "You light up every room you walk into. ✨", () => {
          typeText(wish2, "Never stop being your amazing self. 💖", () => {
            typeText(wish3, "Enjoy your day, superstar! 🌟", null);
          });
        });
      });
    }, 2000);

  }, 5000);
});

// Typing animation
function typeText(element, text, callback) {
  let i = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) setTimeout(callback, 800);
    }
  }, 60);
}
