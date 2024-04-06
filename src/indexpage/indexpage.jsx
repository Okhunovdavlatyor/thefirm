import React from "react";
import {
  Companyboxes,
  IndexWrapper,
  Indexintro,
  Introleft,
  Introright,
  Introtext,
  LeftBoxFrus,
  LeftBoxSolution,
  PartnerCon,
  Partnerbox,
  Partnertext,
  ReasonCon,
  ReasonConText,
  RightBoxFrus,
  RightBoxSolution,
  Scroll,
  Reasonbox,
  BrandingCon,
  BrandingConLeft,
  BrandingConRight,
  ReasonContainermain,
  ReadMorebtn,
  ResearchContainermain,
  
  
  ResearchBoxRight,
  
  TextP,
  QuestionMark,
  Flexbox,
  H1box,
  Pbox,
  H3box,
  Border1px,
  Timecont,
  Button2,
  Button1,
  Point,
  Inputbox,
  Button,
  Navp,
} from "./indexpagestyle";
import { Getintouchbtn } from "../navbar/navbarstyle";
import mainpageintro from "../assets/mainpageintro.png";
import image1 from "../assets/windows.png";
import image2 from "../assets/google.png";
import image3 from "../assets/firefox-logo-horizontal-lockup.png";
import image4 from "../assets/safari.png";
import image5 from "../assets/indeximage1.png";
import image6 from "../assets/indeximage2.png";
import image7 from "../assets/indeximage3.png";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
import testimonial33 from "../assets/testimonial33.png";
import testimonial4 from "../assets/testimonial4.png";
import testimonial5 from "../assets/testimonial5.png";
import img9 from '../assets/Mask Group (2).png';
//import img10 from '../assets/Group 55.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import map from '../assets/map.png';
import footerLogo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import facebook1 from '../assets/facebook.png'
import twitter1 from '../assets/twitter.png'
import youtube1 from '../assets/youtube.png'
import in1 from '../assets/in.png'
import p1 from '../assets/p.png'
const IndexPage = () => {
  return (
    <>
      <Indexintro>
        <Introleft>
          <Introtext>
            <h1>
              Get Bussiness <br /> Solutions with TheFirm.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has been <br /> the industry's
              standard dummy.
            </p>

            <Getintouchbtn>Get in Touch</Getintouchbtn>
          </Introtext>
        </Introleft>
        <Introright>
          <img src={mainpageintro} alt="mainbg" />
        </Introright>
      </Indexintro>

      <PartnerCon>
        <Partnertext>
          <h1>
            Our <span>Partner</span>
          </h1>
        </Partnertext>

        <Partnerbox>
          <Scroll>{`<`}</Scroll>
          <Companyboxes>
            <img src={image1} alt="image1" />
          </Companyboxes>
          <Companyboxes $google1>
            <img src={image2} alt="image2" />
          </Companyboxes>
          <Companyboxes>
            <img src={image3} alt="image3" />
          </Companyboxes>
          <Companyboxes>
            <img src={image4} alt="image4" />
          </Companyboxes>
          <Scroll $scroll1>{`>`}</Scroll>
        </Partnerbox>
      </PartnerCon>

      <IndexWrapper>
        <LeftBoxFrus>
          <h1>
            Frustration of <span>Clients</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy <br />{" "}
            text ever since the 1500s,
          </p>                
          <ul style={{padding: "30px 0px 0px 30px"}}>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Loren rasion gravida auem is bibenua tase</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Loren rasion gravida auem is bibenua the</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>Printing and typesetting industry. Lorem Ipsum</TextP>
              </QuestionMark>
              <QuestionMark>
                <h2>?</h2>
              <TextP>When an unknown printer took a galley of type and<br></br> scrambled it</TextP>
              </QuestionMark>
             </ul>
          
          
        </LeftBoxFrus>
        
        
        <RightBoxFrus>
          <img src={image5} alt="image5" />
        </RightBoxFrus>
      </IndexWrapper>

      <IndexWrapper $solutionbox>
        <LeftBoxSolution>
          <img src={image6} alt="image6" />
        </LeftBoxSolution>
        <RightBoxSolution>
          <h1>
            Perfect Solution for Your <span>Bussiness</span>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <Getintouchbtn>Read More</Getintouchbtn>
        </RightBoxSolution>
      </IndexWrapper>
      <ReasonContainermain>
        <ReasonConText>
          <h1>
            Reason to Choose <span>Us</span>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been <br /> the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of{" "}
            <br /> type and scrambled it to make a type specimen book. It has
            survived not only five centuries,
          </p>
        </ReasonConText>
        <ReasonCon>
          <Reasonbox>
            <p>Market Reserch</p>
          </Reasonbox>
          <Getintouchbtn>
            <p>Branding</p>
          </Getintouchbtn>
          <Reasonbox>
            <p>Reporting</p>
          </Reasonbox>
          <Reasonbox>
            <p>Data Analysis</p>
          </Reasonbox>
        </ReasonCon>

        <BrandingCon>
          <BrandingConLeft>
            <img src={image7} alt="image7" />
          </BrandingConLeft>
          <BrandingConRight>
            <h1>Branding</h1>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <ReadMorebtn>
              <p>Read More</p>
            </ReadMorebtn>
          </BrandingConRight>
        </BrandingCon>
      </ReasonContainermain>

      <ResearchContainermain>
        <ReasonConText>
          <h1>
            Our Reseach & Case <span>Studies</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been <br /> the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of{" "}
            <br /> type and scrambled it to make a type specimen book. It has
            survived not only five centuries,
          </p>
        </ReasonConText>
         <IndexWrapper>
         <Flexbox style={{padding: "50px 0px 0px 0px"}}>
         <div style={{paddingRight: "60px"}}>
          <h1>Lorem Ipsum is simply</h1>
          <Pbox style={{maxWidth: "550px", margin: "20px 0px 30px 0px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type Lorem Ipsum is simply dummy 
                     text of the printing and typesetting industry. Lorem Ipsum has been the 
                     industry's standard dummy text ever since the 1500s, when an unknown printer took.
                </Pbox>
        
          <Button1>
            <p>Read More</p>
          </Button1>
          </div>
        </Flexbox>
        <ResearchBoxRight>
        <div style={{padding: "10px",
             border: "1px solid white", 
             borderRadius: "25px",
             zIndex: "6"
             }}>
        <img src={img9} alt="img9" style={{zIndex: "5"}} /> </div>
        <div style={{
                     backgroundColor: "#FACA10",
                     borderRadius: "100px",
                     width: "139px",
                     height: "139px",
                     opacity: "0.4",
                     margin: "-75px 0px 0px -470px",
                     

                 }}></div>       
        </ResearchBoxRight>
          </IndexWrapper> 
        
      </ResearchContainermain>
      <Flexbox style={{ flexDirection: "column", backgroundColor: "#F2F2F2", padding: "70px 0px 60px 0px" }}>
      <H1box style={{marginBottom: "70px"}}>Our Blogs</H1box>
      <Flexbox style={{gap: "50px"}}>
      <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
      >
          
        
          <img src={img1} alt="img1" style={{marginLeft: "-4px"}}/>
          <H3box style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </H3box>
          <Pbox style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </Pbox>
          <Flexbox>
          <Border1px $MarginBorder></Border1px>
          </Flexbox>
          <Flexbox style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <Flexbox>
            <img
                src={img4}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </Flexbox>
                <Flexbox>
                  <Timecont>28,Aug 2020, 09:48:00</Timecont>
                </Flexbox>
          </Flexbox>
          <Flexbox>
            <Button2>Read More</Button2>
          </Flexbox>
          </div>

          <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
      >
          
        
          <img src={img2} alt="img1" style={{marginLeft: "-4px"}}/>
          <H3box style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </H3box>
          <Pbox style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </Pbox>
          <Flexbox>
          <Border1px $MarginBorder></Border1px>
          </Flexbox>
          <Flexbox style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <Flexbox>
            <img
                src={img4}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </Flexbox>
                <Flexbox>
                  <Timecont>28,Aug 2020, 09:48:00</Timecont>
                </Flexbox>
          </Flexbox>
          <Flexbox>
            <Button2>Read More</Button2>
          </Flexbox>
          </div>

          <div
          style={{
            border: "1px solid #FACA1066",
            width: "340px",
            borderRadius: "25px",
            backgroundColor: "white",
          }}
      >
          
        
          <img src={img3} alt="img1" style={{marginLeft: "-4px"}}/>
          <H3box style={{ padding: "0px 8px 10px 8px" }}>Lorem Ipsum is </H3box>
          <Pbox style={{ padding: "0px 8px" }}>
            Lorem Ipsum is simply text of the printing and type setting
            industry. make a type specimen.
          </Pbox>
          <Flexbox>
          <Border1px $MarginBorder></Border1px>
          </Flexbox>
          <Flexbox style={{ justifyContent: "space-between", padding: "0px 10px" }}>
            <Flexbox>
            <img
                src={img4}
                alt="alex"
                style={{
                  borderRadius: "50px",
                  border: "0px solid red",
                  marginTop: "8px",
                }}
              />
              <p>Alex Liones</p>
            </Flexbox>
                <Flexbox>
                  <Timecont>28,Aug 2020, 09:48:00</Timecont>
                </Flexbox>
          </Flexbox>
          <Flexbox>
            <Button2>Read More</Button2>
          </Flexbox>
          </div>

      </Flexbox>
      <Button1 style={{marginTop: "40px"}}>View more</Button1>
    </Flexbox>


    <Flexbox style={{
        flexDirection: "column",
        padding: "110px 0px 95px 0px",
      }}>
        <H1box>Our Testimonials</H1box>
      <Flexbox style={{ gap: "50px", margin: "60px 0px 40px 0px"}}>
        <img src={testimonial1} alt="testimonial1" />
        <img src={testimonial2} alt="testimonial2" />
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
            <img src={testimonial3} alt="testimonial3" />
            <img
              src={testimonial33}
              alt="testimonial33"
              style={{ zIndex: "2", marginLeft: "-60px", marginTop: "-60px" }}
            />
          </div>
        </div>
        
        <img src={testimonial4} alt="termonial4" />
        <img src={testimonial5} alt="termonial5" />
        
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
                
    </Flexbox >

    <Flexbox style={{flexDirection: "column"}}>
        <Flexbox>
            <img src={map} alt="map" />
        </Flexbox>
        <Flexbox style={{
            display: "flex",
            flexDirection: "column",
           alignItems: "center",
            border: "1px solid black", 
            height: "500px",
            width: "938px",
            marginTop: "-250px",
            zIndex: "10",
            backgroundColor: "white",
            borderRadius: "25px",
             }}>
            <H1box>Get in Touch</H1box>
            <div className='inputBox'>

                <Inputbox type='text' placeholder='Name'></Inputbox>
                <Inputbox type='email' placeholder='Email'></Inputbox>
            <Inputbox type='text' placeholder='Name'></Inputbox>

                <select name="aa" id="aa" style={{
                    padding: "10px 30px",
                    borderTop: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #A5A5A5",
                    borderLeft: "none",
                    }}>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Abcde">Abcde</option>
                </select>
            </div>
            <Button>SUBMIT</Button>
        </Flexbox>
    </Flexbox>

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


    </>
  );
};

export default IndexPage;
