
//Cat Fact generator
async function loadData() {
  const dataContainer = document.getElementById("dataContainer");
  const loadingMessage = document.getElementById("loadingMessage");
  const errorMessage = document.getElementById("errorMessage");

  loadingMessage.style.display = "block";
  errorMessage.textContent = "";

  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const data = await response.json();

    const p = document.createElement("p");
    //Line of code was generated with the help of ChatGPT (OpenAI, 2026) to keep facts from stacking on top of one another
    p.textContent = data.fact;
    dataContainer.textContent = data.fact;

  } catch (error) {
    errorMessage.textContent = "Something went wrong. Please try again.";
    console.log(error);
  } finally {
    loadingMessage.style.display = "none";
  }
}

document.getElementById("catBtn").addEventListener("click", loadData);

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
