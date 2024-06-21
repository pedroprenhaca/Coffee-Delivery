import styled from "styled-components";
//------------------------------Pagina Home---------------------------------

export const CoffesContainer = styled.div`
    
    width: 16rem;
    height: 19.375rem;
    border-radius: 0.375rem 2.25rem;
    padding: 0 1rem 3rem 1rem;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

    background:${props=>props.theme["base-card"]} ;

    img{
        
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

    p{
        text-align: center;
        font-family: "Roboto";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        color:${props=>props.theme["base-label"]};

       
    }


`

export const TagContainer = styled.div`
    
    display: flex;
    gap:0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`



export const BuyContainer = styled.div`
    display: flex;
    gap: 1.44rem;
    margin-top: 2.8rem;
   

    p{
        font-family: "Baloo 2";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;

        color: ${props=>props.theme["base-text"]};
    }

`

export const CounterAndButton = styled.div`
    display: flex;
    gap: 0.5rem;
  
    
   button{
    
    width: 2.375rem;
    height:2.375rem ;

    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;

    background: ${props=>props.theme["purple-dark"]};

    svg{
        width: 1.375rem;
        height:1.375rem;
        color: ${props=>props.theme["base-card"]};

    }
   }

`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    height: 2.375rem;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;

    background-color: ${props=>props.theme["base-button"]};

    svg{
        width: 0.875rem;
        height: 0.875rem;

        cursor: pointer;

        color: ${props=>props.theme.purple};

        :hover{
            color: ${props=>props.theme["purple-dark"]};
        }
    }

    p{
        font-family: "Roboto";
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;

        color: ${props=>props.theme["base-title"]};
    }
`



//------------------------------Pagina Checkout---------------------------------

export const CoffeesCheckoutContainer = styled.div`
border-bottom: 2px solid ${props=>props.theme["base-button"]};
width:23rem;
height: 5rem;
display: flex;
padding: 0.5rem 0.25rem;
justify-content: space-between;

background-color: ${props=>props.theme["base-card"]};

div{
    img{
        width: 4rem;
        height: 4rem;   
    }
}

`

export const NameAndCounterAndRemove = styled.div`
h1{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    ${props=>props.theme["base-subtitle"]}
}
`

export const CounterAndRemove = styled.div`
display: flex;
gap: 0.5rem;
align-items: end;


`

export const CounterCheckout = styled.div`
width: 4.5rem;
height: 2rem;
display: flex;
height: 2rem;
padding: 0.5rem;
justify-content: center;
align-items: center;
gap: 0.25rem;
margin-top:.5rem;
border-radius: 0.375rem;
background:${props=>props.theme["base-button"]} ;

svg{
    width: 0.875rem;
    height: 0.875rem;
    color: ${props=>props.theme["purple-dark"]};
}

p{
font-family: 'Roboto';
font-size: 1rem;
font-style: normal;
font-weight: 400;
text-align: center;
color: ${props=>props.theme["base-title"]};
}
`

export const BtnRemove = styled.div`
display: flex;


    button{
        display: flex;
        width: 5.6rem;
        height: 2rem;
        padding: 0rem 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;

        border-radius: 0.375rem;
        background:${props=>props.theme["base-button"]};
        border: none;
    }

    svg{
        width: 1rem;
        height: 1rem;
        color: ${props=>props.theme["purple-dark"]};
    }
    p{
        font-family: 'Roboto';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;

        color:${props=>props.theme["base-text"]}
    }
`