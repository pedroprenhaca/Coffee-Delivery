import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
width: 40rem;
height: auto;
padding: 2.5rem;
border-radius: 0.375rem;
background-color: ${props=>props.theme["base-card"]};
`

export const IconAndTitle = styled.div`
    display: flex;
    align-items: initial;
    gap: 0.5rem;

    svg{
        width: 1.5rem;
        height: 1.5rem;
    }

    h1{
        color: ${props=>props.theme["base-subtitle"]};

        font-family: "Roboto";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
    }

    p{
        color: ${props=>props.theme["base-text"]};

        font-family: "Roboto";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
    }
`

export const CepAndStreet = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
input{
    width: 12.5rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid ${props=>props.theme["base-button"]};
    background: ${props=>props.theme["base-input"]};
}
input:last-child{
width: 35rem;
}
`
export const NumberAndComplement = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;

    input{
    width: 12.5rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid ${props=>props.theme["base-button"]};
    background: ${props=>props.theme["base-input"]};
}
    input:last-child{
    width: 22rem;
}
`

export const NeighborhoodAndCityAndUf = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;

    input{
        width: 12.5rem;
        padding: 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid ${props=>props.theme["base-button"]} ;
        background: ${props=>props.theme["base-input"]} 
    }
    input:nth-child(2){
        width: 17rem;
    }
    input:last-child{
        width: 3.75rem;
    }
`
