import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserAuth from "./pages/UserAuthPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Menu" element={<MenuPage />} />
      <Route path="/login" element={<UserAuth />} />
      <Route path="/signup" element={<UserAuth />} />
    </Routes>
  );
}

export default App;
