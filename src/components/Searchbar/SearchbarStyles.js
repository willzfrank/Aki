import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

export const FormContainer = styled.div`
  width: 50%;
  input {
    background: grey;
    border: none;
    width: 60%;
    padding: 15px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    outline: none;
    ::placeholder {
      color: white;
      text-align: center;
    }
  }

  .formcontainer--btn {
    background: red;
    border: none;
    color: white;
    padding: 15px 40px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;

    i {
      margin-right: 5px;
    }
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  gap: 50px;

  .accountcontainer--box {
    display: flex;
    gap: 10px;
    font-weight: bold;
  }
`;
