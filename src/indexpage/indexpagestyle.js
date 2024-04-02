import styled from "styled-components";
import indexinto from "../assets/mainpageintro.png";
import brand1 from "../assets/brand.png";

export const Indexintro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
`;

export const Introleft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  /* background-image: url(${indexinto});
  position: relative;
  left: 200px; */
  /* background-position: end; */
  /* background-repeat: no-repeat;
  background-size: cover; */
  width: 920px;
  height: 650px;
  flex-shrink: 0;
  margin-left: 50px;
  h1 {
    color: #1e1e1e;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-family: Nunito;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: 133.4%; /* 64.032px */
    letter-spacing: 0.96px;
  }
  p {
    margin: 10px 0px 10px 0;
    color: #1e1e1e;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%; /* 31.68px */
    letter-spacing: 0.36px;
  }
`;
export const Introright = styled.div`
  flex: 2;
  display: flex;
  margin-left: 50px;
`;

export const Introtext = styled.div`
  margin-right: -200px;
  z-index: 9998;
`;

export const PartnerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
export const Partnertext = styled.div`
  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 44px;
    font-style: normal;
    font-weight: 900;
    line-height: 133.4%; /* 58.696px */
    letter-spacing: 0.88px;
  }
  span {
    text-decoration-line: underline;
    text-decoration-color: yellow;
  }
`;

export const Partnerbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const Companyboxes = styled.div`
  box-shadow: ${(props) =>
    props.$google1 ? `0px 10px 20px 0px rgba(5, 5, 5, 0.08)` : `none`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 120px;
  flex-shrink: 0;
  margin-left: 60px;
`;

export const Scroll = styled.div`
  margin-left: ${(props) => (props.$scroll1 ? `0px` : "55px")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid black;
`;

export const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: #fbfbfb;
  background-color: ${(props) => (props.$solutionbox ? `#fff` : "#fbfbfb")};
`;

export const LeftBoxFrus  = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 44px;
    font-style: normal;
    font-weight: 900;
    line-height: 133.4%; /* 58.696px */
    letter-spacing: 0.88px;
  }
  span {
    text-decoration-line: underline;
    text-decoration-color: yellow;
  }
  p {
    color: #1e1e1e;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%; /* 31.68px */
    letter-spacing: 0.36px;
  }
  li {
  }
`;
export const LeftBoxFrusx = styled.div`
  padding-top: 20px;
  //display: flex;  
  //flex-direction: column;
  //justify-content: center;
  width: 583px;
height: 393px;
top: 1253px;
left: 81px;
gap: 0px;
opacity: 0px;

  
  
    width: 14px;
height: 21px;
top: 1462px;
left: 110px;
padding: 0px;
gap: 0px;
opacity: 0px;
p {
  
  
  font-family: Lora;
font-size: 18px;
font-weight: 400;
line-height: 31.68px;
letter-spacing: 0.02em;
//text-align: left;


}

`;
  
export const RightBoxFrus = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
export const LeftBoxSolution = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const RightBoxSolution = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 44px;
    font-style: normal;
    font-weight: 900;
    line-height: 133.4%; /* 58.696px */
    letter-spacing: 0.88px;
  }
  span {
    text-decoration-line: underline;
    text-decoration-color: yellow;
  }
  p {
    color: #1e1e1e;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%; /* 31.68px */
    letter-spacing: 0.36px;
    margin: 20px 0 50px 0;
  }
`;

export const ReasonContainermain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfbfb;
`;
export const ReasonConText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 44px;
    font-style: normal;
    font-weight: 900;
    line-height: 133.4%; /* 58.696px */
    letter-spacing: 0.88px;
  }
  span {
    text-decoration-line: underline;
    text-decoration-color: yellow;
  }
  p {
    padding: 28px;
    color: #1e1e1e;
    text-align: center;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%; /* 31.68px */
    letter-spacing: 0.36px;
  }
`;

export const ReasonCon = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
`;

export const Reasonbox = styled.div`
  border-radius: 5px;
  border: 2px solid #f6f6f6;
  background: #fff;
  box-shadow: 0px 10px 40px -12px rgba(196, 196, 196, 0.35);
  width: 157px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #faca10;
    color: #fff;
  }
  p {
    color: #c4c4c4;
    font-family: Nunito;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`;

export const BrandingCon = styled.div`
  width: 1280px;
  height: 413px;
  border-radius: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 100px 0;
  padding: 66px 0 67px 41px;
`;

export const BrandingConLeft = styled.div`
  flex: 1;
  width: 550px;
  height: 280px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  background-image: url(${brand1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 40px;
  img {
    width: 66px;
    height: 66px;
    flex-shrink: 0;
    position: relative;
    left: 620px;
  }
`;

export const BrandingConRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px;
  margin-right: -95px;
  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.5px;
    text-decoration-line: underline;
    text-decoration-color: yellow;
    margin-bottom: 17px;
  }
  p {
    color: #1e1e1e;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%;
    letter-spacing: 0.36px;
  }
`;

export const ReadMorebtn = styled.div`
  width: 157px;
  height: 44px;
  margin-top: 30px;
  border-radius: 5px;
  background: #1e1e1e;
  box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: #fff;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`;

export const ResearchContainermain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const ResearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResearchBoxLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.5px;
  }

  p {
    color: #1e1e1e;
    font-family: Lora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 176%;
    letter-spacing: 0.36px;
  }
`;
export const ResearchBoxRight = styled.div`
display: flex;
flex: 1;

`;
export const ReadMorebtnresearch = styled.div`
  width: 157px;
  height: 44px;
  margin-top: 30px;
  border-radius: 5px;
  background: #faca10;
  box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    color: #fff;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`;

export const ResearchBoxRight = styled.div``;
