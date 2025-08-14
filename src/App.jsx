 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import TablePage from "./pages/TablePage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/quiz" element={<Quiz user={user} setScore={setScore} />} />
        <Route path="/result" element={<Result user={user} score={score} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
