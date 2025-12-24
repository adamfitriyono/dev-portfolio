/**
 * Contact Form Validation and EmailJS Integration
 * Handles form submission with EmailJS service
 */

// ===========================
// EmailJS Configuration
// ===========================
// IMPORTANT: Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE', // Get from EmailJS dashboard
  SERVICE_ID: 'YOUR_SERVICE_ID', // Your email service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Your email template ID
};

// ===========================
// Initialize EmailJS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize EmailJS with your public key
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  initContactForm();
});

// ===========================
// Contact Form Handler
// ===========================
function initContactForm() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    // Get form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    };

    // Send email
    await sendEmail(formData, form);
  });

  // Real-time validation on input
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      // Clear error on input
      const errorElement = input.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.textContent = '';
      }
      input.classList.remove('error');
    });
  });
}

// ===========================
// Form Validation
// ===========================
function validateForm(form) {
  let isValid = true;

  // Get all required fields
  const fields = form.querySelectorAll('[required]');

  fields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

// ===========================
// Field Validation
// ===========================
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  const errorElement = field.parentElement.querySelector('.error-message');

  let errorMessage = '';

  // Check if empty
  if (value === '') {
    errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
  }
  // Email validation
  else if (fieldName === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      errorMessage = 'Please enter a valid email address';
    }
  }
  // Name validation (minimum 2 characters)
  else if (fieldName === 'name') {
    if (value.length < 2) {
      errorMessage = 'Name must be at least 2 characters';
    }
  }
  // Subject validation (minimum 3 characters)
  else if (fieldName === 'subject') {
    if (value.length < 3) {
      errorMessage = 'Subject must be at least 3 characters';
    }
  }
  // Message validation (minimum 10 characters)
  else if (fieldName === 'message') {
    if (value.length < 10) {
      errorMessage = 'Message must be at least 10 characters';
    }
  }

  // Display error or clear it
  if (errorMessage) {
    field.classList.add('error');
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
    return false;
  } else {
    field.classList.remove('error');
    if (errorElement) {
      errorElement.textContent = '';
    }
    return true;
  }
}

// ===========================
// Send Email via EmailJS
// ===========================
async function sendEmail(formData, form) {
  const statusElement = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  try {
    // Add loading state
    form.classList.add('sending');
    submitButton.disabled = true;

    // Hide previous status
    if (statusElement) {
      statusElement.style.display = 'none';
      statusElement.classList.remove('success', 'error');
    }

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS is not loaded');
    }

    // Check if credentials are configured
    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
      // For demo purposes - simulate success
      console.log('EmailJS not configured. Form data:', formData);

      // Show demo success message
      setTimeout(() => {
        showStatus(statusElement, 'Demo mode: EmailJS not configured yet. Please update credentials in form-validation.js', 'success');
        form.reset();
        form.classList.remove('sending');
        submitButton.disabled = false;
      }, 1500);

      return;
    }

    // Send email using EmailJS
    const response = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Portfolio Owner', // Your name
    });

    // Success
    showStatus(statusElement, "Thank you! Your message has been sent successfully. I'll get back to you soon!", 'success');

    // Reset form
    form.reset();
  } catch (error) {
    console.error('Email send error:', error);

    // Error handling
    let errorMessage = 'Oops! Something went wrong. Please try again or contact me directly via email.';

    if (error.text) {
      errorMessage = `Error: ${error.text}`;
    }

    showStatus(statusElement, errorMessage, 'error');
  } finally {
    // Remove loading state
    form.classList.remove('sending');
    submitButton.disabled = false;
  }
}

// ===========================
// Show Status Message
// ===========================
function showStatus(element, message, type) {
  if (!element) return;

  element.textContent = message;
  element.className = `form-status ${type}`;
  element.style.display = 'block';

  // Auto-hide success message after 5 seconds
  if (type === 'success') {
    setTimeout(() => {
      element.style.display = 'none';
    }, 5000);
  }
}

// ===========================
// Alternative: Native Form Submission (No EmailJS)
// ===========================
function initNativeFormSubmission() {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm(form)) {
      return;
    }

    const formData = new FormData(form);
    const statusElement = form.querySelector('.form-status');

    try {
      form.classList.add('sending');

      // Example: Send to your own backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        showStatus(statusElement, 'Message sent successfully!', 'success');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      showStatus(statusElement, 'Failed to send message. Please try again.', 'error');
    } finally {
      form.classList.remove('sending');
    }
  });
}

// ===========================
// Character Counter (Optional)
// ===========================
function initCharacterCounter() {
  const messageField = document.getElementById('message');

  if (!messageField) return;

  const counter = document.createElement('div');
  counter.className = 'character-counter';
  counter.style.cssText = `
        text-align: right;
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
    `;

  messageField.parentElement.appendChild(counter);

  const updateCounter = () => {
    const length = messageField.value.length;
    const maxLength = 500;

    counter.textContent = `${length}/${maxLength} characters`;

    if (length > maxLength) {
      counter.style.color = '#ff4444';
    } else {
      counter.style.color = 'var(--text-muted)';
    }
  };

  messageField.addEventListener('input', updateCounter);
  updateCounter();
}

// Optional: Initialize character counter
// document.addEventListener('DOMContentLoaded', initCharacterCounter);

// ===========================
// Export functions
// ===========================
window.formUtils = {
  validateForm,
  validateField,
  sendEmail,
  showStatus,
};

// ===========================
// SETUP INSTRUCTIONS
// ===========================
/*
To set up EmailJS:

1. Sign up at https://www.emailjs.com/
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}}
   - {{from_email}}
   - {{subject}}
   - {{message}}
   - {{to_name}}
4. Get your credentials:
   - Public Key (from Account > API Keys)
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
5. Update EMAILJS_CONFIG object above with your credentials

Example template:
---
Hello {{to_name}},

You have received a new message from your portfolio website.

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Best regards,
Portfolio Contact Form
---
*/
