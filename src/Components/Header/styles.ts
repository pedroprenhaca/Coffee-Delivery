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
    
    img{
        cursor: pointer;
    }
`

export const LocationAndCart = styled.div`
    display: flex;
    gap: 0.75rem;
    div{
        span{
        width: 0.7rem;
        height: 1rem;
        padding: 0.2rem;

        background: ${props=>props.theme["yellow-dark"]};
        border-radius: 50%;

        font-family: 'Roboto';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
    }
    }
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
button{
width: 2.3rem;
height: 2.3rem;
display: flex;
padding: 0.3rem;
justify-content: center;
align-items: center;
border: none;
position: relative;
border-radius: 0.375rem;
cursor: pointer;

background-color:${props=>props.theme["yellow-light"]};

span{
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: -0.5rem;
    right:-0.5rem;
    
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    color: ${props=>props.theme.white};

}

}


`