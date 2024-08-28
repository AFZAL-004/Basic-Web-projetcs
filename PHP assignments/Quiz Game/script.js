const questions = [
    {
        question: "What is the best way to get a dinosaur to sleep?",
        options: {
            A: "Sing it a lullaby",
            B: "Tell it a bedtime story",
            C: "Give it a warm glass of milk",
            D: "Play dead"
        },
        answer: 'D'
    },
    {
        question: "Why did the scarecrow become a successful neurosurgeon?",
        options: {
            A: "He was outstanding in his field",
            B: "He had a lot of brains",
            C: "He loved to scare people",
            D: "He could caw for hours"
        },
        answer: 'A'
    },
    {
        question: "What did one ocean say to the other ocean?",
        options: {
            A: "Nothing, they just waved",
            B: "They made waves",
            C: "They were deep in conversation",
            D: "They sent each other salty messages"
        },
        answer: 'A'
    },
    {
        question: "How does a penguin build its house?",
        options: {
            A: "Igloos it together",
            B: "With ice bricks",
            C: "It hires a contractor",
            D: "It uses snow and sticks"
        },
        answer: 'A'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    for (const [key, value] of Object.entries(question.options)) {
        options.innerHTML += `<button onclick="checkAnswer('${key}')">${key}. ${value}</button>`;
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Oops! Wrong answer.';
    }
    document.querySelectorAll('#options button').forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('result').innerText = '';
        document.querySelectorAll('#options button').forEach(button => button.disabled = false);
    } else {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('result').innerText = `Quiz Over! Your score is ${score}/${questions.length}`;
    }
}

// Initialize the quiz
displayQuestion();
