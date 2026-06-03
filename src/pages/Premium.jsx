import Sidebar from "../components/Sidebar"

import { Crown, CheckCircle } from "lucide-react"

function Premium() {
  return (
    <div className="premium-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENT */}
      <div className="premium-content">

        <div className="premium-page">

          {/* HEADER */}
          <div className="premium-header">

            <div className="premium-icon">
              <Crown size={40} />
            </div>

            <h1>Premium POLRI</h1>

            <p>
              Tingkatkan kemampuan kecermatanmu dengan fitur premium 🚀
            </p>

          </div>

          {/* CARD */}
          <div className="premium-card">

            <div className="premium-badge">
              BEST PREMIUM
            </div>

            <h2>Unlock Semua Fitur</h2>

            <div className="premium-benefits">

              <div className="benefit-item">
                <CheckCircle size={20} />
                <span>Latihan tanpa batas</span>
              </div>

              <div className="benefit-item">
                <CheckCircle size={20} />
                <span>Ranking nasional</span>
              </div>

              <div className="benefit-item">
                <CheckCircle size={20} />
                <span>Statistik lengkap</span>
              </div>

              <div className="benefit-item">
                <CheckCircle size={20} />
                <span>Pembahasan soal</span>
              </div>

              <div className="benefit-item">
                <CheckCircle size={20} />
                <span>Mode Tryout POLRI</span>
              </div>

            </div>

            {/* PRICE */}
            <div className="premium-price">
              Rp29.000
              <span>/bulan</span>
            </div>

            {/* BUTTON */}
            <button className="upgrade-btn">
              Upgrade Sekarang
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Premium