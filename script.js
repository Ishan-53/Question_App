let selectedAnswers = {};

function selectAnswer(questionNumber, button) {
    // Deselect all buttons in the current question
    const buttons = document.querySelectorAll(`#question${questionNumber} .answer-palette button`);
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Select the clicked button
    button.classList.add('selected');
    selectedAnswers[questionNumber] = button.textContent;
}

function submitAnswer(questionNumber) {
    if (selectedAnswers[questionNumber]) {
        localStorage.setItem(`question${questionNumber}`, selectedAnswers[questionNumber]);
        nextQuestion(questionNumber + 1);
    } else {
        alert('Please select an answer before submitting.');
    }
}

function nextQuestion(questionNumber) {
    if (questionNumber <= 3) {
        document.getElementById(`question${questionNumber - 1}`).style.display = 'none';
        document.getElementById(`question${questionNumber}`).style.display = 'flex';
    } else {
        showTitleScreen();
    }
}

function showTitleScreen() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('title-screen').style.display = 'block';
    localStorage.setItem('answered', 'true');
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('answered') === 'true') {
        showTitleScreen();
    } else {
        document.getElementById('question1').style.display = 'flex';
    }
});
