const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmz8rogOEkoO8ksAtHlYP-RKV9TxUYbGX0noDaX8hzgEKrSsBcWxYMLG0_bkQLygME/exec";
const form = document.forms["submit-to-google-sheet"];

// Add a loading indicator

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm(form, scriptURL);
});

const submitForm = async (form, scriptURL) => {
  // Disable the submit button
  form.querySelector("button[type='submit']").disabled = true;

  // Change the submit button text to "Sending..."
  form.querySelector("button[type='submit']").textContent = "Sending...";

  // Display the loading indicator
  const loadingIndicator = document.createElement("div");
  loadingIndicator.classList.add("loading-indicator");
  loadingIndicator.innerHTML = "Loading...";
  form.appendChild(loadingIndicator);

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    // Hide the loading indicator
    loadingIndicator.style.display = "none";

    // Re-enable the submit button
    form.querySelector("button[type='submit']").disabled = false;

    // Change the submit button text back to the original text
    form.querySelector("button[type='submit']").textContent = "Submit";

    // Check if the response was successful
    if (response.ok) {
      console.log("Success!", response);
      alert("Your message has been sent!");
    } else {
      alert("There was an error sending your message.");
    }
  } catch (error) {
    // Hide the loading indicator
    loadingIndicator.style.display = "none";

    // Re-enable the submit button
    form.querySelector("button[type='submit']").disabled = false;

    // Change the submit button text back to the original text
    form.querySelector("button[type='submit']").textContent = "Submit";

    // Alert the user that there was an error
    alert("There was an error sending your message.");

    console.error(error);
  }
};
