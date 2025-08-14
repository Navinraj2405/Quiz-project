import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
  {
    question: "What is JSX in React?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON Extension",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "Which hook is used for managing state in functional components?",
    options: ["useState", "useEffect", "useContext"],
    answer: "useState",
  },
  {
    question: "What does the useEffect hook do?",
    options: [
      "Handles side effects in components",
      "Directly updates the DOM",
      "Creates new components",
    ],
    answer: "Handles side effects in components",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A lightweight copy of the real DOM",
      "A browser extension",
      "A JavaScript library",
    ],
    answer: "A lightweight copy of the real DOM",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["Using props", "Using state", "Using context"],
    answer: "Using props",
  },
  {
    question: "What is the default port for a React app started with Vite?",
    options: ["3000", "5173", "8080"],
    answer: "5173",
  },

];

function Quiz({ setScore, user }) {
  const [questionIdx, setQuestionIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const handleAnswer = (selected) => {
    if (selected === questions[questionIdx].answer) {
      setScore((prev) => prev + 1);
    }
    if (questionIdx < questions.length - 1) {
      setQuestionIdx((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Quiz</h1>
      <h2 className="mt-3 text-2xl font-semibold">{questionIdx + 1}. {questions[questionIdx].question}</h2>
      {questions[questionIdx].options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(option)}
          className="border px-3 py-1 mr-2 mt-5 bg-gray-100 shadow-xl"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
