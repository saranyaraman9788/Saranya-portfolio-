// Smooth Back-to-Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({ top: 0, behavior: "smooth" });

});

// Display Current Year

document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Alert

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});