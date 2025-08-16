/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// Code obtained from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

/* Shows if we are open or not */
const londonhours = new Date().toLocaleString("en-US",{timeZone: 'Europe/London'})

const displaytime = new Date().toLocaleString("en-GB",{timeZone: 'Europe/London'})


const timehours = new Date(londonhours).getHours()

const openstate = "OPEN"
const closedstate = "Closed"


if (((6 <= timehours) && (timehours <= 23 )) || (timehours == 0)) {
  document.getElementById("time_uk").innerHTML = displaytime ;
  document.getElementById("open_closed").innerHTML = openstate;
  document.getElementById("open_closed").style.color = "#A5BE00"
} else {
  document.getElementById("time_uk").innerHTML = displaytime;
  document.getElementById("open_closed").innerHTML = closedstate;
  document.getElementById("open_closed").style.color = "red"
}
