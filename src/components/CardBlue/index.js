import styled from "styled-components";

export const CardBlue = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 300px;
width: 20%;
padding: 2rem;
text-align: center;

img{
    width: 90px;
}

h3{
    color: #fff;
    margin-top: 6px;
}

span{
    color: #CBCBCB;
    width: 250px;
    font-size: 14px;
}


&#card1{
    background: #0A0F13;
}

&#card2{
    background: #0C141A;
}

&#card3{
    background: #111B22;
}

@media(max-width: 952px){
    width: 25%;
}

@media(max-width: 780px){
    width: 35%;
}

@media(max-width: 550px){
    width: 50%;
}

@media(max-width: 380px){
    width: 60%;
}




`