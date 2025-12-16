function initHeroSlider() {
  $(".hero-slider").on("init", function (event, slick) {
    let firstSlide = $(".hero-slider .slick-current .slide-content");
    firstSlide.css("opacity", "1").css("animation", "slideInRight 1s ease forwards");
  });

  $(".hero-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    let content = $(".hero-slider .slick-slide[data-slick-index='" + nextSlide + "'] .slide-content");
    $(".slide-content").css("opacity", "0"); // reset all
    content.css("opacity", "1").css("animation", "slideInRight 1s ease forwards");
  });

  $(".hero-slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  });
}

$(document).ready(function () {
  initHeroSlider();
});
