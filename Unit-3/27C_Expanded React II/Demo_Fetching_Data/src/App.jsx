import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Posts from "./components/Posts";

// Root component for the application
function App() {
  return (
    <Provider store={store}>
      <Posts /> {/* Render the Posts component */}
    </Provider>
  );
}

export default App;
