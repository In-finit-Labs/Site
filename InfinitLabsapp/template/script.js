// HEADER  NAVBAR 
const toggleBtn = document.querySelector(".toggle_btn");
const toggleIcon = document.querySelector(".toggle_btn i");
const dropdown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    const isOpen = dropdown.classList.contains("open");
    toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
});

const viewPort = (entries, observer) => {
  entries.forEach(entry => {
      entry.target.classList.toggle("is-viewPort", entry.isIntersecting);
  });
};

const observation = new IntersectionObserver(viewPort); // Error 1: Corrected here
const obsOptions = {};

const elseViewport = document.querySelectorAll("[data-viewPort]");
elseViewport.forEach(els => {
  observation.observe(els, obsOptions); // Error 2: Pass options here
});



// SCROLL TO THE TOP OF THE PAGE
const backTopBtn = document.querySelector("[data-back-top-btn]");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active")
    }
});


//LINK TABS TO PAGES
const home = document.getElementById("homepage");
home.addEventListener("click", () =>{
    const homePage = document.getElementById("home");
    homePage.scrollIntoView();
});

const AboutUs = document.getElementById("about-link")
AboutUs.addEventListener("click", () =>{
    const aboutUs = document.getElementById("about");
    aboutUs.scrollIntoView();
});

const Services = document.getElementById("services-link");
Services.addEventListener("click", () =>{
    const service = document.getElementById("services");
    service.scrollIntoView();
})

const BlogPage = document.getElementById("blog-link");
BlogPage.addEventListener("click", ()=>{
  const Blog = document.getElementById("blog");
  Blog.scrollIntoView();
})




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



