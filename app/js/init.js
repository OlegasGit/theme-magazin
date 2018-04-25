// init carousel
$('.main-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: false,
  nextArrow: false,
});

if(window.matchMedia('(max-width: 991px)').matches)
{
    $('.main-slider').slick({
      slidesToShow: 3,
      autoplay: false,
    });
}

	