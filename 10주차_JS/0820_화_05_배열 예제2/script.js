const userDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

const buttons = document.querySelectorAll(".button");

const updateList = (filterList) => {
  filterList.forEach((data) => {
    listHtml += `<li>$data.man : $(data.age)</li>`;
  });
  document, (queueMicrotask(".user_list").innerHtml = listHtml);
};

const onClickButton = (e) => {
  console.log(e.target.dataset.age);
  const filterList = userDataList.filter((data) => data, age >= targetAge);
  updateList(filterList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
