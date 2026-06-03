import { useState } from "react";

function HistoryCard() {

  const historyData = [
    { jenis:"Tes Logika", tanggal:"12 Mei 2026", skor:85, waktu:"25 menit", status:"Lulus" },
    { jenis:"Tes Matematika", tanggal:"10 Mei 2026", skor:72, waktu:"30 menit", status:"Lulus" },
    { jenis:"Tes Verbal", tanggal:"08 Mei 2026", skor:60, waktu:"28 menit", status:"Tidak Lulus" },
    { jenis:"Tes Psikologi", tanggal:"05 Mei 2026", skor:90, waktu:"35 menit", status:"Lulus" },
    { jenis:"Tes Numerik", tanggal:"01 Mei 2026", skor:78, waktu:"22 menit", status:"Lulus" },
    { jenis:"Tes Logika 2", tanggal:"30 Apr 2026", skor:80, waktu:"25 menit", status:"Lulus" },
    { jenis:"Tes Matematika 2", tanggal:"29 Apr 2026", skor:70, waktu:"30 menit", status:"Lulus" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(historyData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = historyData.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="history-wrapper">

      <h2>Riwayat Tes Terakhir</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>Jenis Tes</th>
            <th>Tanggal</th>
            <th>Skor</th>
            <th>Waktu</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {currentData.map((item, i) => (
            <tr key={i}>
              <td>{item.jenis}</td>
              <td>{item.tanggal}</td>
              <td className="score">{item.skor}</td>
              <td>{item.waktu}</td>
              <td>
                <span className={`status ${item.status === "Lulus" ? "success" : "failed"}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button>Lihat</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

      {/* PAGINATION */}
      <div className="pagination">

        <div className="pagination-info">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, historyData.length)} of {historyData.length} entries
        </div>

        <div className="pagination-btn">

          <button onClick={prevPage} disabled={currentPage === 1}>
            {"<"}
          </button>

          <span>Page {currentPage} / {totalPages}</span>

          <button onClick={nextPage} disabled={currentPage === totalPages}>
            {">"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default HistoryCard;