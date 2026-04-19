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
    p.textContent = data.fact;
    dataContainer.appendChild(p);

  } catch (error) {
    errorMessage.textContent = "Something went wrong. Please try again.";
    console.log(error);
  } finally {
    loadingMessage.style.display = "none";
  }
}

document.getElementById("catBtn").addEventListener("click", loadData);