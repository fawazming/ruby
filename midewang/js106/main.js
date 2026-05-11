


  


function drivingAction(lightColor) {
  if (lightColor === "green") {
    return "Drive";
  } else if (lightColor === "yellow") {
    return "Slow down";
  } else {
    return "Stop";
  }
}

showResult("drivingAction(green):", drivingAction("green"));
showResult("drivingAction(yellow):", drivingAction("yellow"));
showResult("drivingAction(red):", drivingAction("red"));



function userPassword(password) {
  if (password === "12345") {
    return "Access Granted";
  } else {
    return "Denied";
  }
}
showResult("userPassword(12345):", userPassword("12345"));
showResult("userPassword(tthgh):", userPassword("tthgh"));



function checkBattery(level) {
  if (level < 20) {
    return "battery low";
  } else {
    return "battery is okay";
  }
}
showResult("checkBattery(15):", checkBattery(15));
showResult("checkBattery(50):", checkBattery(50));

function getShippingStatus(orderAmount, isVIP) {
  if (orderAmount > 50 || isVIP) {
    return "free shipping";
  } else {
    return "shipping charges apply";
  }
}
showResult("getShippingStatus(60, false):", getShippingStatus(60, false));
showResult("getShippingStatus(30, true):", getShippingStatus(30, true));
showResult("getShippingStatus(30, false):", getShippingStatus(30, false));