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

function checkAllInputs() {
  if (checkEmail() && checkZip() && checkPassword() && checkPasswordConfirm()) {
    return true;
  } else {
    return false;
  }
}

emailInput.addEventListener("input", (event) => {
  if (checkEmail()) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
});

zipInput.addEventListener("input", (event) => {
  if (checkZip()) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
});

passwordInput.addEventListener("input", (event) => {
  if (checkPassword()) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
});

passwordConfirmInput.addEventListener("input", (event) => {
  if (checkPasswordConfirm()) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
});

form.addEventListener("submit", (event) => {
  if (checkAllInputs()) {
    console.log("Success");
  } else {
    console.log("Error");
  }
});
