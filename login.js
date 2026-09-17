function login(username, password) {
    return user === "admin" && pass === "1234";
}

// Chỉ xử lý form khi chạy trên trình duyệt
if (typeof document !== "undefined") {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const result = login(username, password);

        const message = document.getElementById("message");

        if (result) {
            message.textContent = "Đăng nhập thành công!";
        } else {
            message.textContent = "Sai tài khoản hoặc mật khẩu!";
        }
    });
}

// Cho Jest sử dụng hàm login
if (typeof module !== "undefined") {
    module.exports = login;
}
