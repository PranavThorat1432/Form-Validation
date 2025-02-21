var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required.';
        return false;
    }

    if (!name.match(/^[A-Za-z\s]+$/)) {
        nameError.innerHTML = 'Only letters allowed.';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value.trim();

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone no is required.';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Enter a valid 10-digit number.';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value.trim();

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required.';
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Invalid email format.';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMsg() {
    var msg = document.getElementById('contact-msg').value.trim();
    var required = 30;
    var left = required - msg.length;

    if (left > 0) {
        msgError.innerHTML = left + ' more characters required.';
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        submitError.style.display = "block";
        submitError.innerHTML = 'Please fix errors to submit.';
        setTimeout(() => submitError.style.display = "none", 3000);
        return false;
    }

    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
    return true;
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});
