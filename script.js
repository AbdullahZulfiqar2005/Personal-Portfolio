
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_hhjsa2c";
    const templateID = "template_cci5ve8"; 
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
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function () {
        const projectDetails = this.parentNode.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
       
      
        this.setAttribute('aria-expanded', !isExpanded);
        
        
        if (isExpanded) {
            projectDetails.style.maxHeight = null;
        } else {
            projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projectHeaders = document.querySelectorAll('.project-header');

    projectHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const card = this.closest('.project-card');
            card.classList.toggle('expanded');
        });
    });
});
