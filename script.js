var images = [
    "img1.webp",
    "img2.jpg",
    "img3.jpeg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
];

var firstCard = null
var secondCard = null
var canFlip = true
var matches = 0
var moves = 0
var seconds = 0
var timerRunning = false
var timeInterval;

function startGame() {
    var gameBoard = document.getElementById("gameBoard")
    gameBoard.innerHTML = ""

    var card = images.concat(images)

    cardImages.sort(function () {
        return Math.random() - 0.5
    })

    for (var i = 0; i < cardImages.length; i++) {
        var card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <div class="card-front"><i class="fas fa-diamond"></i></div>
            <div class="card-back"><img src="${cardImages[i]}" alt=""></div>
        `
        card.onclick = flipCard;
        card.dataset.image = cardImages[i]
        gameBoard.appendChild(card)
    }

    firstCard = null;
    secondCard = null;
    canFlip = true;
    matches = 0;
    moves = 0;
    seconds = 0
    timerRunning = false

    updateStats()
    clearInterval(timeInterval)
}

function flipCard() {
    if (!canFlip) return

    if(this.classList.contains())
}














