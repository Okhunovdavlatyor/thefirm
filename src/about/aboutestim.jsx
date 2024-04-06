import React from 'react'
import { Flexbox, H1box, H3box, Pbox, Point } from '../indexpage/indexpagestyle'
import testimonial11 from "../assets/testimonial1.png";
import testimonial22 from "../assets/testimonial2.png";
import testimonial33 from "../assets/testimonial3.png";
import testimonial333 from "../assets/testimonial33.png";
import testimonial44 from "../assets/testimonial4.png";
import testimonial55 from "../assets/testimonial5.png";
const AboutTestimonial = () => {
  return (
    <Flexbox
    style={{
      flexDirection: "column",
      padding: "90px 0px 95px 0px",
      backgroundColor: "#F6F6F6"
    }}
  >
    <H1box>Our Testimonials</H1box>
    <Flexbox style={{ gap: "50px", margin: "60px 0px 40px 0px"}}>
      <img src={testimonial11} alt="termonial1" />
      <img src={testimonial22} alt="termonial2" />
      <div
        style={{
          padding: "8px",
          border: "1.5px solid #facb1089",
          borderRadius: "100px",
        }}
      >
        <div
          style={{
            padding: "1px",
            border: "1.5px solid #FACA10",
            borderRadius: "100px",
          }}
        >
          <img src={testimonial33} alt="termonial3" />
          <img
            src={testimonial333}
            alt="testimonial33"
            style={{ zIndex: "2", marginLeft: "-60px", marginTop: "-60px" }}
          />
        </div>
      </div>
      <img src={testimonial44} alt="termonial4" />
      <img src={testimonial55} alt="termonial5" />
    </Flexbox>
    <Pbox style={{ maxWidth: "864px", textAlign: "center" }}>
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took type scrambled it to make
      a type specimen book. It has survived not only five centuries,
    </Pbox>
    <Flexbox style={{ gap: "10px", margin: "25px 0px 20px 0px" }}>
      <H3box>Jenny Wilson </H3box>
      <H3box>|</H3box>
      <Pbox>Digital Agency</Pbox>
    </Flexbox>
    <Flexbox style={{ gap: "10px" }}>
      <Point $opacity></Point>
      <Point></Point>
      <Point $opacity></Point>
    </Flexbox>
  </Flexbox>
  )
}

export default AboutTestimonial;