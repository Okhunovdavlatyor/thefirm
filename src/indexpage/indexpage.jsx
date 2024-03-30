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
  ResearchBoxLeft,
  ReadMorebtnresearch,
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
          <Reasonbox>
            <p>Branding</p>
          </Reasonbox>
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

        <ResearchBoxLeft>
          <h1>Lorem Ipsum is simply</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took.
          </p>

          <ReadMorebtnresearch>
            <p>Read More</p>
          </ReadMorebtnresearch>
        </ResearchBoxLeft>
      </ResearchContainermain>
    </>
  );
};

export default IndexPage;
