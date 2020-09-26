function startTime() {
    let today = new Date();

    let hour = today.getHours();

    let min = today.getMinutes();

    let sec = today.getSeconds();

    let amPm= "AM"
   
    if (hour >= 12) {
        hour -= 12;
        amPm = "PM";
      }if (hour === 0) {
        hour = 12;
      }
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("digitalClock").innerHTML =
      hour + ":" + min + ":" + sec + " " + amPm;

    document.getElementById("date").innerHTML = today.toLocaleDateString();

    setInterval(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
