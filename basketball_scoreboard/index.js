
let homeScore = 0;
let guestScore = 0;

const getHomeScore = document.getElementById('home-score');
const getGuestScore = document.getElementById('guest-score');
console.log(homeScore, guestScore);

function homeScoreAdd1() {
    homeScore += 1;
    getHomeScore.textContent = homeScore;
}

function homeScoreAdd2() {
    homeScore += 2;
    getHomeScore.textContent = homeScore;
}

function homeScoreAdd3() {
    homeScore += 3;
    getHomeScore.textContent = homeScore;
}


function guestScoreAdd1() {
    guestScore += 1;
    getGuestScore.textContent = guestScore;
}

function guestScoreAdd2() {
    guestScore += 2;
    getGuestScore.textContent = guestScore;
}

function guestScoreAdd3() {
    guestScore += 3;
    getGuestScore.textContent = guestScore;
}


function reset() {
    homeScore = 0;
    guestScore = 0;
    getGuestScore.textContent = homeScore;
    getHomeScore.textContent = guestScore;
}
