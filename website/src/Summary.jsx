import './index.css'
import { Typewriter } from 'react-simple-typewriter';
function Summary(){
    return(
       <div>
        <p className="summary">
            <Typewriter
                words={['Driven computer science student passionate about AI, software engineering, and solving problems with persistence and purpose']}
                loop={1}
                cursor
                cursorStyle="!"
                typeSpeed={55}       // adjust for faster typing
                deleteSpeed={50}
                delaySpeed={100}
            />
        </p>
       </div>

    );

}

export default Summary