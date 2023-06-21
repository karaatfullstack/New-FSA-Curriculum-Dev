import { useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Button count={count} setCount={setCount} />
      <Profile />
    </div>
  );
}

function Button({ count, setCount }) {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
}

export default App;
