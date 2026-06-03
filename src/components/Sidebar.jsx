import logo from "../assets/logo.png"
import {
  LayoutDashboard,
  Hash,
  Type,
  Circle,
  Image,
  BarChart3,
  History,
  TrendingUp,
  Settings,
  Crown,
  LogOut
} from "lucide-react"

import { NavLink, useNavigate } from "react-router-dom"

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")
  }

  const handleNavClick = () => {
    if (onClose) onClose()
  }

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

      {/* HEADER */}
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <h2>
          KECERMATAN <br />
          <span className="sub-title">POLRI</span>
        </h2>
        <button
          type="button"
          className="sidebar-close-btn"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      {/* MENU */}
      <ul className="menu">

        {/* DASHBOARD */}
        <li className="menu-title">Menu Utama</li>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `menu-link${isActive ? " active" : ""}`
          }
          onClick={handleNavClick}
        >
          <li>
            <LayoutDashboard size={18} />
            Dashboard
          </li>
        </NavLink>

        <div className="divider"></div>

        {/* LATIHAN */}
        <li className="menu-title">Latihan</li>

        <NavLink
          to="/angka-hilang"
          className={({ isActive }) =>
            `menu-link${isActive ? " active" : ""}`
          }
          onClick={handleNavClick}
        >
          <li>
            <Hash size={18} />
            Angka Hilang
          </li>
        </NavLink>

        <NavLink
          to="/huruf-hilang"
          className={({ isActive }) =>
            `menu-link${isActive ? " active" : ""}`
          }
          onClick={handleNavClick}
        >
          <li>
            <Type size={18} />
            Huruf Hilang
          </li>
        </NavLink>

        <NavLink
          to="/simbol-hilang"
          className={({ isActive }) =>
            `menu-link${isActive ? " active" : ""}`
          }
          onClick={handleNavClick}
        >
          <li>
            <Circle size={18} />
            Simbol Hilang
          </li>
        </NavLink>

        <li>
          <Image size={18} />
          Gambar Hilang
        </li>

        <div className="divider"></div>

        {/* HASIL */}
        <li className="menu-title">Hasil & Progres</li>

        <li>
          <History size={18} />
          Riwayat Latihan
        </li>

        <li>
          <BarChart3 size={18} />
          Statistik
        </li>

        <li>
          <TrendingUp size={18} />
          Ranking
        </li>

        <div className="divider"></div>

        {/* LAINNYA */}
        <li className="menu-title">Lainnya</li>

        <NavLink
          to="/premium"
          className={({ isActive }) =>
            `menu-link${isActive ? " active" : ""}`
          }
          onClick={handleNavClick}
        >
          <li>
            <Crown size={18} />
            Premium
          </li>
        </NavLink>

        <li>
          <Settings size={18} />
          Pengaturan
        </li>

      </ul>

      {/* FOOTER (LOGOUT) */}
      <div
        className="sidebar-footer"
        onClick={handleLogout}
        style={{ cursor: "pointer" }}
      >
        <LogOut size={18} />
        LogOut
      </div>

    </div>
  )
}

export default Sidebar