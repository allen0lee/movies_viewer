$('.owl-carousel').owlCarousel({
  loop: true,
  // margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1024: {
      items: 5
    }
  }
})
