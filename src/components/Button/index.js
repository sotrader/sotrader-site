import styled from "styled-components";

export const Button = styled.button`
    position: relative;
    margin-top: 1rem;
    width: 80%;
    padding: 10px;
    border: 1px solid #fff;
    background: transparent;
    font-weight: bold;
    font-family: 'Poppins';
    cursor: pointer;
    text-transform: uppercase;
    overflow: hidden;
    transition: .6s ease-in-out;
    
    span {
        color: #fff;
        position: relative;
        z-index: 15;

    }


    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);

        width: 110%;
        height: 0;
        background: #539237;
        z-index: 10;
        transition: .5s ease-in-out;
    }

    
    
    &:hover{
        border: 1px solid #539237;
        &:before{
            height: 390%;
            
        }
    }

`