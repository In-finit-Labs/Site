// HEADER  NAVBAR 
const toggleBtn = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".toggle_btn i");
const dropdown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    const isOpen = dropdown.classList.contains("open");
    toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
});

// SCROLL REVEAL

const sr = ScrollReveal({
    distance: "65px",
    duration: 2600,
    delay: 450,
    reveal: true
})

sr.reveal(".text",{delay:200, origin: "top"});
sr.reveal(".social-icons",{delay:500, origin: "right"});
sr.reveal(".scroll-down",{delay:500, origin: "right"});
sr.reveal(".home-image",{delay:600, scale: 0.5});



