import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Shop from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up";

function App() {
  return (
    <div className="container mx-auto font-OpenSansCondensed">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<SignInAndSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
