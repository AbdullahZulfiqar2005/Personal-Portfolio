document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize EmailJS with your Public Key (User ID)
(function() {
    emailjs.init("Es56Ub5rt_SHGf6yS"); // Replace with your actual Public Key
})();

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_dnvn4tg"; // Replace with your actual Service ID
    const templateID = "template_cci5ve8"; // Replace with your actual Template ID

    const formData = new FormData(this);
    const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message")
    };

    console.log("Sending email with details:", templateParams);

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            console.log("Success!", response.status, response.text);
            alert("Message sent successfully!");
        }, error => {
            console.error("Failed to send message. Error details:", error);
            alert("Failed to send message. Please try again.");
        });
});
