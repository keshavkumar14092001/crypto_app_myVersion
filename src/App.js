import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Crypto from "./components/Crypto";
import Exchanges from "./components/Exchanges";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/crypto"} element={<Crypto />} />
        <Route path={"/exchanges"} element={<Exchanges />} />
      </Routes>
    </Router>
  );
}

export default App;