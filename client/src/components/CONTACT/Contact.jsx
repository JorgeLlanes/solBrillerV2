import React from 'react'
import NavTop from '../HOME/NavTop'
import Up from '../FOOTER/Up'
import UpBox from '../FOOTER/UpBox'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import "../../css/CONTACTCSS/contact.css"

function Contact() {
  return (
    <>
    <div className="testing">
      
      <NavTop/>
        <Up>
          <UpBox/>
        </Up>
        <div className="contactPage-container">
          <div className="mainSection">
            <h1 className='firstHeading'><span>CONTACT US</span></h1>
          </div>

      <section className="contactSection">
          <div className="location">
            <h1>Location</h1>
            <address>
                <p><span><strong><MdLocationPin/></strong></span> 512 AUSTIN, TEXAS USA</p>
                <p><span><strong>Mon-Fri:</strong></span> 9:00 AM - 9:00 PM (CST)</p>
                <p><span><strong><BsTelephoneFill/></strong></span> (123)-456-1998</p>
                
            </address>
            <iframe id='map'  title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6882.503279281827!2d-97.73387583022462!3d30.400601600000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc71ec3d3b05%3A0x77c4a76c643f0420!2sThe%20Domain!5e0!3m2!1sen!2sus!4v1658445341429!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div class="line"></div>
          
          <div className="submitForm">
            <h1 className="sfH1">let us know</h1>
            <form action="">
               <input type="text" name="full_name" placeholder="FULL NAME..." required/>
               <input type="email" name="'email" placeholder="EMAIL ADDRESS..." required/>
               <textarea name="comment" cols="30" rows="10" placeholder="COMMENTS Or CONCERNS..." required></textarea>
               <button type="submit">SUBMIT</button>
            </form>
          </div>
      </section>


      </div>
    </div>
    </>
  )
}

export default Contact

// {/* <h1>Hi this is the contact page</h1>

// <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti laborum nemo sint veniam assumenda delectus 
//   praesentium rem sunt. Corrupti doloremque unde consequuntur explicabo distinctio accusamus ut dolores libero similique.
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt tenetur ratione beatae ad nesciunt! 
//   Praesentium aliquid reiciendis accusamus in nihil itaque ad recusandae quidem sapiente. Neque vero soluta temporibus.
// </p> */}
