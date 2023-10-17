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

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission action

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;

  // Validate the name field
  if (name.trim() === "") {
    alert("Name must be filled.");
    return;
  }

  // Validate the email field
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
    alert("Use a proper Email.");
    return;
  }

  // Validate the subject field
  if (subject.trim() === "") {
    alert("Subject must be filled.");
    return;
  }

  // Validate the message field
  if (msg.trim() === "") {
    alert("Message must be filled.");
    return;
  }

  // If all fields are valid, you can proceed with form submission
  // Replace this line with your form submission code
  // For example, you can use AJAX to send the form data to the server
  alert("Form submitted successfully!"); // Replace this with your actual submission code
  contactForm.reset();
});
