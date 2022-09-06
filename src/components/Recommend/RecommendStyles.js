import styled from 'styled-components';

export const RecommendContainer = styled.section`
  @media (max-width: 576px) {
    padding:0 10px;
  }

  .recommend--title {
    margin-left: 50px;
    margin-bottom: 25px;

    @media (max-width: 576px) {
    font-size:25px;
     margin-left: 0px;
  }
  }
  .recommendedslider {
    display: flex;
    justify-content: center;
    align-items: center;

      @media (max-width: 576px) {
    display:flex;
    flex-direction:column;
    width:100%;
    flex-wrap:wrap;
  }
  }
`;
