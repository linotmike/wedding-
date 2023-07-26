import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/AuthForm";

function App() {
  return (
    <Router>
      <h1>Navbar</h1>
      <Routes>
        <Route path="/" element={<h2>home page</h2>} />
        <Route path="/login" element={<AuthForm usage="login" />} />
        <Route path="/signup" element={<AuthForm usage="signup" />} />
      </Routes>
    </Router>
  );
}

export default App;
