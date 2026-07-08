document.addEventListener("DOMContentLoaded", function () {
  // Wait until the contact form exists in the DOM
  const checkFormLoaded = setInterval(() => {
    const form = document.getElementById("contactForm");
    if (form) {
      clearInterval(checkFormLoaded);

      // Initialize EmailJS
      emailjs.init("1KZVt_vm8rBsXNPo-"); // Your public key

      const messageBox = document.getElementById("formMessage");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_g1flwm8", "template_dlqn03g", form)
          .then(() => {
            messageBox.style.display = "block";
            messageBox.style.color = "green";
            messageBox.textContent = "✅ Thank you! Your message has been sent successfully.";
            form.reset();
          })
          .catch((error) => {
            messageBox.style.display = "block";
            messageBox.style.color = "red";
            messageBox.textContent = "❌ Failed to send message. Please try again later.";
            console.error("EmailJS error:", error);
          });
      });
    }
  }, 500); // Check every 0.5 sec until form is loaded
});
