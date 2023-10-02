const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('secs');

const newYear ='1 Jan 2024';
function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    console.log(newYearDate - currentDate);

    const tsecs = (newYearDate - currentDate) / 1000;
    const days = Math.floor(tsecs / 3600 / 24);
    const hours = Math.floor(tsecs / 3600 ) % 24;
    const mins = Math.floor(tsecs / 60) % 60;
    const secs = Math.floor(tsecs) % 60;
    console.log(days,hours,mins,secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minsEl.innerHTML = timeFormat(mins);
    secondsEl.innerHTML = timeFormat(secs);

}

function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}
countDown();

setInterval(countDown, 1000)