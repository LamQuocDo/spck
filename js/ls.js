const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleText = document.getElementById("toggleText");
const formTitle = document.getElementById("formTitle");

let isLogin = true;

function updateForm() {
  if (isLogin) {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    formTitle.textContent = "Đăng nhập";
    toggleText.innerHTML = `Chưa có tài khoản? <a href="#" id="toggleLink">Đăng ký</a>`;
  } else {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    formTitle.textContent = "Đăng ký";
    toggleText.innerHTML = `Đã có tài khoản? <a href="#" id="toggleLink">Đăng nhập</a>`;
  }
  document.getElementById("toggleLink").addEventListener("click", toggle);
}

function toggle(e) {
  e.preventDefault();
  isLogin = !isLogin;
  updateForm();
}

document.getElementById("toggleLink").addEventListener("click", toggle);

// Validation login
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = document.getElementById("login_user");
  let pass = document.getElementById("login_password");
  let valid = true;

  if (user.value.length < 6 || user.value.length > 18) {
    user.classList.add("is-invalid");
    valid = false;
  } else {
    user.classList.remove("is-invalid");
  }

  if (pass.value.length < 6 || pass.value.length > 18) {
    pass.classList.add("is-invalid");
    valid = false;
  } else {
    pass.classList.remove("is-invalid");
  }

  if (valid) alert("Đăng nhập thành công");
});

// Validate form
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = document.getElementById("reg_username");
  let email = document.getElementById("reg_email");
  let pass = document.getElementById("reg_password");
  let confirm = document.getElementById("reg_confirm");

  let valid = true;

  if (user.value.length < 6 || user.value.length > 18) {
    user.classList.add("is-invalid");
    valid = false;
  } else {
    user.classList.remove("is-invalid");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add("is-invalid");
    valid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (pass.value.length < 6 || pass.value.length > 18) {
    pass.classList.add("is-invalid");
    valid = false;
  } else {
    pass.classList.remove("is-invalid");
  }

  if (pass.value !== confirm.value) {
    confirm.classList.add("is-invalid");
    valid = false;
  } else {
    confirm.classList.remove("is-invalid");
  }

  if (valid) {
    alert("Đăng ký thành công");
    toggle(e);
  }
});
