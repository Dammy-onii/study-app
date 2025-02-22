import "./App.css";
import { Route, Routes } from "react-router";
import Notes from "./pages/Notes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
    </Routes>
  );
}

export default App;
