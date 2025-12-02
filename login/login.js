function login() {
    event.preventDefault();
    userName = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (userName == "Adham" && password == 12345) {
        window.location.href = "../t11/f.html";
    }
}
