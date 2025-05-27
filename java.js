const questions = [
  {
    question: "1. What is the basic unit of life?",
    options: {
      A: "Atom",
      B: "Cell",
      C: "Tissue"
    },
    answer: "B"
  },
  {
    question: "2. What organ pumps blood?",
    options: {
      A: "Heart",
      B: "Lung",
      C: "Liver"
    },
    answer: "A"
  },
  {
    question: "3. What process makes food in plants?",
    options: {
      A: "Photosynthesis",
      B: "Respiration",
      C: "Digestion"
    },
    answer: "A"
  },
  {
    question: "4. Which gas do humans exhale?",
    options: {
      A: "Oxygen",
      B: "Nitrogen",
      C: "Carbon dioxide"
    },
    answer: "C"
  },
  {
    question: "5. What organ filters blood?",
    options: {
      A: "Liver",
      B: "Kidney",
      C: "Heart"
    },
    answer: "B"
  },
  {
    question: "6. What carries oxygen in blood?",
    options: {
      A: "White blood cells",
      B: "Red blood cells",
      C: "Platelets"
    },
    answer: "B"
  },
  {
    question: "7. What is the powerhouse of the cell?",
    options: {
      A: "Nucleus",
      B: "Mitochondria",
      C: "Golgi body"
    },
    answer: "B"
  },
  {
    question: "8. Which vitamin is made from sunlight?",
    options: {
      A: "Vitamin A",
      B: "Vitamin C",
      C: "Vitamin D"
    },
    answer: "C"
  },
  {
    question: "9. What is the largest organ in the human body?",
    options: {
      A: "Skin",
      B: "Liver",
      C: "Heart"
    },
    answer: "A"
  },
  {
    question: "10. Which joint is in the shoulder?",
    options: {
      A: "Hinge",
      B: "Ball and socket",
      C: "Pivot"
    },
    answer: "B"
  },
  {
    question: "11. What type of blood cell fights infection?",
    options: {
      A: "Red",
      B: "White",
      C: "Platelets"
    },
    answer: "B"
  },
  {
    question: "12. What pigment makes plants green?",
    options: {
      A: "Melanin",
      B: "Chlorophyll",
      C: "Keratin"
    },
    answer: "B"
  },
  {
    question: "13. Which part of a plant absorbs water?",
    options: {
      A: "Leaves",
      B: "Roots",
      C: "Stem"
    },
    answer: "B"
  },
  {
    question: "14. What controls body functions with hormones?",
    options: {
      A: "Endocrine system",
      B: "Nervous system",
      C: "Digestive system"
    },
    answer: "A"
  },
  {
    question: "15. What is needed for growth and repair?",
    options: {
      A: "Carbohydrates",
      B: "Proteins",
      C: "Fats"
    },
    answer: "B"
  },
  {
    question: "16. What connects muscles to bones?",
    options: {
      A: "Ligaments",
      B: "Tendons",
      C: "Cartilage"
    },
    answer: "B"
  },
  {
    question: "17. What is the brain part for coordination?",
    options: {
      A: "Cerebrum",
      B: "Medulla",
      C: "Cerebellum"
    },
    answer: "C"
  },
  {
    question: "18. Which blood type is universal donor?",
    options: {
      A: "O negative",
      B: "AB positive",
      C: "B negative"
    },
    answer: "A"
  },
  {
    question: "19. Which disease is due to lack of insulin?",
    options: {
      A: "Malaria",
      B: "Diabetes",
      C: "Tuberculosis"
    },
    answer: "B"
  },
  {
    question: "20. Which organ helps you breathe?",
    options: {
      A: "Heart",
      B: "Liver",
      C: "Lungs"
    },
    answer: "C"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  document.getElementById("A").innerText = `A. ${q.options.A}`;
  document.getElementById("B").innerText = `B. ${q.options.B}`;
  document.getElementById("C").innerText = `C. ${q.options.C}`;
  clearClasses();
}

function selectAnswer(choice) {
  selectedAnswer = choice;
  clearClasses();
  const correct = questions[currentQuestion].answer;
  document.getElementById(choice).classList.add(
    choice === correct ? "correct" : "wrong"
  );
  if (choice !== correct) {
    document.getElementById(correct).classList.add("correct");
  }
  if (choice === correct) score++;
  disableOptions();
}

function clearClasses() {
  ["A", "B", "C"].forEach((id) => {
    document.getElementById(id).classList.remove("correct", "wrong");
    document.getElementById(id).disabled = false;
  });
}

function disableOptions() {
  ["A", "B", "C"].forEach((id) => {
    document.getElementById(id).disabled = true;
  });
}

function nextQuestion() {
  if (selectedAnswer === "") return;
  currentQuestion++;
  selectedAnswer = "";
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}`;
  }
}

showQuestion();
