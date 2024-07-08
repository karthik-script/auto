// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");
const { getHours, getMinutes } = require("date-fns");
const { utcToZonedTime } = require("date-fns-tz");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function isTimeGreaterThan5PMPST() {
  const timeZone = "America/Los_Angeles"; // PST/PDT time zone
  const currentDate = new Date();
  const zonedDate = utcToZonedTime(currentDate, timeZone);
  const hours = getHours(zonedDate);
  const minutes = getMinutes(zonedDate);

  // Check if the current time in PST is greater than 5 PM
  if (hours >= 17 && minutes >= 15) return true;
  return false;
}

const init = async () => {
  // Speed up the mouse.
  robot.setMouseDelay(2);

  const twoPI = Math.PI * 2.0;
  const screenSize = robot.getScreenSize();
  const height = screenSize.height / 2 - 10;
  const width = screenSize.width;
  while (true) {
    for (let x = 0; x < width; x++) {
      const y = height * Math.sin((twoPI * x) / width) + height;
      robot.moveMouse(x, y);
    }
    delay(5000);
    robot.keyTap("right_shift");
    if (isTimeGreaterThan5PMPST()) {
      return;
    }
  }
};

init();
