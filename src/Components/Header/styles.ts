import styled from "styled-components";

export const HeaderContainer = styled.div`
    
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;

`

export const LogoContainer = styled.div`
    width: 5.3095rem;
    height: 2.5rem;
`

export const LocationAndCart = styled.div`
    display: flex;
    gap: 0.75rem;
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    width: 8.9rem;
    height: 2.3rem;

    border-radius: 0.375rem;
    background-color: ${props=>props.theme["purple-light"]};

    svg{
        width: 1.375rem;
        height: 1.375rem;
    }

    p{
        

        font-family: "Roboto", sans-serif;
        font-size: 0.6rem;
        font-style: normal;
        font-weight: 400;
        color: ${props=>props.theme["purple-dark"]} ;
    }
`

export const Cart = styled.div`
width: 2.3rem;
height: 2.3rem;
display: flex;
padding: 0.5rem;
justify-content: center;
align-items: center;

border-radius: 0.375rem;

background-color:${props=>props.theme["yellow-light"]};
`