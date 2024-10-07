const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Homer", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "HO", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false }
        ]
    }
];

const quiz = document.querySelector(".quiz");
let num = 0;
let score = 0;

function domHandler() {
    quiz.innerHTML = `
        <h3 class="question">${questions[num].question}</h3>
        <div class="answers">
            ${questions[num].answers.map(answer => `
                <button class="answer" data-status="${answer.correct}">${answer.text}</button>
            `).join('')}
        </div>
        <button class="next-btn" style="display: none;">Next</button>
    `;
}

function nextHandler() {
    if (num < questions.length - 1) {
        num++;
        domHandler();
    } else {
        quiz.innerHTML = `<h2 class="score">Your Score is ${score} / ${questions.length}</h2>`;
    }
}

quiz.addEventListener("click", (event) => {
    if (event.target.classList.contains("answer")) {
        let answers = document.querySelectorAll(".answer");
        const isCorrect = event.target.dataset.status === "true";

        answers.forEach(answer => {
            answer.disabled = true;
            answer.classList.add("answer--red");
            if (answer.dataset.status === "true") {
                answer.classList.add("answer--correct");
            }
        });

        if (isCorrect) {
            score++;
            event.target.classList.add("answer--correct");
        } else {
            event.target.classList.add("answer--incorrect");
        }

        // Show the next button
        document.querySelector(".next-btn").style.display = "block";
    }
});

quiz.addEventListener("click", (event) => {
    if (event.target.classList.contains("next-btn")) {
        nextHandler();
    }
});

window.addEventListener("load", domHandler);
