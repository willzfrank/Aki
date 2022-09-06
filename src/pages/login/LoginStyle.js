import styled from "styled-components"

export const LoginComponent = styled.div`
margin 100px auto;
max-width:768px;
padding:0px 20px;

.login--header{
    display:flex;
    justify-content:flex-end;
    margin-bottom:50px;

    i{
        font-size:40px;
        cursor:pointer;
    }
}
`

export const LoginContent = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:10px;

span{
    text-align:center;
}

.email--input{
    padding:15px 35px;
    border:1px solid grey;
    border-radius:5px;

    :hover{
        outline:lime;
    }
}

.password{
    padding:15px 35px;
    border:1px solid grey;
    border-radius:5px;

    :hover{
        outline:lime;
    }
}

.F-password{
    cursor:pointer;
    font-weight:bold;
    margin-bottom:30px;
}

.login--btn{
    border:none;
    outline:none;
    border-radius:5px;
    cursor:pointer;
    padding:15px 100px;
    background:#4267B2;
    color:white;
    margin-bottom:15px;
}

.facebook--btn{
    border:none;
    outline:none;
    border-radius:5px;
    cursor:pointer;
    padding:15px 50px;
    background:#4267B2;
    color:white;
}

.google--btn{
    border:none;
    outline:none;
    border-radius:5px;
    cursor:pointer;
    padding:15px 58px;
    background:#de5246;
    color:white;
}

a{
    text-decoration:none;
    color:green;
}
`