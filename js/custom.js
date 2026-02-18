// Custom Marquee JS for immediate repeat and pause on hover
document.addEventListener('DOMContentLoaded', function() {
  var marquee = document.querySelector('.custom-marquee');
  if (marquee) {
    // Duplicate content for seamless loop
    marquee.innerHTML += marquee.innerHTML;
  }
});

     var swiper = new Swiper(".mySwiper-hero", {
      slidesPerView: 1,
      spaceBetween: 2,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".hero-swiper-next",
        prevEl: ".hero-swiper-prev",
      },
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });


    var swiper = new Swiper(".mySwiper-hero-right", {
      spaceBetween: 30,
       autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



// Ensure header class toggling works correctly
$(function () {
  const $header = $(".fixed-top");
  function toggleHeaderClass() {
    if ($(window).scrollTop() > 10) {
      $header.addClass("fixed-top-nav");
    } else {
      $header.removeClass("fixed-top-nav");
    }
  }
  $(window).on('scroll', toggleHeaderClass);
  toggleHeaderClass(); // Run on page load
  
  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }
});
// Only handle mobile: remove styles on resize to mobile
$(function () {
  function handleDropdownMobile() {
    if (window.innerWidth <= 991) {
      $(".navbar-nav .dropdown").off('mouseenter mouseleave');
      $(".navbar-nav .dropdown-menu").removeAttr('style');
    }
  }
  handleDropdownMobile();
  $(window).on('resize', handleDropdownMobile);
});


//on click move to browser top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#movetop").fadeIn();
    } else {
      $("#movetop").fadeOut();
    }
  });
  //click event to scroll to top
  $("#movetop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });
});

//swiper home banmner
var swiper = new Swiper(".homeSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1200,
  // effect: "cube",
  // cubeEffect: {
  //   slideShadows: false,
  // },
  // effect: "flip",
  // flipEffect: {
  //   slideShadows: false,
  // },
  // Boolean: true,
  parallax: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//speakers
var swiper = new Swiper(".swiper-speakers", {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },
});

document.onreadystatechange = function () {
  var state = document.readyState;
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("load").style.visibility = "hidden";
    }, 1000);
  }
};


// Load download links only when user scrolls near them
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = entry.target;
        link.href = link.dataset.src;
        observer.unobserve(link);
      }
    });
  });

  document.querySelectorAll('[data-src]').forEach(el => {
    observer.observe(el);
  });
});
