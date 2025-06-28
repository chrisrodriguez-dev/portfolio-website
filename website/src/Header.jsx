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
                <li>Resume</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Email</li>
            </ul>
        </header>
        
    )

}

export default Header