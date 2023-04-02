import styled from '@emotion/styled';

export const LIST_UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center

  width: 350px;
`;

export const ONE_CONTACT_LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  width: 300px;
  color: black;
  background-color: #0000002e;
  box-shadow: 0px 0px 3px;
`;

export const BUTTUN = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  width: 50px;
  font-size: 11px;
  color: black;
  background-color: #ff9191;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    color: #fff;
    background-color: red;
  }
`;
