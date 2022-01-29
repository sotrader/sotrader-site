import styled from "styled-components";

export const CardWhite = styled.div`

position: absolute;
left: -40px;
top: 50%;
transform: translate(-50%,-50%);
background: #fff;
padding: 2.5rem;
width: 400px;
box-shadow: 0px 100px 396px rgba(0, 0, 0, 0.07), 0px 22.3363px 88.4518px rgba(0, 0, 0, 0.0417275), 0px 6.6501px 26.3344px rgba(0, 0, 0, 0.0282725);

h2{
    color: #539237;
    margin-bottom: .5rem;
}

span{
    color: #A5A5A5;
}

&::before{
    position: absolute;
    top:0;
    left: 0;
    content: "";
    width: 13px;
    height: 94px;
    background: #539237;
}

@media(max-width: 780px){
    position: relative;
    transform: translate(0%,0%);
    left: 0;
}

@media(max-width: 730px){
    width: 350px;

    h2{
        margin-bottom: 1rem;
    }
}

@media(max-width: 580px){
    padding: 2rem;

}


`
