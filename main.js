const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".add-counter");

  counters.forEach((counter) => {
    let startValue = parseInt(counter.getAttribute("data-start"));
    setInterval(() => {
      startValue++;
      counter.textContent = startValue;
    }, 300);
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
};

// header container
ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption
});

ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 250
});

// about container
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left"
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 200
});
ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 285
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 350
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 500
});

// room container
ScrollReveal().reveal(".room_card", {
  ...scrollRevealOption,
  interval: 400
});

// service container
ScrollReveal().reveal(".service_list li", {
  ...scrollRevealOption,
  interval: 400,
  origin: "right"
});
