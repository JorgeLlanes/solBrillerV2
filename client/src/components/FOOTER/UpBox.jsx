import React from 'react';
import {FaFacebookF} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr"
import {FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
const UpBox = () => {

     // Email Function in Footer
    const clickAlert = () => {
        const input = document.getElementById('email_Input')

        if (input.value !== "") {
                input.value = "";
              
            return document.getElementById("subscribed").innerHTML = "* SUBSCRIBED *"
          } else if(input.value === "") {
            return alert("Invalid input: Please enter a Task");
          }  
    }
     // Email Function in Footer




return (
    <>
    <footer className="footer">

        {/* // SolBriller Work Hours/Location */}
        <div className="solAddress">
            <h1>Location</h1>
            <address>
                <p><strong>Address:</strong> 512 AUSTIN, TEXAS USA</p>
                <p><strong>Hours:</strong> 9:00 AM - 9:00 PM (CST)</p>
            </address>
        </div>
        {/* // SolBriller Work Hours/Location */}



        {/* // MAIN h1 in Footer */}
        <h1 className="main-h1"><span>Sol Briller</span></h1>
        {/* // MAIN h1 in Footer */}



        {/* // icons in Footer */}
        <section className="icons">
            <a className="icon-links" id="facebook" href="https://www.facebook.com/"><FaFacebookF/></a>
            <a className="icon-links" id="instagram" href="https://www.instagram.com/?hl=en"><GrInstagram/></a>
            <a className="icon-links" id="twitter" href="https://twitter.com/"><FaTwitter/></a>
             <a className="icon-links" id="github" href="https://github.com/JorgeLlanes"><FaGithub/></a>
        </section>
        {/* // icons in Footer */}



        {/* // EMAIL/SUBMIT in Footer */}
        <div className="solAddress">
            <form>
                <h1>Subscribe</h1>
                <label>Email: </label>
                <input id="email_Input" type="text" name="username" placeholder="TYPE EMAIL"/>
            <br />
                <button className="email_Submit" onClick={clickAlert} type="button">Submit</button>
                <p id="subscribed"></p>
            </form>
        </div>
        {/* // EMAIL/SUBMIT in Footer */}

    </footer>
    </>
    )
}

export default UpBox;