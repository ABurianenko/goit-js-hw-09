'use strict'

const formData = {
    email: "",
    message: "",
}

const storageKey = "feedback-form-state";

const form = document.querySelector(`.feedback-form`);
const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
const submitButton = document.querySelector('button');

const savedFeedbackData = localStorage.getItem(storageKey);

let parsedFeedbackData = {};
if (savedFeedbackData) {
    try {
        parsedFeedbackData = JSON.parse(savedFeedbackData);
    } catch (error) {}
}

inputEmail.value = parsedFeedbackData.email || "";
inputMessage.value = parsedFeedbackData.message || "";

form.addEventListener("input", handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
    formData.email = inputEmail.value.trim();
    formData.message = inputMessage.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
}

function handleFormSubmit(event) {
    event.preventDefault();

    if (!inputEmail.value || !inputMessage.value) {
        return alert('Fill please all fields');
    }

    console.log(formData);

    localStorage.removeItem(storageKey);

    event.currentTarget.reset();
}
