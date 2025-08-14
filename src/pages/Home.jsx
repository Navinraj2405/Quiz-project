 import { useNavigate } from "react-router-dom";

function Home({ user, setUser }) {
  const navigate = useNavigate();

  return (
    <div className="">

      <nav className="p-5 flex justify-between items-center shadow-xl bg-gray-100">
<h1 className="text-3xl font-bold ">Welcome to the App</h1>
 <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={() => navigate("/table")}
        >
          Go to Table
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2"
          onClick={() => navigate("/quiz")}
          disabled={!user}
        >
          Start Quiz
        </button>
      </div>
      </nav>
      
      <div className="mt-52 text-center">
        <label className="text-xl font-semibold">Name:</label>
        <input
          className="border p-2 ml-2 w-52 rounded-xl"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Please enter your name...."
        />
      </div>
     
    </div>
  );
}

export default Home;
