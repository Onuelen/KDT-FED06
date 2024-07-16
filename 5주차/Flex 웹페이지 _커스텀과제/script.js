// Header Nav

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");

  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Slick Slider
$(".myslider").slick({
  dots: true,
  infinite: false,
  speed: 100,
  autoplay: true,
  slidesToShow: 3,
  slidesToscrool: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
