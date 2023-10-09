document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let valid = true;
    const name = document.getElementById('Name').value;
    const surname = document.getElementById('Surname').value;
    const email = document.getElementById('Email').value;
    const country = document.getElementById('Country').value;
    const nameError = document.getElementById('nameError');
    const surnameError = document.getElementById('surnameError');
    const emailError = document.getElementById('emailError');
    const countryError = document.getElementById('countryError');

    nameError.textContent = '';
    surnameError.textContent = '';
    emailError.textContent = '';
    CountryError.textContent = '';

    if (name.trim() === '') {
        valid = false;
        nameError.textContent = 'name is required';
    }

    if (surnamename.trim() === '') {
        valid = false;
        surnamenameError.textContent = 'surname is required';
    }

    if (email.trim() === '') {
        valid = false;
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
        valid = false;
        emailError.textContent = 'Invalid email format';
    }

    if (country.trim() === '') {
        valid = false;
        countryError.textContent = 'Country is required';
    }

    if (!valid) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Very basic email validation, you can use a more comprehensive regex here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
