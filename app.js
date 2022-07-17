var time = document.getElementById("time")
var clockElement = document.getElementById('clock');
var day = document.getElementById('day');

function clock() {
    var date = new Date();
    time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    clockElement.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    const options = { weekday: 'long' };
    day.innerHTML = new Intl.DateTimeFormat('en-US', options).format(date);

} setInterval(clock, 1000);