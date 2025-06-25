/* Top Nav */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/* Simple Accordion Functionality */
function initAccordion() {
  console.log("Initializing accordion...");

  // Get all accordion items
  var accordionItems = document.querySelectorAll(".accordion-item");
  console.log("Found accordion items:", accordionItems.length);

  // Add click event to each header
  accordionItems.forEach(function (item, index) {
    var header = item.querySelector(".accordion-header");
    var content = item.querySelector(".accordion-content");

    if (header && content) {
      console.log("Setting up accordion item", index);

      // Add click event
      header.onclick = function () {
        console.log("Clicked accordion item", index);

        // Close all other items
        accordionItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            var otherContent = otherItem.querySelector(".accordion-content");
            if (otherContent) {
              otherContent.style.display = "none";
            }
          }
        });

        // Toggle current item
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          content.style.display = "none";
          console.log("Closed item", index);
        } else {
          item.classList.add("active");
          content.style.display = "block";
          console.log("Opened item", index);
        }
      };

      // Set initial state
      if (index === 0) {
        item.classList.add("active");
        content.style.display = "block";
        console.log("Opened first item by default");
      } else {
        content.style.display = "none";
      }
    }
  });
}

// Initialize accordion when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAccordion);
} else {
  initAccordion();
}

// Also try to initialize after a short delay as backup
setTimeout(initAccordion, 1000);
