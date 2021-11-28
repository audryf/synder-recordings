// VARIABLES
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const contactReason = document.querySelector('#contact-reason');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit-button');
const contactForm = document.querySelector('.form-wrapper');
const firstNameField = document.querySelector('.form-first-name')
const firstNameError = document.createElement('p');
const lastNameField = document.querySelector('.form-last-name')
const lastNameError = document.createElement('p');
const emailField = document.querySelector('.form-email')
const emailError = document.createElement('p');
const contactReasonField = document.querySelector('.form-contact-reason')
const contactReasonError = document.createElement('p');
const messageField = document.querySelector('.form-message')
const messageError = document.createElement('p');
const successMessage = document.createElement('p');


const validate = () => {
   
    if (firstName.value === '') {
        firstNameError.classList.add('error')
        firstNameError.textContent = 'Please enter your first name';
        firstNameField.appendChild(firstNameError)
        setTimeout(() => {
            firstNameError.remove();
        }, 3000)
    } 
    if (lastName.value === '') {
        lastNameError.classList.add('error')
        lastNameError.textContent = 'Please enter your last name';
        lastNameField.appendChild(lastNameError)
        setTimeout(() => {
            lastNameError.remove();
        }, 3000)
    } 
    if (email.value === '') {
        emailError.classList.add('error')
        emailError.textContent = 'Please enter your email';
        emailField.appendChild(emailError)
        setTimeout(() => {
            emailError.remove();
        }, 3000)
    } 
    if (contactReason.value === '') {
        contactReasonError.classList.add('error')
        contactReasonError.textContent = 'Please enter your contact reason';
        contactReasonField.appendChild(contactReasonError)
        setTimeout(() => {
            contactReasonError.remove();
        }, 3000)
    } 
    if (message.value === '') {
        messageError.classList.add('error')
        messageError.textContent = 'Please enter your message';
        messageField.appendChild(messageError)
        setTimeout(() => {
            messageError.remove();
        }, 3000)
    }
    if (firstName.value && lastName.value && email.value && contactReason.value && message.value) {
        submit.addEventListener('click', (event) => {
            contactForm.reset();
        })
    } 
}

submit.addEventListener('click', validate);
