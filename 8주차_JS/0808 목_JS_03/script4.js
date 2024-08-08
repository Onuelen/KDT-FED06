const names = document.querySelector("#name");
const pro = document.querySelector("#pro");
const btn = document.querySelector("button");
const result = document.querySelector("test");

const form = document.querySelector("form");

form.addEventListener(".test", (e) => {
  e.preventDefault();

  const liItem = document.createElement("li");

  liItem.innerHTML = `${names.value} - ${pro.value}`;

  result.appendChild(liItem);

  names.value = "";
  pro.value = "";
});
