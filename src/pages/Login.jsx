import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import bg from "../assets/login-bg.png"

import { User, Lock, Eye, EyeOff } from "lucide-react"

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email,
          password,
        }
      )

      localStorage.setItem("token", res.data.access_token)
      localStorage.setItem("user", JSON.stringify(res.data.user))

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        navigate("/")
      }, 1500)

    } catch (err) {
      setError(err.response?.data?.detail || "Login gagal")

      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  return (
    <div className="login-container">

      {/* SUCCESS POPUP */}
      {success && (
        <div className="popup-success">
          🎉 Login berhasil!
        </div>
      )}

      {/* ERROR POPUP */}
      {error && (
        <div className="popup-error">
          ❌ {error}
        </div>
      )}

      {/* BACKGROUND */}
      <div
        className="login-bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* CARD */}
      <div className="login-card">

        {/* TEXT HEADER */}
        <div className="login-text">
          <h2>Selamat datang 👋</h2>
          <p>Masuk untuk melanjutkan ke akun Anda</p>
        </div>

        {/* EMAIL */}
        <div className="input-box">
          <User size={18} className="input-icon" />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="input-box">
          <Lock size={18} className="input-icon" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {/* LUPA PASSWORD */}
        <div className="forgot">
          Lupa password?
        </div>

        {/* BUTTON LOGIN */}
        <button onClick={handleLogin}>
          Masuk
        </button>

        {/* REGISTER */}
        <div className="register">
          Belum memiliki akun? <Link to="/register" className="login-link">Daftar sekarang</Link>
        </div>

      </div>

    </div>
  )
}

export default Login