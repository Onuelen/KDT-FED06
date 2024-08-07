const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");

  liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

  bookList.appendChild(liItem);

  title.value = "";
  author.value = "";

  const delBtns = document.querySelectorAll("span");

  delBtns.forEach((delBtns) => {
    delBtns.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  });
});
