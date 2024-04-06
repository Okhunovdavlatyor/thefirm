import React from 'react'
import { Flexbox } from '../indexpage/indexpagestyle';
import AboutBox1 from './aboutmini/about1';
import AboutBox2 from './aboutmini/about2';
import AboutBox3 from './aboutmini/about3';

const AboutCont = () => {
  return (
    <Flexbox style={{
        backgroundColor: "#F6F6F6",
        padding: "60px 0px",
       gap: "60px"
    }}>
        <AboutBox1></AboutBox1>
        <AboutBox2></AboutBox2>
        <AboutBox3></AboutBox3>
    </Flexbox>
  )
}

export default AboutCont;