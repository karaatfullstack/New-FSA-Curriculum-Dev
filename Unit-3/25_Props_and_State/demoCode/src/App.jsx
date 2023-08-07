import "./App.css";
import Pizza from "./Pizza.jsx";

function App() {
  const [count, setCount] = useState(0);
  const toppings = ['pepperoni', 'olives', 'honey', 'pineapple'];
  console.log(toppings);
  return (
    <div className="card">
      {/* <Button number={count} setNumber={setCount} /> */}
      <Pizza type={toppings} size="medium"/>
    </div>
  );
}

// function Button({ number, setNumber }) {
//   return (
//     <button onClick={() => setNumber((number) => number + 1)}>
//       count is {number}
//     </button>
//   );
// }

export default App;
