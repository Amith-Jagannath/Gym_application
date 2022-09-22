const btn = document.querySelector("#btn");
const login_nav = document.querySelector("#btn2");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseRegister = document.querySelector(".btn--close-modal-register");
const btncloseLogin = document.querySelector(".btn--close-modal-login");
const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const register = document.querySelector("#register");
const login = document.querySelector(".login");
const loginBtn = document.querySelector("#loginBtn");
btn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
login_nav.addEventListener("click", function (e) {
  login.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btncloseRegister.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
btncloseLogin.addEventListener("click", function () {
  console.log("closed");
  login.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  console.log("overlay");
  login.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
register.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log(nameRegister.value);
  console.log(passwordRegister.value);
  console.log(emailRegister.value);
  if (
    nameRegister.value != "" ||
    passwordRegister.value != "" ||
    emailRegister.value != ""
  )
    alert("Successfully Registered, Thank You!!");
  else alert("Fields cannot be empty");
});

//login         modal opening button

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  login.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log(emailLogin.value);
  console.log(passwordLogin.value);
  if (passwordLogin.value != "" || emailLogin.value != "")
    alert("Successfully Logged In!!");
  else alert("Fields cannot be empty");
});
