$(document).ready(function () {
  $('.header-slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  })

  $('.catalog-slider').slick({
    slidesToShow: 4,
    arrows: false,
  })
}) 