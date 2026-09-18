// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Open and close mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent =
                "Message sent successfully! Thank you for contacting me. I will get back to you soon.";

            formStatus.style.color = "green";

            contactForm.reset();

        } else {
            formStatus.textContent =
                "Sorry, there was a problem sending your message. Please try again.";

            formStatus.style.color = "red";
        }

    } catch (error) {
        formStatus.textContent =
            "Unable to send the message. Please check your internet connection and try again.";

        formStatus.style.color = "red";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
});