import React from 'react'
import { Button, Flexbox, H1box, Pbox } from '../indexpage/indexpagestyle'
import solutionsMain1 from '../assets/solutionsMain.png'
import CasesSolutions from './casessolutions'
import SLtestimonials from './testimonials'

const SolutionPage = () => {
  return (
    <div>
        <Flexbox
        style={{
          background:
            "linear-gradient(180deg, rgba(245, 246, 247, 0) 0%, #F4F4F4 100%)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              zIndex: "2",
              alignItems: "start",
              justifyContent: "center",
              padding: "0px 30px 0px 70px",
            }}
          >
            <H1box>Our Research &</H1box>
            <H1box style={{ margin: "30px 0px" }}>Case Studies</H1box>
            <Pbox
              style={{ width: "437px", zIndex: "1", marginBottom: "30px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </Pbox>
            <Button>Get in Touch</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={solutionsMain1} alt="Soutions Main" />
          </div>
        </div>
      </Flexbox>
      <CasesSolutions></CasesSolutions>
      <SLtestimonials></SLtestimonials>
    </div>
  )
}

export default SolutionPage;