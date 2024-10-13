function checkAnswer(formId, correctValue, feedbackId) {
    const form = document.getElementById(formId);
    const feedback = document.getElementById(feedbackId);
    const selectedOption = form.querySelector('input[name="q1"]:checked');

    if (selectedOption) {
        if (selectedOption.value === correctValue) {
            feedback.textContent = "✔ The Correct Answer is C²N⁻¹m⁻²";
            feedback.className = "feedback correct";
        } else {
            feedback.textContent = "✘ The Correct Answer is C²N⁻¹m⁻²";
            feedback.className = "feedback incorrect";
        }
        feedback.style.display = "block";
    } else {
        alert("Please select an option.");
    }
}
