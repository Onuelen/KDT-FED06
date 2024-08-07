const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = doc.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/457101e171254b30a88add0182df5358_9366/OG_Black_IH8047_01_standard.jpg";

  newImg.setAttribute(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
