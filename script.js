document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL contains a success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success visible';
        successMessage.textContent = 'Thank you for your application! We will be in touch soon.';

        const form = document.querySelector('.application-card form');
        form.parentNode.insertBefore(successMessage, form);

        // Optionally, clear form fields
        form.reset();

        // Scroll to the success message
        window.scrollTo({
            top: document.querySelector('.application-section').offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Smooth scrolling for apply button
    const applyButton = document.querySelector('.apply-button');
    if (applyButton) {
        applyButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });

                // Focus on first input after scrolling
                setTimeout(() => {
                    const firstInput = targetElement.querySelector('input[type="text"]');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 800);
            }
        });
    }

    // Form validation enhancement
    const form = document.querySelector('form[name="job-application"]');
    if (form) {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredInputs = form.querySelectorAll('input[required]');

            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                const errorMessage = document.createElement('div');
                errorMessage.className = 'form-error';
                errorMessage.textContent = 'Please fill in all required fields.';

                // Remove any existing error messages
                const existingError = form.querySelector('.form-error');
                if (existingError) {
                    existingError.remove();
                }

                form.insertBefore(errorMessage, form.firstChild);
            }
        });
    }
});
