
//Reveal
  // Select every element with class "reveal"
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
      // getBoundingClientRect().top = distance from top of viewport
      const elementTop  = element.getBoundingClientRect().top;
      const revealPoint = 120; // px from bottom of viewport to trigger

      if (elementTop < windowHeight - revealPoint) {
        // Element is visible — add active to trigger the CSS transition
        element.classList.add("active");
      }
    });
  }

  // Run once on load (catches elements already in view)
  revealOnScroll();

  // Run again every time the user scrolls
  window.addEventListener("scroll", revealOnScroll);
