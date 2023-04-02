import styled from '@emotion/styled';
// import 'modern-normalize';

export const GlobalStyle = styled.div`
  h1,
  h2,
  h3,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const LIST_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 30px;
  width: 300px;
`;
