// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you, ${name}! Your message has been received.`);

        // Optionally, clear the form
        form.reset();
    });
});
