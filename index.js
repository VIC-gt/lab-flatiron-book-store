const baseURL = "https://api.weather.gov/alerts/active?area=";

const input = document.getElementById("state-input");
const button = document.getElementById("get-weather");
const display = document.getElementById("alerts-display");
const errorBox = document.getElementById("error-message");

button.addEventListener("click", async () => {
  const state = input.value.trim().toUpperCase();

  // clear previous UI state
  errorBox.textContent = "";
  errorBox.classList.add("hidden");
  display.innerHTML = "";

  try {
    const response = await fetch(baseURL + state);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (err) {
    displayError(err.message);
  }

  input.value = "";
});

function displayWeather(data) {
  const alerts = data.features || [];

  const title = document.createElement("h2");
  title.textContent = `Weather Alerts: ${alerts.length}`;

  display.appendChild(title);

  alerts.forEach(alert => {
    const p = document.createElement("p");
    p.textContent = alert.properties.headline;
    display.appendChild(p);
  });
}

function displayError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("hidden");
}