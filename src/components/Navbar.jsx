import { useState } from "react"

function Navbar({ onMenuClick }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">

      {/* KIRI */}
      <div className="navbar-left">
        <button
          className="menu-btn"
          type="button"
          onClick={() => onMenuClick && onMenuClick()}
        >
          ☰
        </button>

        <div>
          <h3>Halo, Uti Nur Padila 👋</h3>
          <p>Selamat datang kembali, semangat latihan hari ini</p>
        </div>
      </div>

      {/* KANAN */}
      <div className="navbar-right">

        <button className="icon-btn">🔔</button>

        {/* USER */}
        <div className="user-wrapper">

          <button className="icon-btn" onClick={() => setOpen(!open)}>
            👤
          </button>

          {open && (
            <div className="dropdown">

              {/* FOTO */}
              <div className="profile-box">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="profile"
                  className="profile-img"
                />
              </div>

              {/* NAMA */}
              <div className="user-info">
                <p className="name">Uti Nur Padila</p>
                <p className="role">User</p>
              </div>

              <hr />

              <div className="dropdown-item">
                👤 Profile Saya
              </div>

              <div className="dropdown-item logout">
                🚪 Logout
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Navbar