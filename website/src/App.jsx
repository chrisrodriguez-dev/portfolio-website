import './App.css'
import Header from './Header.jsx'
import Summary from './Summary.jsx'
import Skills from './Skills.jsx'
import CodeIntro from './CodeIntro.jsx'


function App() {
  return (
    <>
      <Summary/>
      <h1>
        <span>Hi</span> my name is <span className="highlight">Christopher Rodriguez</span>
      </h1>
      <Header />
      <CodeIntro/>
      <Skills/>
      
     
    </>
  );
}



export default App
