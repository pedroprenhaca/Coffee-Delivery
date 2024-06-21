import styled from "styled-components";

export const SuccessContainer = styled.div`
margin-left: 10rem;
width: 81.5%;
height: auto;

h1{
    font-family: "Baloo 2";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;

    color:${props=>props.theme["yellow-dark"]}
}

p{
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-subtitle"]}
}

`
export const InfoAndFigure = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2.5rem;
`
export const InfoContainer = styled.div`

display: flex;
width: 32.875rem;
padding: 2.5rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;

border-radius: 0.4rem 2.25rem;
border: 1px solid ${props=>props.theme["purple-dark"]};

`

export const Address = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;

svg{
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.4rem;

    border-radius: 60.5rem;
    background: ${props=>props.theme.purple};
    color:${props=>props.theme.background}; 
}
p{
    width: 19.3rem;
    height: auto;
    font-family:' Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]};
}
span{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;

    color:${props=>props.theme["base-text"]};
}
`

export const DeliveryForecast = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;

svg{
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.4rem;

    border-radius: 60.5rem;
    background: ${props=>props.theme.yellow};
    color:${props=>props.theme.background}; 
}
p:first-child{

    font-family:' Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]};
}
p:last-child{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;

    color:${props=>props.theme["base-text"]};
}

`

export const Payment = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;

svg{
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.4rem;

    border-radius: 60.5rem;
    background: ${props=>props.theme["yellow-dark"]};
    color:${props=>props.theme.background}; 
}
p:first-child{
    font-family:' Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

    color:${props=>props.theme["base-text"]};
}
p:last-child{
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;

    color:${props=>props.theme["base-text"]};
}
`

export const Figure = styled.div`
width: 30.75rem;
height: 18.3125rem;
`