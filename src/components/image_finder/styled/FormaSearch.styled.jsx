import styled from '@emotion/styled';

export const FORM = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #2f368b;
  z-index: 9999;
`;

export const BUTTON = styled.button`
    padding: 11px 20px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    // margin: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    background-color: black;
    transition: all 0.4s ease 0s;

    :hover,
    :focus {
    color: black;
    background-color: #fff;
    box-shadow: 0px 0px 5px #fff;
  }
}
`;

export const INPUT = styled.input`
  padding: 0 0 0 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  outline: none;
  width: 270px;
  height: 35px;
  font-size: 20px;

  :hover,
  :focus {
    border: 1px solid balck;
  }
`;
