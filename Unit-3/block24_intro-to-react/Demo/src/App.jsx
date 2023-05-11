import { useState } from "react";
import "./App.css";

const cats = [
  { name: "Jack", breed: "Abyssinian", age: 12 },
  { name: "Kelly", breed: "Balinese", age: 5 },
  { name: "Tiger", breed: "Orange", age: 3 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {cats.map((cat) => {
        return <p>{cat.name}</p>;
      })}
    </div>
  );
}

export default App;
