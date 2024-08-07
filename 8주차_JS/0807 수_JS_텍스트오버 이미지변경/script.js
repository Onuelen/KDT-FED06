// 1.각 텍스트에 마우스를 올린다.
// - 텍스트를 찾아온다.
// - 텍스트가 4개다?
// - querySelectorAll
// - forEach문을 쓴다 . 쿼리셀렉터"올" 이니깐
// - addEventListner
// - mouseover || mouseenter
// - mouseout || mouseleave

// 2. 텍스트에 마우스가 올라갈 때 마다 이미지가 변경된다.
//- 현재 이미지를 출력하고 있는 Node를 찾아온다.
// - 해당 Node가 어떻게 이미지를 출력하고 있는지 확인(*백그라운드 이미지 속성)
// - HOW Node 속성 변경할 수 있을지 생각.
// 스트립트에서 어떻게 CSS 스타일 속성을 제어할 수 있는지 생각한다.

// 3. 텍스트에서 마우스가 떠나면 원래 상태로 돌아온다.

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem, index) => {
  liItem.addEventListener("mouseenter", function () {
    let changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url(${changeImage})`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
