document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello Everyone , I`m";
    const welcomeTextElement = document.getElementById("welcomeText");
    let index = 0;
    let isAdding = true;
    let delay = 100;

    function typeEffect() {
        welcomeTextElement.innerHTML = text.substring(0, index);

        if (isAdding) {
            if (index < text.length) {
                index++;
                delay = 100;
            } else {
                isAdding = false;
                delay = 500;
            }
        } else {
            if (index > 0) {
                index--;
                delay = 100;
            } else {
                isAdding = true;
                delay = 200;
            }
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();

    // Intersection Observer for pop-up effect
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('popup-visible');
            } else {
                entry.target.classList.remove('popup-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.popup').forEach(section => {
        observer.observe(section);
    });
});
