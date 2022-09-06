import styled from 'styled-components';

export const SellerContainer = styled.section`
  .sellercontainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  h3 {
    margin-bottom: 20px;
  }

  .sellercard--list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    border: 2px solid lime;
    padding: 10px 15px;
    border-radius: 5px;
    color: lime;
    font-weight: bold;
    width: max-content;
    margin-top: 100px;
  }
`;
