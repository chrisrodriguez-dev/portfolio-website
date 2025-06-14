import './App.css'

function App() {


  return (
    <>
       <div>
        <p>This will be my portfolio website</p>
        <p>It is currently a work in progress</p>
        <Text display = "My name is Christopher M. Rodriguez"/>
        <a 
        href="https://www.linkedin.com/in/chris-rodriguez0" 
        target="_blank"
        className="inline-block px-6 py-2 bg-black text-gray-100 font-semibold rounded hover:bg-black hover:text-blue-400 transition"
        >
          Visit my LinkedIn
        </a>
       </div>
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
