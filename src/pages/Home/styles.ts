import styled from "styled-components";

/*-----------------------------------Header-------------------------------------------*/

export const HomeContainer = styled.div`
 padding:  0 10rem;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 3.5rem;
    padding: 5.8rem 0;

    img{
        width: 29.75rem;
        height: 24rem;
    }

`

export const TitleAndItens = styled.div`
    
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    h1{
        width: 36.7rem;

        font-family: "Baloo 2";
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;

    }
    p{
        width: 36.75rem;

        font-family: "Roboto";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const ItensContainer = styled.div`
width: 35.4375rem;
margin-top: 4rem;

display: flex;
justify-content: space-between;


`

export const ItensOneAndTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        svg{
            width: 2rem;
            height: 2rem;
            display: flex;
            padding: 0.5rem;
            

            border-radius: 62.5rem;
        }

        p{
            width: 11.8rem;

            font-family: "Roboto";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
        }
    }
`

export const ItensthreeAndfour = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.9rem;

div{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg{
            width: 2rem;
            height: 2rem;
            display: flex;
            padding: 0.5rem;

            border-radius: 62.5rem;
    }

     p{
    
            width: 16rem;

            font-family: "Roboto";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
    }
}
`
//Cores de Fundo dos Itens

export const ItemOne = styled.div`
    svg{
        background-color: ${props=>props.theme["yellow-dark"]};
    }
`
export const ItemTwo = styled.div`
    svg{
        background-color: ${props=>props.theme.yellow};
    }
`
export const ItemThree = styled.div`
    svg{
        background-color: ${props=>props.theme["base-text"]};
    }
`
export const ItemFour = styled.div`
    svg{
        background-color: ${props=>props.theme.purple};
    }
`

/*-----------------------------------Main-------------------------------------------*/

export const MainContainer = styled.div`

`