// Brake Chain Animation
function brakeChain(){
  let chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;";

  setTimeout(function(){
    chain.innerHTML = "&#xf127;";
  }, 1000);
}

// Call Animation
brakeChain();

// Animate Every 2 Seconds
setInterval(brakeChain, 2000);

// Battery Charge Animation
function chargeBattery() {
  let battery = document.getElementById('battery');
  battery.innerHTML = "&#xf244;";
  setTimeout(function(){
    battery.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function () {
    battery.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function () {
    battery.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function () {
    battery.innerHTML = "&#xf240;";
  }, 4000);
}

// Run Animation
chargeBattery();

setInterval(chargeBattery, 5000);


// Hourglass tip animation
function hourglassTip(){
  let hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = "&#xf251;";
  setTimeout(function(){
    hourglass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function(){
    hourglass.innerHTML = "&#xf253;";
  }, 2000);
}

hourglassTip();

setInterval(hourglassTip, 3000);