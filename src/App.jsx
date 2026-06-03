import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Premium from "./pages/Premium"
import HurufHilang from "./latihan/HurufHilang"
import HurufHilangQuiz from "./latihan/HurufHilangQuiz";
import AngkaHilang from "./latihan/AngkaHilang";
import AngkaHilangQuiz from "./latihan/AngkaHilangQuiz";
import SimbolHilang from "./latihan/SimbolHilang";
import SimbolHilangQuiz from "./latihan/SimbolHilangQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}
        <Route path="/" element={<Dashboard />} />

        <Route path="/premium" element={<Premium />} />

        {/* HURUF HILANG */}
        <Route path="/huruf-hilang" element={<HurufHilang />} />

        <Route
          path="/huruf-hilang/quiz"
          element={<HurufHilangQuiz />}
        />

        {/* ANGKA HILANG */}
        <Route path="/angka-hilang" element={<AngkaHilang />} />
        <Route
          path="/angka-hilang/quiz"
          element={<AngkaHilangQuiz />}
        />

        {/* SIMBOL HILANG */}
        <Route path="/simbol-hilang" element={<SimbolHilang />} />
        <Route
          path="/simbol-hilang/quiz"
          element={<SimbolHilangQuiz />}
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App