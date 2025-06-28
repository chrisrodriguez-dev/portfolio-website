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
      <span className="prompt">&gt; </span>
      <span className="keyword">const</span> <span className="variable">Christopher_Rodriguez</span> = {'{'}{'\n'}
      &nbsp;&nbsp;<span className="property">_id</span>: <span className="string">"cmr82@njit.edu"</span>,{'\n'}
      &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Christopher Rodriguez"</span>,{'\n'}
      &nbsp;&nbsp;<span className="property">languages</span>: [<span className="string">"Python"</span>, <span className="string">"C++"</span>, <span className="string">"Java"</span>],{'\n'}
      &nbsp;&nbsp;<span className="property">interests</span>: [<span className="string">"AI"</span>, <span className="string">"Machine Learning"</span>]{'\n'}
      {'};'}
    </code>
  </pre>
</div>


  );
}

export default CodeIntro;

