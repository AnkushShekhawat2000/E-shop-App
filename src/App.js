import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Home/dashboard"
import Login from "./components/Home/login"
import ProtectedRouted from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRouted> <Dashboard /></ProtectedRouted>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
           <ProtectedRouted>
                            <Dashboard />
          </ProtectedRouted>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
