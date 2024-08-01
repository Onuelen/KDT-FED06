// 현재 보고 있는 웹 브라우저 문서 내 버튼을 하나 만들어주세요
// 해당 버튼을 클릭할 때마다 색상이 변경되도록
//색상은 white,yellow,aqua,purple 색상이며, 마지막 purple 색상 다음 색상은 첫 번째 색상인 white로 변경 됩니다.(*무한반복 색상 변경)

// #로 바꿔도 작동이 가능한가?

const color = ["white", "yellow", "aqua", "purple"];

document.body.innerHTML += `<button id="btn">Change Color</button>`;
const button = document.querySelector("#btn");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;
  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
