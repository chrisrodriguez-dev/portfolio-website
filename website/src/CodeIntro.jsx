import './CodeIntro.css';

function CodeIntro() {
  return (
   <div className="terminal">
  <div className="terminal-header">
    <span className="dot red"></span>
    <span className="dot yellow"></span>
    <span className="dot green"></span>
  </div>
  <pre className="terminal-body">
    <code>
      I am a computer science student at NJIT and I am interested in Software Engineering and Machine Learning.
      I enjoy engineering solutions that make an impact.
    </code>
  </pre>
</div>


  );
}

export default CodeIntro;

