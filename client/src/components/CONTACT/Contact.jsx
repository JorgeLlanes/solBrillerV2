import React from 'react'
import NavTop from '../HOME/NavTop'
import Up from '../FOOTER/Up'
import UpBox from '../FOOTER/UpBox'
import "../../css/CONTACTCSS/contact.css"

function Contact() {
  return (
    <>
    <div className="testing">
      <NavTop/>
        <Up>
          <UpBox/>
        </Up>

      <h1>Hi this is the contact page</h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit deleniti laborum nemo sint veniam assumenda delectus 
          praesentium rem sunt. Corrupti doloremque unde consequuntur explicabo distinctio accusamus ut dolores libero similique.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt tenetur ratione beatae ad nesciunt! 
          Praesentium aliquid reiciendis accusamus in nihil itaque ad recusandae quidem sapiente. Neque vero soluta temporibus.
        </p>
    </div>
    </>
  )
}

export default Contact
