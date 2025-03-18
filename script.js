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

    // Handle form submission
    const form = document.querySelector('#job-application-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            // Encode form data
            const formData = new FormData(form);
            const searchParams = new URLSearchParams();

            for (const pair of formData) {
                searchParams.append(pair[0], pair[1]);
            }

            // Submit to Netlify
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: searchParams.toString()
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                // Hide the form
                form.style.display = 'none';
                // Show success message
                document.querySelector('.form-success').style.display = 'block';
                // Scroll to success message
                document.querySelector('.form-success').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was a problem submitting your application. Please try again.');
            })
            .finally(() => {
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
});
