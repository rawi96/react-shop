import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <div className="container mx-auto font-OpenSansCondensed"> 
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
