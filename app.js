const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addError("firstname", "First Name can not be empty");
  } else {
    removeError("firstname");
  }

  if (lastName === "") {
    addError("lastname", "Last Name can not be empty");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    addError("email", "Email can not be empty");
  } else {
    removeError("email");
  }

  if (password === "") {
    addError("password", "Password can not be empty");
  } else {
    removeError("password");
  }
});

function addError(name, message) {
  const i = form[name].parentNode.querySelector("i");
  i.innerText = message;
  i.style.display = "inline";

  form[name].parentNode.querySelector("img").style.display = "block";
  form[name].parentNode.querySelector("input").style.border =
    "2px solid hsl(0, 100%, 74%)";
  form[name].parentNode.style.marginBottom = "3.5rem";
}

function removeError(name) {
  const i = form[name].parentNode.querySelector("i");
  i.innerText = "";
  i.style.display = "none";

  form[name].parentNode.querySelector("img").style.display = "none";
  form[name].parentNode.querySelector("input").style.border =
    "1px solid lightgray";
  form[name].parentNode.style.marginBottom = "2rem";
}
