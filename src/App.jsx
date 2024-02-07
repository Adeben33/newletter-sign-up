import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Home />}>
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
