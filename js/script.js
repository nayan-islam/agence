$(".bannerslider").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplayspeed: 2000,
  fade: true,
  arrows: false,
});

$(".reviewslider").slick({
  slidesToShow: 3,
  prevArrow: `<i class="fa-solid fa-angle-left fa-fw prev"></i>`,
  nextArrow: `<i class="fa-solid fa-angle-right fa-fw next"></i>`,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
