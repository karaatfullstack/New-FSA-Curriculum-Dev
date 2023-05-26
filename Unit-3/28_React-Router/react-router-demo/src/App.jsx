import { Routes, Route } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import SingleUser from "./components/SingleUser";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
