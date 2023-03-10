// Get year
document.getElementById("year").innerHTML = new Date().getFullYear();

// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

// Add breakpoint on footer
let breakpointOne = document.querySelector('.breakOne');
let breakpointTwo = document.querySelector('.breakTwo');
let windowSize = window.innerWidth;

if (windowSize <= 500) {
    breakpointOne.innerHTML = "<br/>";
    breakpointTwo.innerHTML = "<br/>";
}

// Nav Button, opens and closes mobile menu
let navButton = document.getElementById('navButton');
let mobileNav = document.querySelector('.mobileNavDropdown');
mobileNav.style.display = "none";
navButton.addEventListener('click', () => {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }
})

// Active nav and move to section
let homeButton = document.querySelector(".home");
let servicesButton = document.querySelector(".services");
let testimonialsButton = document.querySelector(".testimonials");
let requestQuoteButton = document.querySelector(".requestQuoteButton");
let homeButtonMobile = document.querySelector(".homeMobile");
let servicesButtonMobile = document.querySelector(".servicesMobile");
let testimonialsButtonMobile = document.querySelector(".testimonialsMobile");
let requestQuoteButtonMobile = document.querySelector(".requestQuoteButtonMobile");
let home = document.getElementById('home');
let services = document.getElementById('services');
let testimonials = document.getElementById('testimonials');
let requestQuote = document.getElementById('requestQuote');

homeButton.addEventListener('click', () => {
    scrollInto(homeButton, home);
})

servicesButton.addEventListener('click', () => {
    scrollInto(servicesButton, services);
})

testimonialsButton.addEventListener('click', () => {
    scrollInto(testimonialsButton, testimonials);
})

homeButtonMobile.addEventListener('click', () => {
    scrollInto(homeButtonMobile, home);
    mobileNav.style.display = "none";
})

servicesButtonMobile.addEventListener('click', () => {
    scrollInto(servicesButtonMobile, services);
    mobileNav.style.display = "none";
})

testimonialsButtonMobile.addEventListener('click', () => {
    scrollInto(testimonialsButtonMobile, testimonials);
    mobileNav.style.display = "none";
})

requestQuoteButton.addEventListener('click', () => {
    scrollIntoQuote();
})

requestQuoteButtonMobile.addEventListener('click', () => {
    scrollIntoQuote();
    mobileNav.style.display = "none";
})

// Removes active links on Nav
function removeActive() {
    homeButton.classList.remove("active");
    servicesButton.classList.remove("active");
    testimonialsButton.classList.remove("active");
    homeButtonMobile.classList.remove("active");
    servicesButtonMobile.classList.remove("active");
    testimonialsButtonMobile.classList.remove("active");
}

function scrollInto(button, section) {
    removeActive();
    button.classList.add('active');
    section.scrollIntoView({ behavior: 'smooth' });

}

function scrollIntoQuote() {
    removeActive();
    requestQuote.scrollIntoView({ behavior: 'smooth' });
}