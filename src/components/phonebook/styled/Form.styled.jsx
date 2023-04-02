import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FORM_DIV = styled(Form)`
  // position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 30px;
  border-radius: 5px;
  width: 300px;

  background-color: #f7f7f7;
  box-shadow: 0px 0px 10px;
`;

export const INPUT = styled(Field)`
  display: flex;
  margin: 5px 0 10px 0;
  border-radius: 4px;
  padding: 5px;
  border: none;
  width: 270px;
  height: 25px;
  box-shadow: 0px 0px 1px;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    cursor: pointer;
    box-shadow: 0px 0px 3px;
  }
`;

export const BUTTUN = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  width: 150px;
  color: black;
  background-color: #10ff002e;
  box-shadow: 0px 0px 2px #000000;
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    color: #fff;
    background-color: #0e9705bf;
    box-shadow: 0px 0px 3px #000000;
  }
`;
