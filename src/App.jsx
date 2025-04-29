import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
