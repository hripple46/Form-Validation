const email = document.getElementById("email");
const errorEmail = document.querySelector("#email + span");

errorEmail.textContent = "Your Email is Required";

email.addEventListener("input", () => {
  if (email.validity.valid) {
    errorEmail.textContent = "";
  } else {
    showErrorEmail(email, errorEmail);
  }
});

function showErrorEmail(x, y) {
  if (x.validity.valueMissing) {
    y.textContent = "Your Email Is Required";
  } else if (x.validity.typeMismatch) {
    y.textContent = "Valid Email Required";
  }
}
