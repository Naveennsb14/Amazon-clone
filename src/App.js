import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element=<Checkout/>>
          </Route>
          <Route path="/login" element=<h1>login page</h1>>
          </Route>
          <Route path="/" element=<Home/>></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
