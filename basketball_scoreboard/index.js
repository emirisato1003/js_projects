
let homeScore = 0;
let guestScore = 0;

let homeFoul = 0;
let guestFoul = 0;

let timeStartMinutes = 15;
let time = timeStartMinutes * 60;

let interval;


const getHomeScore = document.getElementById('home-score');
const getHomeFoul = document.getElementById('home-foul');
const getGuestScore = document.getElementById('guest-score');
const getGuestFoul = document.getElementById('guest-foul');
const timerDOMlElement = document.getElementById('timer');

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

function timer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    timerDOMlElement.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    time--;
}

function showEditTimer() {
    document.getElementById('showTimer').style.display = 'none';
    document.getElementById('timerEditor').style.display = 'flex';
    console.log('clicked edit');
}

function setEditTimer() {
    document.getElementById('showTimer').style.display = 'flex';
    document.getElementById('timerEditor').style.display = 'none';
    // setInterval(timer, 1000);
}

function start(){
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeFoul = 0;
    guestFoul = 0;

    getGuestScore.textContent = guestScore;
    getGuestFoul.textContent = guestFoul;
    getHomeScore.textContent = homeScore;
    getHomeFoul.textContent = homeFoul;

}