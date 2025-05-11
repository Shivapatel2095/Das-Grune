const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.querySelector(".inputName").value;
  const email = document.querySelector(".inputEmail").value;

  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message);
      form.reset();
    })
    .catch((err) => {
      alert("Something went wrong. Please try again.");
      console.error(err);
    });
});
