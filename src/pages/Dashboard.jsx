import CardMenu from "../components/CardMenu"
import LatihanCard from "../components/LatihanCard"
import ChartCard from "../components/ChartCard"
import HistoryCard from "../components/HistoryCard"

function Dashboard() {
  return (
    <div className="main-content">

        {/* CARD STATISTIK */}
        <div className="cards">
          <CardMenu type="latihan" value="25" />
          <CardMenu type="skor" value="87" />
          <CardMenu type="tertinggi" value="95" />
          <CardMenu type="waktu" value="12 Jam" />
        </div>
        {/* CONTENT BAWAH (GRID 2 KOLOM) */}
        <div className="dashboard-content">
          {/* KIRI */}
          <div className="left-content">
            <div className="latihan-wrapper">
              <h2>Pilihan Latihan</h2>
              <div className="latihan-grid">
                <LatihanCard type="angka" />
                <LatihanCard type="huruf" />
                <LatihanCard type="simbol" />
                <LatihanCard type="gambar" />
              </div>
            </div>
          </div>
          {/* KANAN */}
          <div className="right-content">
            <ChartCard />
          </div>
        </div>

        {/* 🔥 HISTORY DI LUAR GRID (FULL WIDTH) */}
        <HistoryCard />

    </div>
  )
}

export default Dashboard