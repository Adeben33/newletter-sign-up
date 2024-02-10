import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Thanks from "./pages/thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="success" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
