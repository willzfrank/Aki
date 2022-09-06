import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: black;
  padding: 25px 0px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

    @media (max-width: 576px) {
    display:none;
  }
`;

export const NavbarList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .navbarlist--container {
    display: flex;
    gap: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const NavbarLoginBtn = styled.div`
  ul {
    display: flex;
    gap: 35px;

    justify-content: center;
    align-items: center;

    .login--btn {
      background: green;
      padding: 7px 20px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }
    li {
      list-style: none;
      cursor: pointer;
    }
  }
`;
