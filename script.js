//Headaer toggle
let MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

//Typing Effect

let typed = new Typed(".auto-input", {
  strings: [
    "Studying as a Software Developer",
    "Studying as a UI-UX Designer",
    "Studying as a Web Developer",
    "Studying as a Cyber Security",
    "Informatics Undergraduate Student",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});

//Active link state on scroll
//get all links
let navLinks = document.querySelectorAll("nav ul li a");
//Get All sections
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;

  if (name === "" || email === "" || subject === "" || msg === "") {
    alert("Please fill in all fields.");
    event.preventDefault(); // Prevent the form from submitting
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else if (!validateName(name)) {
    alert("Please enter a valid name.");
    event.preventDefault();
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateName(name) {
  const re = /\S+@\S+\.\S+/;
  return re.test(name);
}
