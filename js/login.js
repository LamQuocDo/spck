const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    e.preventDefault();
    alert('Vui lòng điền đầy đủ tên đăng nhập và mật khẩu!');
    return;
  }

  if (password.length < 8 || password.length > 16) {
    e.preventDefault();
    alert('Mật khẩu phải từ 8 đến 16 ký tự!');
    return;
  }

  // Nếu hợp lệ thì cho phép gửi form
});
