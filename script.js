// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 12:00:01").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = `${hours} hours ${minutes} minutes ${seconds} seconds`;
}, 1000);
