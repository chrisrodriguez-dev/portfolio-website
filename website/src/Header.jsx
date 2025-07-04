import './index.css'
function Header(){
    return(
        <header className="header">
            <a
              href="mailto:cmr82@njit.edu?subject=Internship Inquiry"
              className="intern-button"
            >
                Need an Intern?
            </a>
            <ul className="nav-links">
                <li>
                    <a href="file:///Users/chris/Downloads/crodriguez.resume%20(2).pdf" target="_blank">
                    Resume
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/chris-rodriguez0/">
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/chrisrodriguez-dev">
                    GitHub
                    </a>
                </li>
                <li>Email</li>
            </ul>
        </header>
        
    )

}

export default Header