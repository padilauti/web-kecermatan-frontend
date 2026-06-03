function CardMenu({ type, value }) {

  const data = {
    latihan: {
      icon: "📚",
      title: "Total Latihan",
      desc: "Tingkatkan latihanmu terus"
    },

    skor: {
      icon: "🎯",
      title: "Rata-rata Skor",
      desc: "Pertahankan konsistensimu"
    },

      tertinggi: {
      icon: "🏆",
      title: "Skor Tertinggi",
      desc: "Pencapaian terbaikmu"
    },

    waktu: {
      icon: "⏱️",
      title: "Total Waktu",
      desc: "Waktu latihan keseluruhan"
    },

  }

  return (
    <div className="card-menu">

      <div className="card-icon">
        {data[type].icon}
      </div>

      <div className="text">
        <h3>{data[type].title}</h3>
        <h2>{value}</h2>
        <p>{data[type].desc}</p>
      </div>

    </div>
  )
}

export default CardMenu