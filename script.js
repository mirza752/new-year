// Countdown Timer
const countdownTimer = document.getElementById("timer");

const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();

let interval = setInterval(function() {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdownTimer.innerHTML = "Happy New Year!";
        setTimeout(celebrate, 500); // Trigger celebration after the countdown ends
    }
}, 1000);

// Celebration effect
function celebrate() {
    let confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 200; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confettiPiece);
    }
    let audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
}
