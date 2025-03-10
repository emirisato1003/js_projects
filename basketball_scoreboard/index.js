
let homeScore = 0;
let guestScore = 0;

const getHomeScore = document.getElementById('home-score');
const getGuestScore = document.getElementById('guest-score');
const timer = document.getElementById('timer');

console.log(timer);

function homeScoreAdd(point) {
    homeScore += point;
    console.log(homeScore)
    getHomeScore.textContent = homeScore;
}

function guestScoreAdd(point) {
    guestScore += point;
    getGuestScore.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    getGuestScore.textContent = homeScore;
    getHomeScore.textContent = guestScore;
}
