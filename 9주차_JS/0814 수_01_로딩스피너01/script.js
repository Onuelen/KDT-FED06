const name = prompt("PM의 이름은?");
const loading = document.querySelector(".loading");
setTimeout(() => {
  loading.remove();
  document.write(name);
}, 3000);
