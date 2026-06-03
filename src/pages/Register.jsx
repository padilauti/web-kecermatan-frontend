
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { register } from '../api/auth'
import logo from '../assets/logo.png'

function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [successName, setSuccessName] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)
    setSuccess(null)

    if (!form.fullName.trim()) {
      setModalMessage('Nama wajib diisi.')
      return
    }

    if (!form.email.trim()) {
      setModalMessage('Email wajib diisi.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setModalMessage('Pastikan password dan konfirmasi password yang Anda masukkan sama.')
      return
    }

    setLoading(true)

    try {
      await register({
        name: form.fullName,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword,
      })

      setSuccess('Registrasi berhasil. Silakan login.')
      setSuccessName(form.fullName)
      setForm({ fullName: '', email: '', password: '', confirmPassword: '' })
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    } catch (err) {
      const responseErrors = err.response?.data?.errors || {}
      const firstFieldError =
        responseErrors.name?.[0] ||
        responseErrors.email?.[0] ||
        responseErrors.password?.[0] ||
        responseErrors.password_confirmation?.[0]
      const message =
        err.response?.data?.message ||
        firstFieldError ||
        err.message ||
        'Terjadi kesalahan saat mendaftar.'
      setModalMessage(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="left-panel">
          <div className="left-panel-content">
            <img src={logo} alt="Logo" className="left-logo" />
            <p className="left-title">Gabung Tes Kecermatan</p>
            <p>Buat akun sekarang untuk memulai latihan, asah fokus, dan tingkatkan ketelitian.</p>
          </div>
        </div>

        <div className="right-panel">
          <div className="form-wrapper">
            <form className="register-form" onSubmit={handleSubmit}>

              <h1>Register</h1>

          <p className="subtitle">
            Buat akun baru untuk mengikuti Tes Kecermatan.
          </p>

          {error && <p className="form-message form-error">{error}</p>}
          {success && <p className="form-message form-success">{success}</p>}

          <div className="field-group">
            <label htmlFor="fullName" className="input-label">Nama Lengkap</label>
            <div className="input-box">
              <User size={18} className="input-icon" />
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                className="input-field"
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="email" className="input-label">Email</label>
            <div className="input-box">
              <Mail size={18} className="input-icon" />
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="input-field"
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="password" className="input-label">Password</label>
            <div className="input-box">
              <Lock size={18} className="input-icon" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                placeholder="Masukkan password"
                className="input-field"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="confirmPassword" className="input-label">Konfirmasi Password</label>
            <div className="input-box">
              <Lock size={18} className="input-icon" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi password"
                className="input-field"
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          <button className="register-btn" type="submit" disabled={loading}>
            {loading ? 'Daftar...' : (
              <>
                <UserPlus size={18} className="register-btn-icon" />
                Daftar
              </>
            )}
          </button>

          <div className="or-divider">
            <span className="or-line" />
            <span className="or-text">atau</span>
            <span className="or-line" />
          </div>

          <p className="login-hint">
            Sudah punya akun? <Link to="/login" className="login-link">Login di sini</Link>
          </p>

            </form>
          </div>
        </div>
      </div>

      {modalMessage && (
        <div className="register-modal-overlay">
          <div className="register-modal-box">
            <div className="modal-title">Perhatian</div>
            <div className="modal-text">{modalMessage}</div>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModalMessage('')}
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {successName && (
        <div className="register-success-popup">
          <div className="register-success-box">
            <div className="success-icon">🎉</div>
            <div className="success-title">Selamat Datang, {successName}!</div>
            <div className="success-text">
              Registrasi berhasil. Anda akan diarahkan ke halaman login dalam 3 detik.
            </div>
            <div className="loading-dots">● ● ● loading</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register