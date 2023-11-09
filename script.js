function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const errorMessages = [];

    if (fullName.length < 5) {
        errorMessages.push("Name must be at least 5 characters long.");
    }

    if (!email.includes("@")) {
        errorMessages.push("Enter a valid email address.");
    }

    if (phone.length !== 10 || phone === "1234567890") {
        errorMessages.push("Enter a valid 10-digit phone number.");
    }

    if (password === "password" || password === fullName || password.length < 8) {
        errorMessages.push("Password is not strong enough.");
    }

    if (password !== confirmPassword) {
        errorMessages.push("Passwords do not match.");
    }

    const errorDisplay = document.getElementById("errorMessages");
    errorDisplay.innerHTML = errorMessages.join("<br>");

    return errorMessages.length === 0;
}
