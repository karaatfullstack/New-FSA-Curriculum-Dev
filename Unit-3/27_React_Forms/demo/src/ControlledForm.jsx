import { useState } from "react";

export default function ControlledForm() {
  const [username, setUsername] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState(false);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the data from state
    console.log({ username, checkbox, radio });
  }

  function resetForm() {
    setUsername("");
    setCheckbox(false);
    setRadio(false);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h3>Controlled Form:</h3>
      <label>
        Username:{" "}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <hr />
      <label>
        Checkbox:{" "}
        <input
          type="checkbox"
          value={checkbox}
          onChange={() => {
            setCheckbox(!checkbox);
          }}
        />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label>
          <input
            type="radio"
            value={radio}
            onChange={() => {
              setRadio(!radio);
            }}
          />{" "}
          Option 1
        </label>
      </p>
      <hr />
      <button type="reset" onClick={resetForm}>
        Reset form
      </button>
      <button type="submit">Submit form</button>
    </form>
  );
}
