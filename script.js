// Object to store selected answers for each question
let selectedAnswers = {};

// Function to handle answer selection
function selectAnswer(questionNumber, button) {
    // Deselect all buttons in the current question
    const buttons = document.querySelectorAll(`#question${questionNumber} .answer-palette button`);
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Select the clicked button
    button.classList.add('selected');
    selectedAnswers[questionNumber] = button.textContent; // Save selected answer
}

// Function to handle submission of the answer
function submitAnswer(questionNumber) {
    if (selectedAnswers[questionNumber]) {
        // Store the selected answer in local storage
        localStorage.setItem(`question${questionNumber}`, selectedAnswers[questionNumber]);
        // Move to the next question
        nextQuestion(questionNumber + 1);
    } else {
        // Alert if no answer is selected
        alert('Please select an answer before submitting.');
    }
}

// Function to show the next question
function nextQuestion(questionNumber) {
    if (questionNumber <= 3) {
        // Hide the current question and show the next one
        document.getElementById(`question${questionNumber - 1}`).style.display = 'none';
        document.getElementById(`question${questionNumber}`).style.display = 'flex';
    } else {
        // All questions answered, show the final screen
        showTitleScreen();
    }
}

// Function to show the final title screen
function showTitleScreen() {
    document.getElementById('question-container').style.display = 'none'; // Hide questions
    document.getElementById('title-screen').style.display = 'block'; // Show title screen
    localStorage.setItem('answered', 'true'); // Mark the survey as completed
}

// Event listener to check if the survey has been completed
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('answered') === 'true') {
        // If already answered, show the title screen
        showTitleScreen();
    } else {
        // Otherwise, start with the first question
        document.getElementById('question1').style.display = 'flex';
    }
});
