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

      {/* LATIHAN + GRAFIK: Sebelahan di desktop */}
      <div className="dashboard-middle">
        {/* LATIHAN */}
        <div className="latihan-wrapper">
          <h2>Pilihan Latihan</h2>
          <div className="latihan-grid">
            <LatihanCard type="angka" />
            <LatihanCard type="huruf" />
            <LatihanCard type="simbol" />
            <LatihanCard type="gambar" />
          </div>
        </div>

        {/* GRAFIK */}
        <div className="chart-section">
          <ChartCard />
        </div>
      </div>

      {/* RIWAYAT: full width section */}
      <HistoryCard />

    </div>
  )
}

export default Dashboard