// 원기둥의 부피를 계산!!!!
// 원기둥의 밑 면적 X 높이 = 원기둥의 밑 면적(원의 부피 = 파이 X 반지름 X 반지름)
// 지름 / 2 = 반지름 * 반지름 *3.14 * 높이

// 상속 :  부모요소 > 자식 요소!!!! 최초 선언한 class 요소를 활용해서 다른 class

const form = document.querySelector("form");
const result = document.querySelector("#result");

// function Cylinder(diameter, height) {
//   this.diameter = diameter;
//   this.height = height;

//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

class Cylinder {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height - height;
  }

  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#diameter").value;
  const height = document.querySelector("#height").value;

  if (
    diameter === "" ||
    height === "" ||
    isNaN == typeof diameter ||
    isNaN == typeof height
  )
    result.innerText = `정확한 숫자로 지름값과 높이값을 입력해 주세요`;
  else {
    const cylinder01 = new Cylinder(diameter, height);
    result.innerText = `원기둥의 부피는 ${cylinder01.getVolume()}입니다.`;
  }
});

// const cylinder01 = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder01.getVolume()}입니다.`);
