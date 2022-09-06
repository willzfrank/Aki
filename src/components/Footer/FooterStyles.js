import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding:50px;

    @media (max-width: 576px) {
    padding:0;
  }

  .footerContainer--box {
    display: flex;
    flex-wrap:wrap;
    gap:70px;
    

    @media (max-width: 576px) {
    display:flex;
    flex-wrap:wrap;
    gap:35px;
    padding:50px 15px;
  }

    .followus--container {
      margin-bottom: 50px;

  

      h4 {
        margin-bottom: 5px;

      @media (max-width: 576px) {
        font-size:20px;
        margin-bottom:15px;
      }
      }

      ul {
      
        li {
          list-style: none;
          margin-bottom: 10px;

          @media (max-width: 576px) {
        margin-bottom:15px;
          }
        }
      }
    }
  }
`;

export const FooterBottomContainer = styled.div`

  .footerbottom {
    display: flex;
    align-items: center;
    margin-top: 50px;
    gap: 50px;

     @media (max-width: 576px) {
      gap:0;
      margin-top:0px;
      margin-bottom:10px;
      }

    .footerbotom--help {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

         li:first-child{
          list-style-type:none;
         }

      @media (max-width: 576px) {
      gap:25px;
      font-size:13.5px;
      margin-left:20px;
      }
      }
    }
  }
`;
