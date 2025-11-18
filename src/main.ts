import "./style.css";

import Swiper from "swiper/bundle";
import burgerIcon from "/burger_menu.svg";
import closeIcon from "/close_menu.svg";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon") as HTMLImageElement | null;

  // Burger toggle
  toggle?.addEventListener("click", () => {
    const isOpen = !menu?.classList.contains("hidden");
    menu?.classList.toggle("hidden");

    if (icon) {
      icon.src = isOpen ? burgerIcon : closeIcon;
      icon.alt = isOpen ? "Menu" : "Close";
    }
  });

  // ✅ Close mobile menu when a menu link is clicked
  const menuLinks =
    document.querySelectorAll<HTMLAnchorElement>("#mobile-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!menu) return;

      // hide menu
      menu.classList.add("hidden");

      // reset icon back to burger
      if (icon) {
        icon.src = burgerIcon;
        icon.alt = "Menu";
      }
    });
  });

  // Testimonial swiper
  const swiperEl = document.querySelector("#testimonial-swiper");
  if (swiperEl) {
    new Swiper("#testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 500,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
    });
  }

  // Services swiper
  const servicesEl = document.querySelector("#services-swiper");

  if (servicesEl) {
    const servicesSwiper = new Swiper("#services-swiper", {
      direction: "vertical",
      loop: false,
      slidesPerView: 1,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      },
      pagination: {
        el: "#services-swiper .swiper-pagination",
        clickable: true,
      },
      mousewheel: {
        releaseOnEdges: true,
        forceToAxis: true,
        sensitivity: 1,
      },
    });

    servicesSwiper.on("reachEnd", () => {
      servicesSwiper.autoplay.stop();
    });
  }
});
