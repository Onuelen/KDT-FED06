// 아래 ID 및 PW 는 A 사용자의 ID 및 패스워드 입니다.
const id = "ezen";
const pw = 1234;

//1.사용자로부터 ID , PW  정보값을 순차적으로 받습니다.
//2.사용자가 입력한 ID값이 위에 저장된 ID와 일치하면, PW값을 받을 수 있는 단계로 넘어가고,
//만약 ID 값이 일치하지 않으면 값이 일치하지 않는다. 는 알림창을 띄워줍니다.

//3.PW값을 입력하는 단뎨에 도착해 역시, PW가 일치하면 사용자님 반갑습니다.
//라는 알림창을 띄우고, PW값이 일치하지 않는다면 일치하지 않습니다. 라는 알림창을 띄워줍니다!!

// 리액트 책 37 Page

const ID = prompt("ID를 입력해주세요.");

if (ID === id) {
  const PW = Number(prompt("PW를 입력해주세요"));
  if (pw === PW) {
    alert(`${ID}님 환영합니다.`);
  } else {
    alert("PW가 일치하지 않습니다.");
    window.location.reload();
  }
} else {
  alert("ID가 일치하지 않습니다.");
  window.location.reload();
}
