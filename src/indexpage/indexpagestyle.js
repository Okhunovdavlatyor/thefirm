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
//export const ResearchTwoCont = styled.div`
//display: flex;
//flex-direction: column;
//`;
export const Partnerbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
`;
//export const
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
  color: #FFFFFF;

  
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


export const ResearchBoxRight = styled.div`
display: flex;
flex: 1;
flex-direction: column;
  align-items: center;

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
export const OurBlogMain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1444px;
height: 920px;
top: 4616px;
left: -2px;
gap: 0px;
opacity: 0px;
background: #F2F2F2;

`;
export const OurBlogcont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
//align-items: center;
padding: 10px;
width: 340px;
height: 560.78px;
top: 4816.01px;
left: 138px;
gap: 0px;
border-radius: 15px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
background: #FFFFFF;
border: 1px solid #FACA1066;
box-shadow: 0px 0px 13px 0px #00000017;
 img {
  width: 319px;
height: 228.7px;
top: 4825.16px;
left: 148px;
gap: 0px;
border-radius: 15px 0px 0px 0px;
opacity: 0px;
box-shadow: 0px 7px 13px 0px #00000017;

 }
`;
export const OurBlogLeft = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;


img {
  width: 30px;
height: 27.44px;
top: 5250.55px;
left: 159px;
gap: 0px;
opacity: 0px;
box-shadow: 0px 4px 4px 0px #FACA1033;

}
p {
  width: 73px;
height: 17.38px;
top: 5256.04px;
left: 196px;
gap: 0px;
opacity: 0px;
font-family: Nunito;
font-size: 14px;
font-weight: 400;
line-height: 19.1px;
text-align: left;
color: #1E1E1E;

}
`;
export const OurBlogRight = styled.div`
flex: 2;
display: flex;
justify-content: center;
p {
  width: 106px;
height: 12.81px;
top: 5257.87px;
left: 351px;
gap: 0px;
opacity: 0px;
font-family: Nunito;
font-size: 10px;
font-weight: 400;
line-height: 13.64px;
text-align: left;
color: #B0B0B0;

}
`;

export const OurBlogFlex = styled.div`
display: flex;
`;
export const QuestionMark =styled.div`
display: flex;
align-items: start;
gap: 10px;
h2{
margin-top: -5px;

    color: #FACA10;
    font-family: Nunito;
    font-size: 30px;
    font-weight: 700;
    line-height: 40.92px;
}
`
export const TextP= styled.p`
font-family: Lora;
font-size: 18px;
font-weight: 400;
line-height: 31.68px;
letter-spacing: 0.02em;
text-align: left;
color: #1E1E1E;

`
export const Flexbox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const H1box =styled.h1`
font-family: Nunito;
font-size: 48px;
font-weight: 900;
line-height: 30.03px;
letter-spacing: 0.02em;
text-align: left;
color: #1E1E1E;

`
export const H3box =styled.h3`
font-family: Nunito;
font-size: 24px;
font-weight: 700;
line-height: 32.74px;
text-align: left;
`

export const Pbox= styled.p`
font-family: Lora;
font-size: 18px;
font-weight: 400;
line-height: 31.68px;
letter-spacing: 0.02em;
text-align: left;
color: #1E1E1E;
`
export const Border1px =styled.div`
width: 319px;
height: 0px;
border: 1px solid #F2F2F2;
margin: 10px 0px;
margin: ${(props)=>
     props.$MarginBorder ? `10px 0px` : `10px 0px 0px 0px`};
`
export const Timecont =styled.p`
font-family: Nunito;
/* font-size: 10px; */
/* font-size: ${(props) =>
    props.$fontsize ? `18px` : `10px`};
letter-spacing: ${(props) =>
     props.$spacing ? `0.26em` : `0em`}; */
font-weight: 400;
line-height: 13.64px;
text-align: left;
color: #B0B0B0;
`
export const Button2 =styled.button`
display: flex;
justify-content: space-around;
align-items: center;
margin: 20px 0px;
/* margin-bottom: ${(props) =>
     props.$margin ? `20px 0px 25px 0px` : `20px 0px`}; */
width: 157px;
height: 44px;
background-color: black;
border: none;
border-radius: 5px;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 24.55px;
letter-spacing: 0.05em;
text-align: left;
color: white;
cursor: pointer;
&:hover{
    background-color: #FAbA20;
}
`

export const Button1 =styled.button`
display: flex;
justify-content: space-around;
align-items: center;
width: 157px;
height: 44px;
background-color: #FACA10;
background-color: ${(props) => 
     props.$bgcolorWhite ? `white` : `#FACA10`};
/* background-color: ${(props) => 
     props.$bgcolorBlack ? `black` : `#FACA10`}; */
border: none;
border: ${(props)=>
    props.$BoderColor ? `2px solid #F6F6F6` : `none` };
border-radius: 5px;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 24.55px;
letter-spacing: 0.05em;
text-align: left;
color: white;
color: ${(props) => 
    props.$textcolor ? `#C4C4C4` : `white`};
width: ${(props) =>
    props.$width ? `180px` : `157px`};
cursor: pointer;
&:hover{
    color: ${(props) =>
    props.$clhover ? `white`: ``}
}
&:hover{
    background-color: #FAbA20;
}

`

export const Point =styled.div`
width: 18px;
height: 18px;
opacity: ${(props) =>
    props.$opacity ? `40%` : `` };
border-radius: 100px;
background-color: #FACA10;
`
export const Inputbox =styled.input`
padding: 10px 30px;
border-bottom: 1px solid #A5A5A5;
border-top:none ;
border-left: none;
border-right: none;
font-family: Nunito;
font-size: ${(props)=>
     props.$InputSize ? `18px` : `14px`};
font-weight: 400;
line-height: 18.68px;
letter-spacing: 0.02em;
text-align: left;
color: #C4C4C4;
`
export const Button =styled.button`
display: flex;
justify-content: space-around;
align-items: center;
width: 157px;
height: 44px;
background-color: #FACA10;
background-color: ${(props) => 
     props.$bgcolorWhite ? `white` : `#FACA10`};
/* background-color: ${(props) => 
     props.$bgcolorBlack ? `black` : `#FACA10`}; */
border: none;
border: ${(props)=>
    props.$BoderColor ? `2px solid #F6F6F6` : `none` };
border-radius: 5px;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 24.55px;
letter-spacing: 0.05em;
text-align: left;
color: white;
color: ${(props) => 
    props.$textcolor ? `#C4C4C4` : `white`};
width: ${(props) =>
    props.$width ? `180px` : `157px`};
cursor: pointer;
&:hover{
    color: ${(props) =>
    props.$clhover ? `white`: ``}
}
&:hover{
    background-color: #FAbA20;
}

`
export const Navp = styled.p`
display: flex;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
/* line-height: 24.55px; */
letter-spacing: 0.05em;
text-align: left;
color: #1E1E1E;
cursor: pointer;
&:hover{
   color: #FAbA20;
}
`
export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 'a a a';
  gap: 50px;
`;

export const CaseH1cont= styled.h1`
font-family: Nunito;
font-size: 40px;
font-weight: 700;
line-height: 54.56px;
letter-spacing: 0.05em;
text-align: left;
`

export const H2box =styled.h2`
font-family: Nunito;
font-size: 30px;
font-weight: 700;
line-height: 40.92px;
letter-spacing: 0.05em;
text-align: left;
`