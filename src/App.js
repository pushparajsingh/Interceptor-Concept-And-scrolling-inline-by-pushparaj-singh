import logo from "./logo.svg";
import "./App.css";
import { AllFile } from "./Components/Layout/AllFile";
import { Route, Routes } from "react-router-dom";
import MultipleItems from "./Check";
import unregister from "./intercepter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllFile />} />
        <Route path="/check" element={<MultipleItems />} />
      </Routes>
    </div>
  );
}

export default App;
