
        var swiper = new Swiper(".mySwiper", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 1200,
            modifier: 1,
            slideShadows: flase,
          },
          pagination: {
            el: ".swiper-pagination",
          },
        });
     