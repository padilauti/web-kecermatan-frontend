import { useNavigate } from "react-router-dom";

function HurufHilang() {
  const navigate = useNavigate();

  return (
    <div className="premium-content">

        <div className="training-page">

          <div className="training-container">

            <h1 className="page-title">
              Huruf Hilang
            </h1>

            <p className="page-subtitle">
              Temukan pola huruf yang hilang dari setiap deret soal.
            </p>

            <div className="training-card">

              <div className="training-icon">
                🔤
              </div>

              <h2>Huruf Hilang</h2>

              <p>
                Latihan kecermatan huruf hilang seperti pada seleksi Polri.
                Tes terdiri dari 500 soal yang dibagi menjadi 10 kolom,
                masing-masing berisi 50 soal. Setiap kolom dikerjakan
                dalam waktu 1 menit sehingga total waktu pengerjaan adalah
                10 menit. Kerjakan dengan cepat, tepat, dan teliti untuk
                mendapatkan hasil terbaik.
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
                  <li>Pilih huruf yang tepat sesuai pola.</li>
                  <li>Utamakan kecepatan dan ketelitian.</li>
                </ul>
              </div>

              <button
                className="start-btn"
                onClick={() => navigate("/huruf-hilang/quiz")}
              >
                Mulai Latihan
              </button>

            </div>

          </div>

        </div>

    </div>
  );
}

export default HurufHilang;