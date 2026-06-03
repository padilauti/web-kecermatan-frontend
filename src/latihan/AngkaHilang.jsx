import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function AngkaHilang() {
  const navigate = useNavigate();

  return (
    <div className="premium-layout">

      <Sidebar />

      <div className="premium-content">

        <div className="training-page">

          <div className="training-container">

            <h1 className="page-title">
              Angka Hilang
            </h1>

            <p className="page-subtitle">
              Temukan angka yang hilang dari setiap deret soal.
            </p>

            <div className="training-card">

              <div className="training-icon">
                🔢
              </div>

              <h2>Angka Hilang</h2>

              <p>
                Latihan kecermatan angka hilang seperti pada seleksi Polri.
                Kerjakan dengan cepat dan teliti untuk menemukan angka
                yang tepat sesuai pola deret.
              </p>

              <div className="info-box">

                <div className="info-item">
                  <h3>500</h3>
                  <span>Total Soal</span>
                </div>

                <div className="info-item">
                  <h3>50</h3>
                  <span>Soal/Kolom</span>
                </div>

                <div className="info-item">
                  <h3>1</h3>
                  <span>Menit/Kolom</span>
                </div>

                <div className="info-item">
                  <h3>10</h3>
                  <span>Total Kolom</span>
                </div>

              </div>

              <div className="simulation-banner">
                🎯 Simulasi sesuai format tes kecermatan seleksi Polri
              </div>

              <div className="instruction-box">
                <h3>📋 Petunjuk Latihan</h3>

                <ul>
                  <li>Setiap kolom terdiri dari 50 soal.</li>
                  <li>Waktu pengerjaan 1 menit per kolom.</li>
                  <li>Pilih angka yang tepat sesuai pola.</li>
                  <li>Utamakan kecepatan dan ketelitian.</li>
                </ul>
              </div>

              <button
                className="start-btn"
                onClick={() => navigate("/angka-hilang/quiz")}
              >
                Mulai Latihan
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AngkaHilang;