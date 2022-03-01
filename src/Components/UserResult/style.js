import styled from "styled-components";

export const ResultGlobal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 29px;
`;
export const ResultUser = styled.div`
  width: 60%;
  @media (max-width: 875px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 95%;
  }
`;
export const ContainerResult = styled.div`
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 23px;
  @media (max-width: 510px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const CollumnContainerOne = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const ImageUser = styled.img`
  width: 119px;
  height: 119px;
  border-radius: 65px;
  border: 5px solid #1c2c44;
`;

export const CollumnContainerTwo = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 510px) {
    width: 100%;
  }
`;

export const CtwoSessionOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3px;
  margin: 16px;
  @media (max-width: 400px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const InfoUser = styled.div`
  @media (max-width: 400px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const InfoUsername = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #484a4c;
  @media (max-width: 400px) {
    margin-bottom: 5px;
  }
`;

export const InfoEmail = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #484a4c;
`;

export const InfoRepository = styled.div``;

export const QuantRep = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
`;
export const CompleteRep = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
`;

export const CtwoSessionTwo = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const STwoRowOne = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const InfoCity = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
`;
export const SpanCity = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #484a4c;
`;

export const STwoRowTwo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const InfoBio = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #484a4c;
`;

export const SpanBio = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #484a4c;
  text-align: justify;
`;

export const BtnOriginalPerfil = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: #484a4c;
  text-decoration: underline;
  margin-bottom: 20px;
  cursor: pointer;
  @media (max-width: 500px) {
    text-align: center;
    margin-top: 46px;
  }
`;
