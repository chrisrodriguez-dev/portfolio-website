import './index.css'
import { Typewriter } from 'react-simple-typewriter';
function Summary(){
    return(
       <div>
        <p className="summary">
            <Typewriter
                words={['"Dedication makes dreams come true". - Kobe Bryant']}
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