const valName = new RegExp("^[a-zA-Z ]{2,30}$");
const valEmail = new RegExp("^[a-zA-Z]*20[0-9]{5}@akgec\.ac\.in$");
const errorCode = ["*Max. 25, Characters Only", "*Use College Email ID"];

function validateForm() {

  clearErrors();
  let returnVal = true;
  const nameError = document.getElementById("name");
  const emailError = document.getElementById("email");
  const Name = form['Name'].value;
  const Email = form['Email'].value;

  if (!valName.test(Name)) {
    seterror(nameError[1], errorCode[0]);
    returnVal = false;
  }

  if (!valEmail.test(Email)) {
    seterror(emailError[1], errorCode[1]);
    returnVal = false;
  }
  return returnVal;
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearErrors() {
  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

const inputs = document.querySelectorAll(".input-field");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

function moveSlider() {
  let index = this.dataset.value;
  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;
}