const nums = document.querySelectorAll(".number");
for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
  // nums[i]+1 => 어떤 숫자인지를 체크
  const angle = (i + 1) * (Math.PI / 6);

  const x = 142 + 142 * Math.abs(Math.sin(angle)) - nums[i].offsetWidth / 2;
  const y = 142 - 142 * Math.abs(Math.cos(angle));

  if (i + 1 > 6) nums[i].style.right = `${x}px`;
  else nums[i].style.left = `${x}px`;

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
    nums[i].style.top = `${y}px`;
  else nums[i].style.bottom = `${y}px`;
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");
const digitalClock = document.querySelector(".digital-clock");

const clock = () => {
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleValue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleValue;

  let period = "AM";
  if (hour === 0) hour = 12;
  else if (hour > 12) {
    hour -= 12;
    period = "PM";
  }

  hour = hour < 10 ? `0${hour}` : hour;
  second = second < 10 ? `0${second}` : second;
  minute = minute < 10 ? `0${minute}` : minute;

  digitalClock.innerText = ` ${hour} : ${minute} : ${second} ${period}`;
};

setInterval(clock, 1000);

// <span style="font-weight:bold">${day}</span>`;
