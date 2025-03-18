// Footer component
const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-info">
                    <div class="footer-logo">
                        <a href="${window.location.pathname.includes('/positions/') ? '../index.html' : 'index.html'}">
                            <img src="https://cdn.prod.website-files.com/66cf17d804de8a631e087651/66d09ab394bd834bf4067c59_logo.svg" alt="Quidkey Logo">
                        </a>
                    </div>
                    <p>Copyright © 2025 BNQZ Inc.</p>
                    <p>All rights reserved.</p>
                </div>
                <div class="footer-links">
                    <div class="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="https://www.quidkey.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                            <li><a href="https://www.quidkey.com/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                            <li><a href="#">Manage Cookies</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="mailto:support@quidkey.com">support@quidkey.com</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/company/quidkey/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

// Function to inject the footer
function injectFooter() {
    // Create a placeholder div
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.innerHTML = footerHTML;

    // Get the container element
    const container = document.querySelector('.container');
    if (container) {
        // Insert the footer before the closing tag of the container
        container.appendChild(footerPlaceholder.firstElementChild);
    }
}

// Inject the footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', injectFooter);
