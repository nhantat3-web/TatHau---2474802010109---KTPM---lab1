const login = require("./login");

test("Đăng nhập đúng tài khoản và mật khẩu", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Đăng nhập sai username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Đăng nhập sai password", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Đăng nhập sai cả username và password", () => {
    expect(login("user", "456")).toBe(false);
});