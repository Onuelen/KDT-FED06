const howLong = prompt("걷기 시작한 날짜를 제출해주세요", "20240808");
const result = document.querySelector("#result");

const today = new Date();
const firstDay = new Date(howLong);

const passedTime = today.getTime() - firstDay.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
