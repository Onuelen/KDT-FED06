const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");
phoneNumber.addEventListener("keyup", function () {
  const numValue = this.value;
  const trimNumber = numValue.replace(/-/g, "");
  console.log(trimNumber);

  const regexp = /^0[0-9]{9,10}$/.test(trimNumber);

  if (regexp === false)
    warningMessage.innerText = "올바른 전화번호를 입력해주세요!";
  else warningMessage.innerText = "";
});
