import styled from 'styled-components';

export const SellerCardContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin: 0px 20px 100px 20px;

  .sellercard--profile {
    margin: 5px 0px;
    display: flex;
    gap: 10px;
    text-align: left;

    span {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: brown;
    }

    .green {
      color: green;
      font-weight: bold;
    }
  }

  .sellercardcontainer--middle {
    margin: 10px 0 100px 0;

    .fakeimagecontainer {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid red;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      margin-bottom: 15px;
    }

    h3 {
      margin-bottom: 20px;
      text-align: left !important;
    }

    .price {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 10px;
    }

    .icon--container {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;

      .cart {
        border: none;
        padding: 10px 17px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        background: lime;
        color: black;
        cursor: pointer;

        span {
          margin-left: 5px;
        }
      }

      .clipboard {
        border: none;
        padding: 8px 25px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        background: grey;
        color: black;
        font-size: 18px;
        cursor: pointer;
      }

      .heart {
        border: none;
        padding: 8px 18px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        background: pink;
        color: red;
        cursor: pointer;

        span {
          color: black;
          margin-left: 2px;
        }
      }
    }
  }
`;
