const messages = [
    "meh is a network on the decentralized internet",
    "you are watching an erc-ad token",
    "erc-ad is a new standard for digital assets",
    "developed by meh labs",
];
const ticker = document.getElementById('ticker');
let index = 0;
let position = window.innerWidth; // Start off-screen on the right

function animateTicker() {
    if (position < -ticker.offsetWidth) {
        position = window.innerWidth; // Reset position off-screen on the right
        index = (index + 1) % messages.length;
    }
    ticker.textContent = messages[index];
    ticker.style.left = position + "px";
    position -= 5; // Adjust speed as needed
    requestAnimationFrame(animateTicker);
}

animateTicker();