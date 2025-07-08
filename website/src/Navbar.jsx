function Navbar() {
  return (
    <nav className="bg-black text-white fixed top-0 w-full z-50 shadow-md">
      <ul className="flex justify-center space-x-8 py-4 text-lg">
        <li>
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
