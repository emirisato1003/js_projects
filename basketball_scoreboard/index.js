
let homeScore = 0;
let guestScore = 0;

let homeFoul = 0;
let guestFoul = 0;

const getHomeScore = document.getElementById('home-score');
const getHomeFoul = document.getElementById('home-foul');
const getGuestScore = document.getElementById('guest-score');
const getGuestFoul = document.getElementById('guest-foul');
const timer = document.getElementById('timer');

// console.log(timer);

function homeScoreAdd(point) {
    homeScore += point;
    getHomeScore.textContent = homeScore;
}

function guestScoreAdd(point) {
    guestScore += point;
    getGuestScore.textContent = guestScore;
}


function homeFoulAdd() {
    homeFoul += 1;
    getHomeFoul.textContent = homeFoul;
}

function guestFoulAdd() {
    guestFoul += 1;
    getGuestFoul.textContent = guestFoul;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeFoul = 0;
    guestFoul = 0;

    getGuestScore.textContent = guestScore;
    getGuestFoul.textContent = guestFoul
    getHomeScore.textContent = homeScore;
    getHomeFoul.textContent = homeFoul

}