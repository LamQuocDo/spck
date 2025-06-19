// Kiểm tra xác nhận mật khẩu
const form = document.getElementById("registerForm");
form.addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  if (password !== confirm) {
    e.preventDefault();
    alert("Mật khẩu không khớp!");
  }
});
