import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { homePage } from "./pages";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" Component={homePage} />
      </Routes>
    </Router>
  );
}

export default App;
