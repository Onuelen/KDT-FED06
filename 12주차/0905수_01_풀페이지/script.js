const sec2 = () => {};

// fullpage.js
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      sec2();
      console.log("section2 Hello!");
    }
    if (pld_elm.index === 2) {
      sec2_reset();
      console.log("section2 Good Bye!!!!!!!");
    }
  },
});

// nav event
const navBtn = document.querySelector("#nav_icon");
navBtn.addEventListener("click", () => {
  document.body.classList.toggle("nav_active");
});
