const form = document.querySelector("form");

const name1 = document.getElementById("name");
const email = document.getElementById("email");
const passoword = document.getElementById("passoword ");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const input = element.parentElement;
  const error = input.querySelector(".error");
  error.textContent = message;
  input.classList.add("error");
  input.classList.remove("success");
};

const setSuccess = (element) => {
  const input = element.parentElement;
  const error = input.querySelector(".error");
  error.textContent = "";
  input.classList.add("success");
  input.classList.remove("error");
};

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const nameValue = name1.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Giving message to user
  if (nameValue === "") {
    setError(name1, "Name is required");
  } else {
    setSuccess(name1);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!validEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password length must be greater then 8");
  } else {
    setSuccess(password);
  }
};
