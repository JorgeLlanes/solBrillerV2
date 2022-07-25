import React from 'react'
import NavTop from '../HOME/NavTop'
import vid2 from '../../img/vid2.mp4'
import UpBox from '../FOOTER/UpBox'
import Up from '../FOOTER/Up'


function About() {
  return (
    <>
     <NavTop />
     <section className='aboutMid'>
      <video src={vid2} autoPlay loop muted className='vid2'/>
        <p>
          <span>Sol Briller</span>, founded by Jorge Llanes in 2022, is a design venture born out of Austin, Texas, 
          balancing luxury techniques with streetwear elements, showcased as ready-to-wear collections.
          Designed from a narrative standpoint Sol Briller is both a reflection of modern socioeconomics and personal 
          stories as Llanes came to Texas. Now a reoccurring theme season-to-season, 
          Sol Briller combines American iconography with nostalgic references, a visual commentary on Texas style and culture itself.
          With no formal training specific to fashion design, llanes credits his understanding of specs and construction to growing up with a mother who was a maid, 
          providing a foundation and understanding of how to build each piece and the subsequent stories told with each collection.
          Sol Briller's journey parallels Llanes, chronicling the evolution of a man from adolescence to maturity, 
          a narrative reflected each collections both the Creative Director and brand continues to grow-up with its ever-expanding fanbase.
        </p>
     </section>
     <Up>
        <UpBox/>
    </Up>
    
    </>
  )
}

export default About

//! NON-USED
// <video src={vid2} autoPlay loop muted className='vid2'/>
//! NON-USED

// {/* <p>
// Sol Briller, founded by Jorge Llanes in 2022, is a design venture born out of Austin, Texas, 
// balancing luxury techniques with streetwear elements, showcased as ready-to-wear collections.
// Designed from a narrative standpoint Sol Briller is both a reflection of modern socioeconomics and personal 
// stories as Llanes came to Texas. Now a reoccurring theme season-to-season, 
// Sol Briller combines American iconography with nostalgic references, a visual commentary on Texas style and culture itself.
// With no formal training specific to fashion design, llanes credits his understanding of specs and construction to growing up with a mother who was a maid, 
// providing a foundation and understanding of how to build each piece and the subsequent stories told with each collection.
// Sol Briller’s journey parallels Llanes, chronicling the evolution of a man from adolescence to maturity, a narrative reflected each collections both the Creative Director and brand continues to grow-up with its ever-expanding fanbase, 
// culminating in the most recent debut presentation during Paris Men’s Fashion Week for the Spring/Summer 2022 Collection. 
// </p> */}

