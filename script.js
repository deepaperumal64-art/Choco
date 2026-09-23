function shopNow() {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please enter Email ID and Password");
        return;
    }

    alert("Login successful! 🍫");
}

function showRegister() {
    document.getElementById("registerBox").style.display = "block";
}

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;

    if (name === "" || email === "" || password === "" || dob === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Registration successful! Welcome to ChocoMart 💕");
}
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please enter Email ID and Password");
        return;
    }

    alert("Login successful! 🍫");
}

function showRegister() {
    document.getElementById("registerBox").style.display = "block";
}

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;

    if (name === "" || email === "" || password === "" || dob === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Registration successful! Welcome to ChocoMart 💕");
}
let cart = JSON.parse(localStorage.getItem("chocoCart")) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem("chocoCart", JSON.stringify(cart));
    alert(product + " added to cart! 🛒🍫");
}