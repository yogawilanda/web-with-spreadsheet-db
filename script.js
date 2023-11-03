const scriptURL =
  "https://script.google.com/macros/s/AKfycbxmz8rogOEkoO8ksAtHlYP-RKV9TxUYbGX0noDaX8hzgEKrSsBcWxYMLG0_bkQLygME/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
