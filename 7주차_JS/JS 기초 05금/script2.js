// // DOM
// const main = document.querySelector("main");
// // const profile = main.querySelector("main > #profile");
// const profile = main.getElementByid("profile");
// const h1 = main.querySelector("h1");
// const desc = document.querySelector("#desc");
// const user = desc.querySelectorAll(".user");
// // console.log(user[user.length - 1]);

// // getElementByid => 메모리의 효율성 극대화
// // DOM >id
// // > querySelector => 전역요소의 모든 node
// // > 객체 속성을 반드시 document로 지정하고 가야된다.

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// //유사배열
// // 99% 배열이 가지고 있는 속성!!
// // 유사배열은 배열과 다른 1%

// const desc = document.querySelector(".desc");
// const iu = desc.querySelectorAll(".user")[0];
// console.log(iu);
// console.log(desc);
// console.log(desc.textContent);

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});

const pimg = document.querySelector("#profile img");

pimg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>태연</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});
