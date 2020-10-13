const context = {};

function load() {
    context.interviewSection = document.getElementById('interview');
}

function beginInterview() {
    context.interviewSection.classList.add('started');
}

function showAnswer() {
    context.interviewSection.classList.add('answered');
}

function showQuestion() {
    context.interviewSection.classList.remove('answered');
}

window.addEventListener('load', load);