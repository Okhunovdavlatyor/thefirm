import React from 'react'
import { Button, Flexbox, H1box, Pbox } from '../indexpage/indexpagestyle';
import AboutCont from './aboutcont';
import AboutDetail from './aboutdetail';
import AboutTestimonial from './aboutestim';
import solution1 from '../assets/solutions.png'
const AboutComp = () => {
  return (
    <div>
<Flexbox style={{padding: "90px 70px 40px 40px"}}>
        <div>
          <img src={solution1} alt="solution" />
        </div>
        <div style={{marginLeft: "120px"}}>
          <H1box>Perfect Solution for</H1box>
          <H1box  style={{margin: "30px 0px"}}>Your Bussiness</H1box>
          <Pbox>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries,
            </Pbox>
            <Button style={{marginTop: "30px"}}>Read More</Button>
        </div>
      </Flexbox>

      <AboutCont></AboutCont>
      <AboutDetail></AboutDetail>
      <AboutTestimonial></AboutTestimonial>
    </div>
  )
}

export default AboutComp;