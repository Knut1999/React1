import "../css/Snake.css";

function Snake() {
  return (
    <div className="Snake">
      <h2>Oioi nå snaker vi her</h2>
      <div className="snake-iframe-wrapper">
        <iframe
          className="snake-iframe"
          src="https://html-starter-knut.vercel.app/"
          title="Snake"
        ></iframe>
      </div>
    </div>
  );
}

export default Snake;
