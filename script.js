// Array with users
const confirmedUsers = [ {
    username: "fredrik", 
    password: "12345"
}
]

const container = document.getElementById("login-content");
const success = document.getElementById("success");
const welcome = document.getElementById("welcometext");
const logout = document.getElementById("logoutbtn");
const error = document.getElementById("incorrect");

function init() {
    if (localStorage.getItem("isLoggedIn")) {
        succesfulLogIn();
    }
};
init();

function logIn() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    for (let i = 0; i < confirmedUsers.length; i++){
        if (username.value === confirmedUsers[i].username && password.value === confirmedUsers[i].password) {
            localStorage.setItem("isLoggedIn", confirmedUsers[i].username);
            succesfulLogIn();
            return
        }
    }
    error.innerText = ("Incorrect username or password, please try again!");
    error.style.display = "flex";
};

function succesfulLogIn() {
    const getUser = localStorage.getItem("isLoggedIn");
    container.style.display = "none";
    success.style.display = "flex";
    welcome.innerText = (getUser + " succesfully logged in!");
    success.appendChild(welcome);
    logout.style.display = "block";
};

function logOut() {
    localStorage.removeItem("isLoggedIn");
    logOutUI();
};

function logOutUI() {
    container.style.display = "flex";
    success.style.display = "none";
    logout.style.display = "none";
    error.style.display = "none";
};