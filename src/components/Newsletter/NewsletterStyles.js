import styled from 'styled-components';

export const NewsletterContainer = styled.section`
  padding: 50px;
  display: flex;
  background: yellow;

  @media (max-width: 576px) {
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:30px 0px;
  }

  h2 {
    margin-bottom: 10px;
  }

  p {
    line-height: 28px;
    margin-bottom: 30px;

      @media (max-width: 576px) {
    padding:0 15px;
  }
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

    @media (max-width: 576px) {
    border:2px solid red;
    padding:10px 15px;
    font-size: 16px;
  }
  }
`;
