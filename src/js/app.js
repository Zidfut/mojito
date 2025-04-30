import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  disable: "mobile",
  easing: "ease-out-back",
  duration: 800,
  delay: 100,
  once: true,
  anchorPlacement: 'top-center',
});

const links = document.querySelectorAll("a[href^='#']");
const headerHeight = 40;

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    const href = this.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    event.preventDefault();

    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      history.replaceState(null, "", " ");
    }
  });
});

const header = document.querySelector(".header");

if (window.scrollY > 0) {
    header.classList.add("header--scroll");
    // header.style.background = "#8EE91E";
    // initHeaderColorObserver();
}

document.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("header--scroll");
    // initHeaderColorObserver();
  } else {
    header.classList.remove("header--scroll");
    // header.style.background = "transparent";
  }
});

// function initHeaderColorObserver() {
//   const header = document.querySelector(".header");
//   const sections = document.querySelectorAll("[data-menu-color]");

//   if (!header || sections.length === 0) return;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const color = entry.target.dataset.menuColor;
//           header.style.backgroundColor = color;
//         }
//       });
//     },
//     {
//       threshold: 0.6,
//     }
//   );

//   sections.forEach((section) => observer.observe(section));
// }
