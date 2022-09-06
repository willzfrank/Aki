import styled from 'styled-components';

export const HeaderContainer = styled.header`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-width: 576px) {
    border:none;
  }


  .HeaderContainer--box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .HeaderContainer--top {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: 40px;
      margin-top: 100px;
      margin-bottom: 30px;

    @media (max-width: 576px) {
    font-size: 16px;
    gap: 7px;
    font-weight:bold;
  }

      span {
        background: red;
        border: 1px solid red;
        border-radius: 50%;
        width: 10px;
        height: 10px;

    @media (max-width: 576px) {
        width: 5px;
        height: 5px;
  }
      }
    }

    .text--middle {
      text-align: center;
      font-size: 25px;
      margin-bottom: 30px;

      @media (max-width: 576px) {
      font-size: 18px;
      margin-bottom: 20px;
      }
    }

    button {
      border: none;
      padding: 13px 40px;
      color: white;
      background: green;
      font-size: 18px;
      margin-bottom: 100px;
      cursor: pointer;

      @media (max-width: 576px) {
      padding:10px 25px;
      border-radius:5px;
      font-size: 16px;
      }
    }
  }
`;
