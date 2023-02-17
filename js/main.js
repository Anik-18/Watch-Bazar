$(document).ready(function () {
  $("body").scrollspy({ target: ".navbar-nav", offset: 67 });
  $(".navbar-nav a").on("click", function (event) {
    $(".navbar-collapse").collapse("hide");
  });
  $("#product-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
  $("#team-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// bodySkin.forEach((skin) => {
//   skin.addEventListener("change", function () {
//     if (this.value === "dark") {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   });
// });
