// Sticky Event
window.addEventListener("scroll", () => {
  const hashList = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 310) {
    hashList.classList.add("active");
  } else {
    hashList.classList.remove("active");
  }
});

// Touch Event
const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 최초 터치 및 마우스다운 지점
let startX = 0;

//현재 이동중인 지점
let nowX = 0;

//터치 종료 지점
let endX = 0;

// 두번째 터치 지점
let listX = 0;

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g[5])
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onscrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX - listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);
  window.removeEventListener("touchmove", onscrollMove);
  window.removeEventListener("mousemove", onscrollMove);
  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onscrollMove);
  window.addEventListener("mousemove", onscrollMove);
  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
