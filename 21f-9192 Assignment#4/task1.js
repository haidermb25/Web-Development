$(document).ready(function() {
  // SignIn form validation
  $(".signIn .frm").submit(function(event) {
    var username = $(this).find('input[type="text"]').val().trim();
    var password = $(this).find('input[type="password"]').val().trim();

    if (username === '' || password === '') {
      alert("Please fill in all fields for Sign In.");
      event.preventDefault();
    }
  });

  // SignUp form validation
  $(".signUp .frm").submit(function(event) {
    var fullName = $(this).find('#fullName').val().trim();
    var email = $(this).find('#email').val().trim();
    var password = $(this).find('#password').val().trim();
    var confirmPassword = $(this).find('#confirmPassword').val().trim();
    var phoneNumber = $(this).find('#phoneNumber').val().trim();
    var age = $(this).find('#number').val().trim();
    var gender = $(this).find('#gender').val().trim();
    var address = $(this).find('#address').val().trim();

    // Password validation
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least one special character and one numeric character.");
      event.preventDefault();
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email address must be in a valid format.");
      event.preventDefault();
    }

    // Age validation
    if (isNaN(age) || age < 18 || age > 100) {
      alert("Age must be a valid number between 18 and 100.");
      event.preventDefault();
    }

    // Phone number validation
    var phoneNumberRegex = /^03[0-9]{9}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      alert("Phone number must be in Pakistani format (e.g., 03012345678).");
      event.preventDefault();
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      event.preventDefault();
    }

    // Other required fields validation
    if (fullName === '' || confirmPassword === '' || phoneNumber === '' || gender === '' || address === '') {
      alert("Please fill in all required fields for Sign Up.");
      event.preventDefault();
    }
  });

  // Clear button functionality
  $(".btn1 button[type='clear']").click(function(event) {
    $(this).closest('form').find('input, select, textarea').val('');
    event.preventDefault();
  });
});
