import React from 'react'
import { Button, Button1, Flexbox, Grid3, H1box, Inputbox } from '../indexpage/indexpagestyle'
import CasesBox1 from './casesBox1';
import CasesBox2 from './casesBox2';
import CasesBox3 from './casesBox3';
import CasesBox4 from './casesBox4';
import CasesBox5 from './casesBox5';
import CasesBox6 from './casesBox6';
import CasesBox7 from './casesBox7';
import CasesBox8 from './casesBox8';
import CasesBox9 from './casesBox9';

const CasesSolutions = () => {
  return (
    <div>
        <Flexbox
        style={{
          flexDirection: "column",
          padding: "85px 70px 70px 70px",
        }}
      >
        <div>
          <H1box style={{ margin: "20px 0px" }}>Our Cases</H1box>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "55px",
          }}
        >
          <Flexbox style={{ gap: "50px" }}>
            <Button $BoderColor $width $bgcolorWhite $textcolor $clhover>
              Market Research
            </Button>
            <Button $BoderColor $bgcolorWhite $textcolor $clhover>
              Branding
            </Button>
            <Button $BoderColor $bgcolorWhite $textcolor $clhover>
              Reporting
            </Button>
            <Button $BoderColor $width $bgcolorWhite $textcolor $clhover>
              Data Analysis
            </Button>
          </Flexbox>
          <Flexbox>
            <Inputbox $InputSize type="search" placeholder="Search" />
          </Flexbox>
        </div>
      </Flexbox>
      <Grid3> 

      <div className="CaseBoxContainer">
      
        <CasesBox1></CasesBox1>
        
         <CasesBox2></CasesBox2>
        <CasesBox3></CasesBox3>
        <CasesBox4></CasesBox4>
        <CasesBox5></CasesBox5>
        <CasesBox6></CasesBox6>
        <CasesBox7></CasesBox7>
        <CasesBox8></CasesBox8>
        <CasesBox9></CasesBox9>
      </div>
      </Grid3> 

      
      
      
      <Flexbox style={{
        margin: "45px 0px 100px 0px"
      }}>
        <Button1>Lead More</Button1>
      </Flexbox>
      </div>
  )
}

export default CasesSolutions;