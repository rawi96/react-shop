import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
