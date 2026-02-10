// Netflix-style Navbar background change on scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth reveal on scroll using Intersection Observer
const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // if you don't want to re-animate on scroll up:
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // 15% visible triggers the animation
    }
  );

  reveals.forEach((el) => observer.observe(el));
});
