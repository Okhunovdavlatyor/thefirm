import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: #fff;
  position: sticky;
  width: 100%;
  z-index: 9999;
  top: 0;
`;

export const NavLeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 209px;
    height: 35px;
  }
`;

export const NavRightContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    color: #1e1e1e;
    font-family: Nunito;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`;

export const Getintouchbtn = styled.div`
  width: 157px;
  height: 44px;
  border-radius: 5px;
  background: #faca10;
  box-shadow: 0px 10px 40px -12px rgba(250, 202, 16, 0.35);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
