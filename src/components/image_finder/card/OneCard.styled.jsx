import styled from '@emotion/styled';

export const CARD_A = styled.a`
  position: relative;
  display: flex;
  width: 400px;
  height: 300px;
  margin: 15px;
  border-radius: 2px;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0px 0px 10px;
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export const INFO_DIV = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: #00000000;
  background-color: #00000000;

  :hover,
  :focus {
    background-color: #2f368bd4;
    p {
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }
    span {
      font-size: 20px;
      color: #fff;
    }
  }
`;

export const BUTTON = styled.button`  
  display: flex;
  padding: 11px 40px;
  border: none;
  border-radius: 5px;
  margin: 60px auto 100px;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  background-color: black;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    color: black;
    background-color: #fff;
    box-shadow: 0px 0px 5px black;
  }
}
`;
