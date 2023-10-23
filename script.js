
window.addEventListener("load", function () {
    calculateTime();
    setTimeout(calculateTime, 200);
});

function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';


    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    hour = hour % 12;
    //handle midnigh and noon when result is 0
    hour = hour != 0 ? hour : '12';

    hour = hour <= 10 ? '0' + hour : hour;

    minute = minute <= 10 ? '0' + minute : minute;


    document.getElementById('day').innerText = dayNames[dayNumber];
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('ampm').innerText = ampm;
}