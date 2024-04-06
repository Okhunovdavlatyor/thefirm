import React from 'react'
import footerLogo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import facebook1 from '../assets/facebook.png'
import twitter1 from '../assets/twitter.png'
import youtube1 from '../assets/youtube.png'
import in1 from '../assets/in.png'
import p1 from '../assets/p.png'
import { Flexbox, Navp, Timecont,  } from '../indexpage/indexpagestyle'

const Footer = () => {
  return (
    <div>
    <Flexbox style={{flexDirection: "column", padding: "100px 0px 50px 0px"}}>
      <img src={footerLogo} alt="Logo" />
      <Flexbox style={{gap: "70px", margin: "60px 0px"}}>
          <Link to="/"> <Navp>Home</Navp></Link>
          <Link to="solutions"> <Navp>Solutions</Navp> </Link>
          <Link to="cases"><Navp>Cases</Navp></Link>
          <Link to="about"><Navp>About Us</Navp></Link>
          <Link to="blog"><Navp>Blog</Navp></Link>
      <Navp>Contact Us</Navp>
      </Flexbox>
      <Flexbox style={{gap: "70px", marginBottom: "50px"}} className='footerIcon'>
        <img src={facebook1} alt="facebook icon" />
        <img src={twitter1} alt="twitter icon" />
        <img src={youtube1} alt="youtube icon" />
        <img src={in1} alt=""in icon />
        <img src={p1} alt="p icon" />
      </Flexbox>
      <Timecont $fontsize $spacing>Copyrights ©2020 Thefirm. All Right Reserved</Timecont>

    </Flexbox>

    </div>
  )
}

export default Footer;