// sidebar toggle
let menu = document.querySelector(".navbar-toggle");
let navbar = document.querySelector(".navbar-list");
let overlay = document.querySelector(".overlay");
menu.onclick = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

// Accourdion Code

// Select all accordion item headers
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

// Loop through each accordion item header
accordionItemHeaders.forEach((accordionItemHeader) => {
  // Add a click event listener to the header
  accordionItemHeader.addEventListener("click", (event) => {
    // Select the currently active accordion item header
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );

    // If there is an active header and it's not the clicked header
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      // Remove 'active' class from the currently active header and collapse its body
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    // Toggle 'active' class on the clicked header
    accordionItemHeader.classList.toggle("active");

    // Select the body of the clicked header
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    // If the clicked header is now active, expand its body, otherwise collapse it
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// owl carousel options

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
      nav: true,
    },
    1700: {
      items: 3,
      nav: true,
    },
  },
});

// flip imgs
window.onload = function () {
  var classes = [
    "one",
    "two",
    "three",
    "four",
    "five ",
    "six",
    "seven",
    "eight",
  ];
  // counter variable
  var i = 0;

  function activateDiv() {
    // Check if counter is less than the length of classes array

    if (i < classes.length) {
      var div = document.querySelector("div." + classes[i]);

      // If the div exists, add 'flip' class to it
      if (div) {
        div.classList.add("flip");
      }

      // Increment the counter
      i++;
      // Call the function again after 700 milliseconds
      setTimeout(activateDiv, 700);
    }
  }

  activateDiv();
};
