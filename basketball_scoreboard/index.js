
let homeScore = 0;
let guestScore = 0;

let homeFoul = 0;
let guestFoul = 0;

const getHomeScore = document.getElementById('home-score');
const getHomeFoul = document.getElementById('home-foul');
const getGuestScore = document.getElementById('guest-score');
const getGuestFoul = document.getElementById('guest-foul');
const timerDOMlElement = document.getElementById('timer');
const input = document.getElementById('timerEditorInput');

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
    stop();
    document.getElementById('showTimer').style.display = 'none';
    document.getElementById('timerEditor').style.display = 'flex';
}

function setEditTimer() {
    timerDOMlElement.textContent = ""
    document.getElementById('showTimer').style.display = 'flex';
    document.getElementById('timerEditor').style.display = 'none';
    let newMinutes = parseInt(input.value);
    timeStartMinutes = newMinutes;
    time = timeStartMinutes * 60;
    start()
}

function start() {
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('stop-btn').style.display = 'inline';
    timerDOMlElement.style.color = '#eee';
    interval = setInterval(timer, 1000);
}

function stop() {
    document.getElementById('start-btn').style.display = 'inline';
    document.getElementById('stop-btn').style.display = 'none';
    timerDOMlElement.style.color = ' #F94F6D';
    clearInterval(interval);
}


let timeStartMinutes = 15;
let time = timeStartMinutes * 60;

let interval;


function reset() {
    showEditTimer()
    // document.getElementById('new-game-btn').textContent = 'Start'
    homeScore = 0;
    guestScore = 0;
    homeFoul = 0;
    guestFoul = 0;
    getGuestScore.textContent = guestScore;
    getGuestFoul.textContent = guestFoul;
    getHomeScore.textContent = homeScore;
    getHomeFoul.textContent = homeFoul;

}