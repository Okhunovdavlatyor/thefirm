import React from 'react'
import { Button, CaseH1cont, Flexbox,  Pbox, QuestionMark } from '../indexpage/indexpagestyle';
import cases11 from "../assets/cases1.png";
import cases22 from "../assets/cases2.png";

const CaseDetailPage = () => {
  return (
    <div>
        <Flexbox
        style={{ padding: "40px 50px 55px 70px", backgroundColor: "#F6F6F6" }}
      >
        <div style={{ flex: "3" }}>
          <CaseH1cont>Lorem Ipsum</CaseH1cont>
          <Pbox style={{ padding: "10px 60px 70px 0px", width: "" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.{" "}
          </Pbox>
          <div style={{ display: "flex", gap: "20px" }}>
            <Button $width>Digital Partners</Button>
            <Button>Coaching</Button>
          </div>
        </div>
        <div style={{ flex: "1.7" }}>
          <img src={cases11} alt="img" />
          <div
            style={{
              backgroundColor: "#FACA10",
              borderRadius: "100px",
              width: "139px",
              height: "139px",
              opacity: "0.4",
              margin: "-90px 0px 0px -60px",
              zIndex: "0",
            }}
          ></div>
        </div>
      </Flexbox>

      <Flexbox style={{ padding: "80px 70px 80px 50px" }}>
        <div>
          <img src={cases22} alt="img" />
        </div>
        <div style={{ padding: "0px 25px" }}>
          <CaseH1cont>Lorem Ipsum</CaseH1cont>
          <Pbox style={{ padding: "10px 0px 0px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            <b>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </b>{" "}
            when an unknown printer took. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.{" "}
          </Pbox>
        </div>
      </Flexbox>

      <div style={{ padding: "80px 70px 70px 70px", backgroundColor: "#F6F6F6" }}>
        <div>
          <CaseH1cont>Lorem Ipsum</CaseH1cont>
          <Pbox style={{padding: "20px 0px 25px 0px"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.{" "}
          </Pbox>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
    
    }}>
          <QuestionMark>
            <h2>?</h2>
            <Pbox>
              Loren rasion gravida auem is bibenua tase. Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document or a typeface without relying on meaningful content{" "}
            </Pbox>
          </QuestionMark>
          <QuestionMark>
            <h2>?</h2>
            <Pbox>
              Lorem Ipsum is simply dummy text of the. Lorem ipsum, or lipsum as
              it is sometimes known, is dummy text used in laying out print,
              graphic or web designs.Lorem ipsum, or lipsum as it is sometimes
              known, is dummy text used in laying out print, graphic or web
              designs.
            </Pbox>
          </QuestionMark>
          <QuestionMark>
            <h2>?</h2>
            <Pbox>
              Printing and typesetting industry. Lorem Ipsum placeholder text in
              any number of characters, words sentences or paragraphs.
            </Pbox>
          </QuestionMark>
          <QuestionMark>
            <h2>?</h2>
            <Pbox>
              When an unknown printer took a galley of type and scrambled it
            </Pbox>
          </QuestionMark>
        </div>
      </div>
    </div>
  )
}

export default CaseDetailPage;