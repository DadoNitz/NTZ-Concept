document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    var recaptcha = document.querySelector('.g-recaptcha-response').value;
    if (!recaptcha) {
        event.preventDefault();
        alert('Por favor, complete o reCAPTCHA.');
    }
});