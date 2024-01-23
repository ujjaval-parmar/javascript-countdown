let minsInput = document.getElementById('minutes');
let secInput = document.getElementById('seconds');

let timerInputs = document.getElementById('timer-inputs');
let display = document.getElementById('display');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let x;
// function to display timer::
function displayTimer() {

    if (minsInput.value.length >= 3) {
        minsInput.value = minsInput.value.slice(0, -1);
    }

    if (secInput.value.length >= 3) {
        secInput.value = secInput.value.slice(0, -1);
    }

    const minunts = minsInput.value.padStart(2, '0');
    const seconds = secInput.value.padStart(2, '0');

    display.innerHTML = minunts + ' : ' + seconds;

}

// Countdown function

function watch() {




    start.classList.add('disable');
    minsInput.classList.add('disable');
    secInput.classList.add('disable');
    let date1 = new Date();

    let countDownDate = new Date();

    // setting the contdown date:
    countDownDate.setTime(date1.getTime() + (Number(minsInput.value.padStart(2, '0')) * 60 * 1000) + (Number(secInput.value.padStart(2, '0')) * 1000) + (1 * 1000))


    x = setInterval(function () {
        let now = new Date().getTime();

        // FInd Gap between Now and Countdowntime

        let gap = countDownDate - now;
        let minutes = Math.floor((gap) % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(((gap) % (1000 * 60)) / 1000);
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');


        // console.log(gap);
        if (gap <= 0) {
            clearInterval(x);
            display.innerHTML = '00 : 00';
            return;
        }
        display.innerHTML = minutes + ' : ' + seconds;

    }, 1000)
}

function resetAll() {
    start.classList.remove('disable');
    minsInput.classList.remove('disable');
    secInput.classList.remove('disable');

    display.innerHTML = '00 : 00';

    minsInput.value = '';
    secInput.value = '';


    clearInterval(x);

}


start.addEventListener('click', watch);

reset.addEventListener('click', resetAll);






