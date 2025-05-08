import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MenuGrid from "./MenuGrid";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/:mainCategory/:category" element={<MenuGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
