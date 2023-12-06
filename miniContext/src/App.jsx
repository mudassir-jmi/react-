import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-4xl font-extrabold text-center text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-5 text-white mb-8 rounded w-1/2 mx-auto">
        <span className="text-yellow-300">Login with Context API</span>
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
