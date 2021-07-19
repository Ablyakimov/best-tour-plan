$(document).ready(function () {
  var hotelSldier = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "slide",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  $(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg", speed: 0.2 });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var CloseModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  CloseModalButton.on("click", closeModal);
  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // Обратока форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name souldn`t be shorter than 2 letters",
        },
        email: {
          required: "Type in your email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is obligatory",
          minlength: "Please enter all numbers",
        },
      },
    });
  });
  AOS.init();
  // Маска телефона
  $(".phone").mask("+7(000) 000-00-00");

  $("img").Lazy();

  $(".map-hover").mousemove(function (event) {
    $(".map-block").append(
      '<div class="google-map"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4700.391819624268!2d98.29871514595216!3d7.838132738053975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2s!4v1596804799353!5m2!1sru!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>'
    );
    $(".map").removeClass("map-hover");
    $(".map-hover").remove();
  });
});
