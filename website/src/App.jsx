import './App.css'
import Card from "./Card.jsx"
import Header from "./Header.jsx"
import Navbar from "./Navbar.jsx"

function App() {


  return (
    <>
       <div>
        <Header/>
        <a 
        href="https://www.linkedin.com/in/chris-rodriguez0" 
        target="_blank"
        className="inline-block px-6 py-2 bg-black text-gray-100 font-semibold rounded hover:bg-black hover:text-blue-400 transition"
        >
          Visit my LinkedIn
        </a>
        <Navbar/>
       </div>
       <Card/>
       
    </>
  )
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App
