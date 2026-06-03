import { useEffect, useState } from "react";
import axios from "axios";

function AngkaHilangQuiz() {
  const [soal, setSoal] = useState([]);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [loading, setLoading] = useState(true);

  const [shuffledIndex, setShuffledIndex] = useState([]);

  const [isStarting, setIsStarting] = useState(true);
  const [startCount, setStartCount] = useState(3);

  const questionsPerColumn = 50;

  // mapping UI A–E
  const labelMap = ["A", "B", "C", "D", "E"];

  useEffect(() => {
    fetchSoal();
  }, []);

  const fetchSoal = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/soal/angka-hilang"
      );

      setSoal(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // COUNTDOWN START
  useEffect(() => {
    if (!isStarting) return;

    const interval = setInterval(() => {
      setStartCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsStarting(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isStarting]);

  const shuffleArray = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const startIndex = currentColumn * questionsPerColumn;
  const currentData = soal.slice(startIndex, startIndex + questionsPerColumn);
  const data = currentData[currentQuestion];

  const cleanQuestion = data?.question?.replace("?", "").trim();

  const getCorrectAnswer = (options) => {
    if (!options) return null;

    const index = options.findIndex((item) => item === "?");
    if (index === -1) return null;

    return index;
  };

  const correctAnswer = getCorrectAnswer(data?.options);

  useEffect(() => {
    if (!data?.options) return;

    const indexArr = data.options.map((_, i) => i);
    setShuffledIndex(shuffleArray(indexArr));
  }, [data, currentQuestion, currentColumn]);

  // TIMER
  useEffect(() => {
    if (soal.length === 0) return;
    if (isStarting) return;

    setTimeLeft(60);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          if (currentColumn < 9) {
            setCurrentColumn((c) => c + 1);
            setCurrentQuestion(0);
          } else {
            alert("Tes selesai");
          }

          return 60;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentColumn, soal, isStarting]);

  const handleAnswer = (label) => {
    const index = labelMap.indexOf(label);

    const isCorrect = index === correctAnswer;

    console.log(label, correctAnswer, isCorrect);

    const isLastQuestion = currentQuestion === questionsPerColumn - 1;
    const isLastColumn = currentColumn === 9;

    if (!isLastQuestion) {
      setCurrentQuestion((p) => p + 1);
    } else {
      if (!isLastColumn) {
        setCurrentColumn((c) => c + 1);
        setCurrentQuestion(0);
      } else {
        alert("Tes selesai");
      }
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (!data) return <h2>Tidak ada soal</h2>;

  // START SCREEN
  if (isStarting) {
    return (
      <div className="quiz-page">
        <div className="quiz-container start-screen">
          <div className="countdown-wrapper">
            <div className="countdown-blue">{startCount}</div>
            <div className="countdown-text">BERSIAP</div>
          </div>
        </div>
      </div>
    );
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        <h1 className="quiz-title">TES ANGKA HILANG</h1>
        <div className="quiz-divider"></div>

        <div className="quiz-header">
          <div className="quiz-number-badge">
            Kolom {currentColumn + 1} / 10
          </div>

          <div className={`quiz-timer ${timeLeft <= 10 ? "danger" : "safe"}`}>
            ⏰ {minutes}:{seconds}
          </div>
        </div>

        <div className="option-grid">
          {shuffledIndex.map((idx, i) => (
            <div key={i} className="option-box">
              {data.options[idx] === "?" ? "" : data.options[idx]}
            </div>
          ))}
        </div>

        <div className="label-grid">
          {labelMap.map((l, i) => (
            <div key={i} className="label-box">
              {l}
            </div>
          ))}
        </div>

        <div className="quiz-question">
          {cleanQuestion}
        </div>

        <div className="option-list">
          {labelMap.map((item, i) => (
            <button
              key={i}
              className="option-btn"
              onClick={() => handleAnswer(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 🔥 COUNTER TAMBAHAN */}
        <div className="quiz-counter">
          Soal ke : {currentQuestion + 1}/{questionsPerColumn}
        </div>

      </div>
    </div>
  );
}

export default AngkaHilangQuiz;