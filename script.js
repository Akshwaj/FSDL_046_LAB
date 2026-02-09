const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMsg").textContent = "";

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passError").textContent = "Password must be 6+ characters";
        valid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").textContent = "Phone must be 10 digits";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").textContent = "Form submitted successfully!";
        form.reset();
    }
});
