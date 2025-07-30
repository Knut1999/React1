import "../css/Plugins.css";

function Plugins() {
  return (
    <div className="Plugins">
      <h2>Ingenia plugin tutorial</h2>
      <div className="snake-iframe-wrapper">
        <iframe
          width="860"
          height="615"
          src="https://www.youtube.com/embed/vzYaxMPSq50"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3>Kapitler: <br></br>
        00:00 Download <br></br>
        1:15 ParaFix <br></br>
        2:40  TFM <br></br>
        8:20  Ventilasjon - knapp <br></br>
        11:40 Sound deviation <br></br>
        12:12 Tidlig fase <br></br>
        20:50 Quick and easy <br></br>
        21:50 Tegningsopprettelse med tegningsliste <br></br>
        32:10 Tegningsopprettelse uten tegningsliste <br></br>
      </h3>
    </div>
  );
}

export default Plugins;
