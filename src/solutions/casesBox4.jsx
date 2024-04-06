import React from 'react'
import blogs1 from "../assets/blog1.png";
import { Border1px, Button2, Flexbox, H3box, Pbox } from '../indexpage/indexpagestyle';


const CasesBox4 = () => {
  return (
    <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
        >
          <img src={blogs1} alt="blogfirst" style={{marginLeft: "-4px"}}/>
          <H3box style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </H3box>
          <Pbox style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </Pbox>

          <Flexbox>
            <Border1px></Border1px>
          </Flexbox>

          <Flexbox style={{ justifyContent: "space-between", padding: "0px 10px" }}>
          </Flexbox>

          <Flexbox>
            <Button2 $MarginB>Read More</Button2>
          </Flexbox>
        </div>
  )
}

export default CasesBox4;