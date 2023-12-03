import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
        onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
