import React from 'react'
import { useNavigate} from "react-router-dom";
import "../../css/ERRORCSS/error.css"

function Error() {
  let navigate = useNavigate();
  return (
    <>
      <h1 id="error">ERROR 404 🫤</h1>
      <button className="returnBtn" onClick={() => {navigate("/")}}>RETURN</button>
    </>
  )
}

export default Error
