function ChartCard() {
  return (
    <div className="chart-wrapper">
      <h2>Grafik Performa</h2>

      <div className="dummy-chart">
        <div className="bars">

          <div className="bar green" style={{ height: "60%" }}></div>
          <div className="bar blue" style={{ height: "80%" }}></div>
          <div className="bar yellow" style={{ height: "50%" }}></div>
          <div className="bar orange" style={{ height: "90%" }}></div>
          <div className="bar purple" style={{ height: "70%" }}></div>

        </div>
      </div>
    </div>
  )
}

export default ChartCard;