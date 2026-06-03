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

      {/* LATIHAN: tampil 2x2 di desktop, 1 kolom di mobile */}
      <div className="latihan-wrapper">
        <h2>Pilihan Latihan</h2>
        <div className="latihan-grid">
          <LatihanCard type="angka" />
          <LatihanCard type="huruf" />
          <LatihanCard type="simbol" />
          <LatihanCard type="gambar" />
        </div>
      </div>

      {/* GRAFIK: full width section */}
      <div className="chart-section">
        <ChartCard />
      </div>

      {/* RIWAYAT: full width section */}
      <HistoryCard />

    </div>
  )
}

export default Dashboard