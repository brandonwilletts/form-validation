const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zip");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");

function checkEmail() {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(emailInput.value);
}

function checkZip() {
  let zipRegExp = "";
  if (countryInput.value === "usa") {
    zipRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
  } else if (countryInput.value === "canada") {
    zipRegExp =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  }
  return zipRegExp.test(zipInput.value);
}

function checkPasswordConfirm() {
  const result =
    passwordInput.value === passwordConfirmInput.value ? true : false;
  return result;
}

function checkPassword() {
  const result = passwordInput.value.length > 0 ? true : false;
  return result;
}

function renderInvalid(input) {
  const error = input.nextElementSibling;
  input.setCustomValidity("invalid");
  switch (input) {
    case emailInput:
      error.textContent = "Please enter a valid email address";
      break;
    case zipInput:
      error.textContent = "Please enter a valid zip code";
      break;
    case passwordInput:
      error.textContent = "Please enter a valid password";
      break;
    case passwordConfirmInput:
      error.textContent = "Passwords do not match";
      break;
    default:
      error.textContent = "Error";
      break;
  }
}

function renderValid(input) {
  const error = input.nextElementSibling;
  input.setCustomValidity("");
  error.textContent = "";
}

function checkAndRenderAllInputs() {
  let result = true;
  const emailValid = checkEmail();
  const zipValid = checkZip();
  const passwordValid = checkPassword();
  const passwordConfirmValid = checkPasswordConfirm();

  emailValid ? renderValid(emailInput) : renderInvalid(emailInput);
  zipValid ? renderValid(zipInput) : renderInvalid(zipInput);
  passwordValid ? renderValid(passwordInput) : renderInvalid(passwordInput);
  passwordConfirmValid
    ? renderValid(passwordConfirmInput)
    : renderInvalid(passwordConfirmInput);

  !emailValid || !zipValid || !passwordValid || !passwordConfirmValid
    ? (result = false)
    : null;
  return result;
}

emailInput.addEventListener("input", (event) => {
  checkEmail() ? renderValid(emailInput) : renderInvalid(emailInput);
});

zipInput.addEventListener("input", (event) => {
  checkZip() ? renderValid(zipInput) : renderInvalid(zipInput);
});

passwordInput.addEventListener("input", (event) => {
  checkPassword() ? renderValid(passwordInput) : renderInvalid(passwordInput);
});

passwordConfirmInput.addEventListener("input", (event) => {
  checkPasswordConfirm()
    ? renderValid(passwordConfirmInput)
    : renderInvalid(passwordConfirmInput);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const success = document.querySelector(".success");
  if (checkAndRenderAllInputs()) {
    success.style.cssText = "padding: 16px;";
    success.textContent = "Form submitted!";
    form.reset();
  } else {
    success.style.cssText = "padding: 0px;";
    success.textContent = "";
  }
});
