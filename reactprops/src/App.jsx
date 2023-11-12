import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "Akhter",
  //   age: 23,
  // };
  return (
    <>
      <h1 className="bg-blue-400 text-white rounded-xl p-4 mb-4 cursor-pointer">
        Tailwind CSS!
      </h1>
      <Card username={"Akhter"} btnText="click me!" />
      <Card username={"Mudassir"} btnText="visit me!" />
    </>
  );
}

export default App;
