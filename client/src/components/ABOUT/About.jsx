import React from 'react'
import NavTop from '../HOME/NavTop'
import vid2 from '../../img/vid2.mp4'
import UpBox from '../FOOTER/UpBox'
import Up from '../FOOTER/Up'


function About() {
  return (
    <>
     {/* <video src={vid2} autoPlay loop muted className='vid2'/> */}
     <NavTop />
     <section className='aboutMid'>
      <video src={vid2} autoPlay loop muted className='vid2'/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates quam distinctio dolore! Excepturi hic alias dolore dicta
          consequatur, necessitatibus, maiores perferendis eum dignissimos explicabo non quas saepe, atque officiis.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quas perspiciatis ea, reiciendis, consequatur corporis, 
          libero expedita fugit quod officia velit amet quisquam itaque quidem labore tempore odio facere voluptates.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit, eveniet voluptas atque nihil quidem aspernatur aliquid libero 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nam qui vitae iure, nisi necessitatibus sit quam veniam minima, 
          sequi impedit corrupti id recusandae similique placeat aliquid, quisquam fuga quia.
          temporibus vitae hic nisi modi soluta fuga ullam mollitia doloremque dignissimos blanditiis.
        </p>
     </section>
     <Up>
        <UpBox/>
    </Up>
    
    </>
  )
}

export default About
