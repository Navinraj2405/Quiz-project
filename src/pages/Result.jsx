 import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result({ user, score }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="p-6 text-center">
      <h1 className="p-6  text-3xl font-bold">Quiz Completed</h1>
      <p className="mt-3 text-2xl font-semibold">
        Hello <b>{user}</b>, your score is {score}.
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-5"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Result;
