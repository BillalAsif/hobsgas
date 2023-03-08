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