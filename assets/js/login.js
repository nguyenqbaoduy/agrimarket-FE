// import { ProducService } from "./services/product";

document.querySelector(".img-btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s-signup");
});

const formLogin = document.querySelector(".sign-in");
const btn_login = document.querySelector("#btn-login");
const usernameLogin = document.getElementById("login-username");
const passwordLogin = document.getElementById("login-password");
const eye = document.querySelector(".eye-pw");

const formRegister = document.querySelector(".sign-up");
const btn_register = document.querySelector("#btn-register");
const usernameRegister = formRegister.querySelector(".username");
const passwordRegister = formRegister.querySelector(".password");
const fullNameRegister = formRegister.querySelector(".fullname");
const emailRegister = formRegister.querySelector(".email");
const confirmPasswordRegister = formRegister.querySelector(".confirm-password");
const phoneRegister = formRegister.querySelector(".phone");

btn_login.addEventListener("click", async function () {
  try {
    const res = await axiosClient.post("/users/signin", {
      username: usernameLogin.value,
      password: passwordLogin.value,
    });
    if (res.success) {
      window.localStorage.setItem("fullname", res.username);
      window.localStorage.setItem("address", res.address);
      window.localStorage.setItem("phone", res.phone);
      window.localStorage.setItem("email", res.email);
      window.localStorage.setItem("userID", res.userID);
       window.location.href = "/index.html";
    }
  } catch (error) {
    alert(error)
    alert("Tài khoản hoặc mật khẩu của bạn không chính xác 😥😥😥");
  }
});

btn_register.addEventListener("click", async function () {
  try {
    if (
      passwordRegister.value.trim() !== confirmPasswordRegister.value.trim()
    ) {
      alert("Mật khẩu không trùng khớp");
      return;
    }

    const res = await axiosClient.post("/users/signup", {
      fullname: fullNameRegister.value,
      username: usernameRegister.value,
      phone: phoneRegister.value,
      email: emailRegister.value,
      password: passwordRegister.value,
      repeat_password: confirmPasswordRegister.value,
    });
    if (res.success) {
      window.location.href = "/login.html";
      alert("Chúc mừng bạn đã đăng ký thành công 🤗🤗🤗")
      localStorage.setItem(fullname, fullNameRegister)
    }
  }catch (error) {
    // sendSignup();
    // alert("Đăng ký thất bại, vui lòng nhập đầy đủ thông tin!!! 🤔🤔🤔");
  }
});

eye.addEventListener("click", function () {
  if (passwordLogin.type == "password") {
    passwordLogin.type = "text";
  } else {
    passwordLogin.type = "password";
  }
});

function sendLogin() {
  // value
  var nameValue = document.querySelector("#login-username");
  var passValue = document.querySelector("#login-password");
  // name of value
  var usernameLogin = document.querySelector(".username-name");
  var passwordLogin = document.querySelector(".password-pw");
  
  if (nameValue.value == "") {
    usernameLogin.style.color = "red";
  } else {
    usernameLogin.style.color = "#505f75";
  }
  if (passValue.value == "") {
    passwordLogin.style.color = "red";
  } else {
    passwordLogin.style.color = "#505f75";
  }
  
}

function sendSignup() {
  // value
  var fullnameValue = document.querySelector(".fullname");
  var phoneValue = document.querySelector(".phone");
  var emailValue = document.querySelector(".email");
  var usernameValue = document.querySelector(".username");
  var passwordValue = document.querySelector(".password");
  var cfPasswordValue = document.querySelector(".confirm-password");
  // name of value
  var fullnameSignup = document.querySelector(".sign-up-name");
  var phoneSignup = document.querySelector(".sign-up-phone");
  var emailSignup = document.querySelector(".sign-up-email");
  var usernameSignup = document.querySelector(".sign-up-username");
  var passwordSignup = document.querySelector(".sign-up-password");
  var cfPasswordSignup = document.querySelector(".sign-up-cfPassword");
  // toast
  var toastName = document.querySelector('.toast-name')
  var toastPhone = document.querySelector('.toast-phone')
  var toastEmail = document.querySelector('.toast-email')
  var toastUsername = document.querySelector('.toast-username')
  var toastPassword = document.querySelector('.toast-password')
  var toastCf = document.querySelector('.toast-cf')

  if (fullnameValue.value == "" || fullnameValue.value.length < 6) {
    toastName.classList.remove("hide")
  } else {
    toastName.classList.add("hide")
  }

  if (phoneValue.value == "" || isNaN(phoneValue.value) || phoneValue.value.length > 10) {
    toastPhone.classList.remove("hide")
  } else {
    toastPhone.classList.add("hide")
  }
  if (emailValue.value == "") {
    toastEmail.classList.remove("hide")
  } else {
    toastEmail.classList.add("hide")
  }

  if (passwordValue.value == "" || passwordValue.value.length < 6) {
    toastPassword.classList.remove("hide")
  } else {
    toastPassword.classList.add("hide")
  }

  if (cfPasswordValue.value != passwordValue.value) {
    toastCf.classList.remove("hide")
  } else {
    toastCf.classList.add("hide")
  }
}
