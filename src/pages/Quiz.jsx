 import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" }
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
