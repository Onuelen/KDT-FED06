// form 요소 = form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현!!!

// 요소.value => form 요소안에 value를 찾아올 수 있음.

const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const orderName = document.querySelector("#orderName");
  const orderName = document.order.orderName;
  console.log(orderName.value);
});

// const orderName = document.querySelector("#orderName");
// console.log(orderName);

// console.log(document.forms[0].elements);

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  console.log(this.options);
  const selectedText = this.options[this.selectedIndex].innerText;
  alert(`${selectedText}를 선택하셨습니다! 가격은 5,000원 입니다.`);
});

const checkBox = document.querySelector("input[name='alarm']:checked");
