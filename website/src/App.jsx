import './App.css'
import Header from './Header.jsx'
import Skills from './Skills.jsx'
import CodeIntro from './CodeIntro.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <>
      <Header />
      <section id="home" className="pt-24">
        <h1>
          <span>Hi</span> my name is <span className="highlight">Christopher Rodriguez</span>
        </h1>
      
      </section>

      <CodeIntro />

      <section id="skills" className="pt-24">
        <Skills />
      </section>

      <section id="projects" className="pt-24">
        <Projects />
      </section>

      <section id="experience" className="pt-24">
        <Experience />
      </section>
    </>
  );
}

export default App;
