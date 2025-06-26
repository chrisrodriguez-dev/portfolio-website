import './index.css'
import { Typewriter } from 'react-simple-typewriter';
function Summary(){
    return(
       <div>
        <p className="summary">
            <Typewriter
                words={['Hardworking and passionate computer science student.']}
                loop={1}
                cursor
                cursorStyle="!"
                typeSpeed={90}       // adjust for faster typing
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </p>
       </div>

    );

}

export default Summary