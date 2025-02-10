// login-script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demo (you can replace this with real authentication logic)
    if (username === "user" && password === "password123") {
        // Redirect to the homepage
        window.location.href = "/homepage/home.html"; // Redirect to home page (update the path as needed)
    } else {
        // Show an error message (for now, just alert)
        alert("Invalid username or password.");
    }
});
