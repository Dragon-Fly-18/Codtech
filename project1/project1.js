const questions = [
      {
        question: "Who has more official goals in football?",
        answers: [
          { text: "lewandowski", correct: false },
          { text: "Ronaldo.C", correct: true },
          { text: "Ronaldo R9", correct: false },
          { text: "Messi", correct: false }
        ]
      },
      {
        question: "how many world cups does brazil have?",
        answers: [
          { text: "4", correct: false },
          { text: "5", correct: true },
          { text: "3", correct: false },
          { text: "6", correct: false }
        ]
      },
      {
        question: "how many clubs has more than 5 champions league?",
        answers: [
          { text: "4", correct: true },
          { text: "7", correct: false },
          { text: "8", correct: false },
          { text: "3", correct: false }
        ]
      },
      {
        question: "Who has more world cups in football?",
        
        answers: [
          { text: "messi", correct: false },
          { text: "ronaldo", correct: false },
          { text: "pele", correct: true },
          { text: "kaka", correct: false }
        ]
      }

    ];

    const questionEl = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const scoreContainer = document.getElementById('score-container');
    const scoreEl = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerText = "Next";
      scoreContainer.classList.add("hide");
      showQuestion();
    }

    function showQuestion() {
      resetState();
      let currentQuestion = questions[currentQuestionIndex];
      questionEl.innerText = currentQuestion.question;

      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        if (answer.correct) {
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
      });
    }

    function resetState() {
      nextButton.style.display = "none";
      answerButtons.innerHTML = "";
    }

    function selectAnswer(e) {
      const selectedBtn = e.target;
      const correct = selectedBtn.dataset.correct === "true";

      if (correct) score++;

      Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true;
      });

      nextButton.style.display = "inline-block";
    }

    function setStatusClass(button, correct) {
      button.style.backgroundColor = correct ? "#4caf50" : "#f44336";
    }

    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      resetState();
      questionEl.innerText = "";
      scoreContainer.classList.remove("hide");
      scoreEl.innerText = `${score} / ${questions.length}`;
    }

    startQuiz();