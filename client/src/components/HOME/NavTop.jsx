import React from 'react';
import { useNavigate} from "react-router-dom";

//! NON-USED
// class NavTop extends Component {
//   render() {
//     return (
//       <>
//         <section className="nav">
//           <ul className="nav_Links">
//             <li className="link1">Home</li>
//             <li className="linkMid">Sol BRILLER</li>
//             <li className="link2">Products</li>
//             <li className="link3">Contact Us</li>
//             <li className="link4">About Us</li>
//           </ul>
//         </section>
        
//       </>
//     )
//   }
// }
//! NON-USED


function NavTop() {
  let navigate = useNavigate();
  return (
    <>
         <section className="nav">
           <ul className="nav_Links">
            <li onClick={() => {navigate("/")}} className="link1">Home</li>
            <li  className="linkMid">Sol BRILLER</li>
            <li onClick={() => {navigate("/products")}} className="link2">Products</li>
            <li onClick={() => {navigate("/contact")}} className="link3">Contact Us</li>
            <li onClick={() => {navigate("/about")}} className="link4">About Us</li>
          </ul>
        </section>
        
       </>
  )
}


export default NavTop