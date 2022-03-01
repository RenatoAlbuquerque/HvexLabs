import styled from "styled-components";

export const SearchGlobal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const searchUser = styled.div`
  width: 60%;
  @media (max-width: 875px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 95%;
  }
`;
export const textHelpSearch = styled.p`
  margin-top: 77px;
  font-size: 18px;
  line-height: 21px;
  color: #484a4c;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 18px;
    margin-top: 56px;
  }
`;

export const formSearch = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 11px;
`;

export const inputSearch = styled.input`
  width: 100%;
  padding: 19px 0 19px 33px;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 8px;

  @media (max-width: 500px) {
    width: 95%;
    padding: 9px 0 9px 23px;
  }
`;

export const BtnSearch = styled.button`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  background-color: #10486d;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 0 15px;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
