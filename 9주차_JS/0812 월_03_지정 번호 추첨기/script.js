// let num01 = document.querySelector("#number01");
// let num02 = document.querySelector("#number02");
// const result = document.querySelector("#result");
// const btn = document.querySelector("input[type='submit']");

// btn.addEventListener("click", () => {
//   result.innerText = `${num01}중에 ${num02}은 ${num03}입니다.`;
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const number01 = document.querySelector("#number01");
  const number02 = document.querySelector("#number02");
  const result = document.querySelector("#result");

  let winner = "";
  let pickedNumbers = [];
  for (let i = 0; i < number02.value; i++) {
    let picked;

    do {
      picked = Math.floor(Math.random() * number01.value + 1);
    } while (pickedNumbers.includes(picked));

    pickedNumbers.push(picked);
    winner += `${picked}번`;
  }

  result.innerText = `당첨자 : ${winner}`;
});

// 값을 찾아오거나 생성!! => 배열 => 배열=0부터 시작하는 것이 유리하다.
