import styled from "styled-components";

export const CoffesContainer = styled.div`
    
    
    width: 16rem;
    height: 19.375rem;
    border-radius: 0.375rem 2.25rem;
    padding: 0 1.25rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

    background-color: ${props=>props.theme["base-card"]};
    

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

export const Tag = styled.div`

    width: 5rem;
    height: 1.3rem;
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

        color: ${props=>props.theme.purple};
    }

    p{
        font-family: "Roboto";
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;

        color: ${props=>props.theme["base-title"]};
    }
`