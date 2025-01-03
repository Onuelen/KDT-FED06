// 젤 쉬운 버전
// const tab1 = document.querySelector(".tab1");
// const tab2 = document.querySelector(".tab2");
// const tab3 = document.querySelector(".tab3");

// const content1 = document.querySelector(".content1");
// const content2 = document.querySelector(".content2");
// const content3 = document.querySelector(".content3");

// tab1.addEventListener("click", function () {
//   this.classList.add("active");
//   tab2.classList.remove("active");
//   tab3.classList.remove("active");
//   content1.classList.add("active");
//   content2.classList.remove("active");
//   content3.classList.remove("active");
// });

// tab2.addEventListener("click", function () {
//   this.classList.add("active");
//   tab1.classList.remove("active");
//   tab3.classList.remove("active");
//   content2.classList.add("active");
//   content1.classList.remove("active");
//   content3.classList.remove("active");
// });

// tab3.addEventListener("click", function () {
//   this.classList.add("active");
//   tab1.classList.remove("active");
//   tab2.classList.remove("active");
//   content3.classList.add("active");
//   content1.classList.remove("active");
//   content2.classList.remove("active");
// });

// 두번째
const tabs = document.querySelectorAll(".tabs li");
const contents = document.querySelectorAll(".contents > div");


tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i];
      tab.classList.remove("active");
    }
    for (let i = 0; i < contents.length; i++) {
      let content = contents[i];
      content.classList.remove("active");
    }
    tab.classList.add("active");
    contents[i].classList.add("active");
  });
});




// header & footer

const header = document.querySelector("header");
const sidebar = document.querySelector(".sidebar_common");
const footer = document.querySelector("footer");

fetch("/component/header.html")
    .then((res) => res.text())
    .then((data) => {
    header.innerHTML = data;
    const script = document.createElement("script");
    script.src = "/component/header.js";
    script.defer = true;
    document.body.appendChild(script);
    });

fetch("/component/sidebar.html")
    .then((res) => res.text())
    .then((data) => {
    sidebar.innerHTML = data;
    const script = document.createElement("script");
    script.src = "/component/sidebar.js";
    script.defer = true;
    document.body.appendChild(script);
    });

fetch("/component/footer.html")
    .then((res) => res.text())
    .then((data) => {
    footer.innerHTML = data;
    });
    



// login JS
// 1. 아이디를 입력한다.
// 2. 비밀번호를 입력한다.
// 3. 로그인 버튼을 누른다.
// 3-1. 아이디와 비밀번호가 일치하지 않을 경우 '아이디 & 비밀번호를 확인하세요. 창을 띄운다'
// 3-2. 알림창을 닫으면 다시 아이디부터 입력 할 수 있도록 되돌아 온다.


