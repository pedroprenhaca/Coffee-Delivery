import styled from "styled-components";

export const CoffesContainer = styled.div`
    border: 1px solid red;
    
    width: 16rem;
    height: 19.375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: ${props=>props.theme["base-card"]};
    border-radius: 0.375rem 2.25rem;

    img{
        border: 1px solid purple;
        width: 7.5rem;
        height: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1{
        font-family: "Baloo 2";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;

        color:${props=>props.theme["base-subtitle"]} ;
    }


`

export const Tag = styled.div`
    width: 5rem;
    height: 1.3;
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    margin-top: 1rem;

    background-color: ${props=>props.theme["yellow-light"]};

    p{
        font-family: "Roboto";
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;

        color:${props=>props.theme["yellow-dark"]} ;
    }

`