import { useNavigate } from "react-router-dom";

function LatihanCard({ type }) {
  const navigate = useNavigate();

  const data = {
    angka: {
      icon: "🔢",
      title: "Angka Hilang",
      desc: "Latihan logika angka",
      link: "/angka-hilang"
    },

    huruf: {
      icon: "🔤",
      title: "Huruf Hilang",
      desc: "Latihan fokus huruf",
      link: "/huruf-hilang"
    },

    simbol: {
      icon: "⭐",
      title: "Simbol Hilang",
      desc: "Latihan konsentrasi simbol",
      link: "/simbol-hilang"
    },

    gambar: {
      icon: "🖼️",
      title: "Gambar Hilang",
      desc: "Latihan daya ingat gambar",
      link: "/gambar-hilang"
    }
  };

  return (
    <div className="latihan-card">

      <div className="latihan-icon">
        {data[type].icon}
      </div>

      <h3>{data[type].title}</h3>

      <p>{data[type].desc}</p>

      <button
        onClick={() => navigate(data[type].link)}
      >
        Mulai Latihan
      </button>

    </div>
  );
}

export default LatihanCard;