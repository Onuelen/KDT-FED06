const num01 = window.document.querySelector("#num1");
const num02 = window.document.querySelector("#num2");
const resultBtn = window.document.querySelector("#btn")
console.log(num01);

function result (){
  const max = num01 > num02 ? num01 : num02;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (num01 % i === 0 && num02 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

