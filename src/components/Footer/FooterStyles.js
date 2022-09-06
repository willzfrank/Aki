import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 100px 50px;

  .footerContainer--box {
    display: flex;
    justify-content: space-between;

    .followus--container {
      margin-bottom: 50px;

      h4 {
        margin-bottom: 5px;
      }

      ul {
        li {
          list-style: none;
          margin-bottom: 10px;
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

    .footerbotom--help {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        list-style: none;
      }
    }
  }
`;
