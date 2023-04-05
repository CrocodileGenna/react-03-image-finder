import styled from '@emotion/styled';

export const CONTAINER_UL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 50px 0 0 0;
}
`;

export const CARD_LI = styled.li`
  position: relative;
  display: flex;
  width: 250px;
  margin: 15px;
  border-radius: 5px;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px;
  }
`;

export const IMG = styled.img`
  width: 100%;
  border-radius: 5px;
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
    background-color: #000000e0;
    p {
      color: green;
    }
    span {
      color: #fff;
    }
  }
`;
