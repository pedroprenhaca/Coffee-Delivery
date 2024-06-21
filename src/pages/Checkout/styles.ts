import styled from "styled-components";

export const  CheckoutContainer= styled.div`
display: flex;
width: 81.5%;
justify-content: space-between;
margin-left: 10rem;

div{
    p{
        font-family: "Baloo 2";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;

        color: ${props=>props.theme["base-subtitle"]};
    }
}
`

export const FormOfPaymentContainer = styled.div`
    width: 40rem;
    height: auto;
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    gap: 2rem;
    margin-top: 0.75rem;

    border-radius: 0.4rem;
    background: ${props=>props.theme["base-card"]};

`

export const DollarAndDescription = styled.div`
display: flex;
align-items: start;
gap: 0.5rem;

div{
    svg{
        width: 1.375rem;
        height: 1.375rem;   
    }
}

div{
    p:first-child{
        font-family: 'Roboto';
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;

        color: ${props=>props.theme["base-subtitle"]};
    }

    p:last-child{
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;

        color:${props=>props.theme["base-text"]} ;
    }
}
`

export const TypesOfPayament = styled.div`
    display: flex;
    align-items: center;
    
    gap: 0.75rem;
    div{
        width: 11rem;
        height: 3rem;
        display: flex;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 0.375rem;
        background: ${props=>props.theme["base-button"]};

        svg{
            width: 1rem;
            height: 1rem;   
        }

        p{
            font-family: "Roboto";
            font-size: 0.75rem;
            font-style: normal;
            font-weight: 400;
            text-transform: uppercase;

            color: ${props=>props.theme["base-text"]};
        }
    }

`

export const CoffeesSelectedContainer = styled.div`


p{
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;

    color: ${props=>props.theme["base-subtitle"]} ;
}
`

export const CoffeeCardAndTotal = styled.div`
display: flex;
width: 28rem;
height: auto;
padding: 2.5rem;
flex-direction: column;
gap: 1.5rem;
border-radius: 0.375rem 2.75rem;
background: ${props=>props.theme["base-card"]};

`

export const TotalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.75rem;

button{
    width: 100%;
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    background: ${props=>props.theme.yellow};
    border: none;

    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;

    color:${props=>props.theme.white}; 
}
` 

export const TotalOfItens = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 

 p:first-child{
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]}
 }

 p:last-child{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]}
 }
`

export const Delivery = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 

 p:first-child{
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]}
 }

 p:last-child{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]}
 }
`

export const Total = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;

 p:first-child{
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;

    color:${props=>props.theme["base-subtitle"]}
 }

 p:last-child{
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;

    color:${props=>props.theme["base-subtitle"]}
 }
`