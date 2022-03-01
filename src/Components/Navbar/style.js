import styled from "styled-components";

export const NavGlobal = styled.div`
  width: 100%;
  background-color: #10486d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavUser = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 875px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 95%;
    flex-direction: column;
  }
`;

export const infoWeb = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const titleHvex = styled.h1`
  font-size: 40px;
  color: #10486d;
  font-family: Arial, sans-serif;
  font-weight: bold;
  line-height: 46.66px;
  color: #fff;
  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 36.66px;
  }
`;

export const spanTitle = styled.span`
  font-weight: 400;
`;

export const infoNameLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 23px;
`;

export const infoNameUser = styled.p`
  display: flex;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  line-height: 23px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const infoNameMobile = styled.p`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 23px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 20px;
    margin-top: 25px;
  }
`;

export const Bar = styled.div`
  width: 2px;
  height: 20px;
  background-color: #fff;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const BtnLogout = styled.button`
  font-size: 15px;
  line-height: 17.58px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;
