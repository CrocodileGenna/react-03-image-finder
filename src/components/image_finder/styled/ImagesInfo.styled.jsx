import styled from '@emotion/styled';

export const CONTAINER_UL = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0;
}
`;

export const SPIN = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000000;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: 
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    } 
    1s linear infinite;
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
