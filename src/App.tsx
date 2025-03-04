import "./App.css";
import { Route, Routes } from "react-router";
import Notes from "./pages/Notes";
import PagesOutlet from "./pages/pagesoutlet/PagesOutlet";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/note" element={<Notes />} />
    </Routes>
  );
}

export default App;
