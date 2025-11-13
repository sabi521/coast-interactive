import "./style.css";

import Swiper from "swiper/bundle";
import burgerIcon from "/burger_menu.svg";
import closeIcon from "/close_menu.svg";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon") as HTMLImageElement;

  toggle?.addEventListener("click", () => {
    const isOpen = !menu?.classList.contains("hidden");
    menu?.classList.toggle("hidden");

    if (icon) {
      icon.src = isOpen ? burgerIcon : closeIcon;
      icon.alt = isOpen ? "Menu" : "Close";
    }
  });

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
});
