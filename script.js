// Define the quiz data
const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      answer: 2
    }
    // Add more questions and answers here
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  
  function displayQuestion() {
    const currentQuiz = quiz[currentQuestion];
  
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";
  
    // Display answer options
    for (let i = 0; i < currentQuiz.options.length; i++) {
      const option = document.createElement("button");
      option.textContent = currentQuiz.options[i];
      option.addEventListener("click", selectAnswer);
      optionsElement.appendChild(option);
    }
  }
  
  function selectAnswer(event) {
    const selectedIndex = Array.from(optionsElement.children).indexOf(event.target);
  
    if (selectedIndex === quiz[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.textContent = `You scored ${score} out of ${quiz.length} questions!`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
  }
  
  nextButton.addEventListener("click", () => {
    checkAnswer();
  });
  
  function checkAnswer() {
    const selectedOption = document.querySelector("button.selected");
  
    if (selectedOption) {
      selectedOption.classList.remove("selected");
      selectAnswer(selectedOption);
    }
  }
  
  displayQuestion();
  