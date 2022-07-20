import React from 'react';
import "../../css/HOMECSS/explore.css"
import { useNavigate} from "react-router-dom";

function Explore() {

  let navigate = useNavigate();

  return (
    <>
        <button onClick={() => {navigate("/products")}} className="exploreBtn">EXPLORE</button>
    </>
  )
}

export default Explore
