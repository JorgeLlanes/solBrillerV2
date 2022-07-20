import '../../css/FOOTERCSS/up.css'
import {useState} from 'react'
const Up = ({children}) => {
  const [startAnimation,setStartAnimation] = useState(false);

    const transitionProperties = startAnimation ? {marginTop: '476px' , opacity: '1'}: {};
    return (
        <>
        <button className="upBtn" onClick={() => setStartAnimation(!startAnimation)}>+</button>
        <div className="upDiv"style={transitionProperties} startAnimation={startAnimation}>{children}</div>
        </>
    )
};

export default Up;