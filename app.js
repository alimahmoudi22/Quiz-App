const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {
                text: "Berlin",
                correct: false
            },
            {
                text: "Paris",
                correct: true
            },
            {
                text: "Rome",
                correct: false
            },
            {
                text: "Madrid",
                correct: false
            }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {
                text: "William Shakespeare",
                correct: true
            },
            {
                text: "Leo Tolstoy",
                correct: false
            },
            {
                text: "Mark Twain",
                correct: false
            },
            {
                text: "Homer",
                correct: false
            }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Venus",
                correct: false
            },
            {
                text: "Mars",
                correct: true
            },
            {
                text: "Jupiter",
                correct: false
            },
            {
                text: "Saturn",
                correct: false
            }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {
                text: "Atlantic Ocean",
                correct: false
            },
            {
                text: "Indian Ocean",
                correct: false
            },
            {
                text: "Pacific Ocean",
                correct: true
            },
            {
                text: "Arctic Ocean",
                correct: false
            }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {
                text: "HO",
                correct: false
            },
            {
                text: "H2O",
                correct: true
            },
            {
                text: "O2",
                correct: false
            },
            {
                text: "CO2",
                correct: false
            }
        ]
    }
];
const quiz = document.querySelector(".quiz");
let num = 0;
let score = 0;

function domHandler(){
    quiz.innerHTML = "";
    quiz.insertAdjacentHTML("beforeend",`<h3 class="question">
                    ${questions[num].question}
                </h3>
                <div class="answers">
                    <button class="answer" data-status =${questions[num].answers[0].correct}>${questions[num].answers[0].text}</button>
                    <button class="answer" data-status =${questions[num].answers[1].correct}>${questions[num].answers[1].text}</button>
                    <button class="answer" data-status =${questions[num].answers[2].correct}>${questions[num].answers[2].text}</button>
                    <button class="answer" data-status =${questions[num].answers[3].correct}>${questions[num].answers[3].text}</button>
                </div>
                <button class="next-btn">Next</button>`)
    num++            
};

function nextHandler(){
    if(num < questions.length){
        domHandler()
    } else{
        quiz.innerHTML = '';
        quiz.insertAdjacentHTML("beforeend",`<h2 class="score">Your Score is ${score} / 5</h2>
`)
    }
}

quiz.addEventListener("click",(event) => {
    let answers = document.querySelectorAll(".answer");
    if(event.target.classList.contains("answer")){
        if(event.target.dataset.status == "true"){
            event.target.classList.add("answer--correct");
            answers.forEach((item) => {
                item.disabled = true;
            })
            score++
        }else{
            event.target.classList.add("answer--incorrect");
            answers.forEach((answer) => {
                if(answer.dataset.status == "true"){
                    answer.classList.add("answer--correct")
                    answer.disabled = true;
                }else{answer.disabled = true}
            })
        }
        let nextBtn = document.querySelector(".next-btn");
        nextBtn.style.display = "block";
        nextBtn.addEventListener("click",nextHandler);
    }
});
window.addEventListener("load",domHandler);