import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code/:slug" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
