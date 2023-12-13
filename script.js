// Function to validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Reset error messages and styles
  document.querySelectorAll('.error-message').forEach(function(element) {
    element.style.display = 'none';
  });

  document.querySelectorAll('.input-group input').forEach(function(input) {
    input.classList.remove('invalid');
  });

  // Validation and error handling
  let valid = true;

  if (fullName.trim() === '') {
    document.getElementById('fullNameError').innerText = 'Please enter your full name.';
    document.getElementById('fullNameError').style.display = 'block';
    document.getElementById('fullName').classList.add('invalid');
    valid = false;
  }

  if (!validateEmail(email)) {
    document.getElementById('emailError').innerText = 'Please enter a valid email address.';
    document.getElementById('emailError').style.display = 'block';
    document.getElementById('email').classList.add('invalid');
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById('passwordError').innerText = 'Password should be at least 6 characters long.';
    document.getElementById('passwordError').style.display = 'block';
    document.getElementById('password').classList.add('invalid');
    valid = false;
  }

  if (valid) {
    // Handle form submission (e.g., send data to server)
    document.getElementById('message').innerText = 'Form submitted successfully!';
    document.getElementById('message').classList.remove('hidden');
    setTimeout(function() {
      document.getElementById('message').classList.add('hidden');
    }, 3000);

    // Clear form fields after successful submission (optional)
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
});

// Highlight input fields on focus
document.querySelectorAll('.input-group input').forEach(function(input) {
  input.addEventListener('focus', function() {
    input.classList.add('focused');
  });

  input.addEventListener('blur', function() {
    input.classList.remove('focused');
  });
});
