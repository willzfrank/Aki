import styled from 'styled-components';

export const NewsletterContainer = styled.section`
  padding: 50px;
  display: flex;
  background: yellow;

  h2 {
    margin-bottom: 10px;
  }

  p {
    line-height: 28px;
    margin-bottom: 30px;
  }

  input {
    border: 2px solid red;
    padding: 15px 50px;
    font-size: 19px;
    font-weight: bold;
    color: white;
    background: red;
    border-radius: 5px;
    cursor: pointer;
  }
`;
