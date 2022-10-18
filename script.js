const clockTitle = document.querySelector(".js-clock");

function timeUntilChristmas() {
  const currentDate = new Date();
  const christmasDate = new Date("2022-12-25");
  const countdownTimer = christmasDate - currentDate;
  const day = Math.floor(countdownTimer / (1000 * 60 * 60 * 24));
  const hour = Math.floor((countdownTimer / (1000 * 60 * 60)) % 24);
  const min = Math.floor((countdownTimer / (1000 * 60)) % 60);
  const sec = Math.floor((countdownTimer / 1000) % 60);
  clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}

timeUntilChristmas();
setInterval(timeUntilChristmas, 1000);
