const imageAll = document.querySelectorAll(".parallaxImage");

const totalNum = imageAll.length;

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;

  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      console.log(item);

      item.style.transform = `translate3d(0,0,${
        scrollNum / (3 * (totalNum - index))
      }px)`;
    });
  }
});
