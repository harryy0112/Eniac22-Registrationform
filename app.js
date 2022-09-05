const valName = new RegExp("^[a-zA-Z ]{2,30}$");
const valEmail = new RegExp("^[a-zA-Z]*20[0-9]{5}@akgec\.ac\.in$");
const errCode = ["*Max. 25, Characters Only", "*Use College Email ID"];

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

function validateForm() {
  resetErr();

  let returnVal = true;

  const nameErr = document.getElementById("name")
  const emailErr = document.getElementById("email");

  const Name = form['Name'].value;
  const Email = form['Email'].value;

  if (!valName.test(Name)) {
    throwErr(nameErr[1], errCode[0]);
    returnVal = false;
  }

  if (!valEmail.test(Email)) {
    throwErr(emailErr[1], errCode[1]);
    returnVal = false;
  }

  return returnVal;
}

function throwErr(id, err) {
  id.innerHTML = err;
}

function resetErr() {
  const errors = document.getElementsByClassName("err");
  for (let error of errors) {
    error.innerHTML = "";
  }
}