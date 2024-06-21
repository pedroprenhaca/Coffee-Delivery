import styled from "styled-components";

export const TagContainer = styled.div`
    width: 4rem;
    height: 1.3rem;
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    

    background-color: ${props=>props.theme["yellow-light"]};

    p{
        
        font-family: "Roboto";
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;

        color:${props=>props.theme["yellow-dark"]} ;
    }
`