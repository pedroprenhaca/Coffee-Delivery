import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Address, DeliveryForecast, Figure, InfoAndFigure, InfoContainer, Payment, SuccessContainer } from "./styles";
import deliveryman from '../../assets/Ilustação entregador.svg'

export function Success(){
    return(
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <InfoAndFigure>
                <InfoContainer>
                    <Address>
                        <MapPin weight="fill" size={20}/>
                        <p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
                    </Address>
                    <DeliveryForecast>
                        <Timer weight="fill"size={20}/>
                        <div>
                        <p>Previsão de entrega</p>
                        <p>20 min - 30 min</p>
                        </div>

                    </DeliveryForecast>
                    <Payment>
                        <CurrencyDollar size={20}/>
                        <div>
                        <p>Pagamento na entrega</p>
                        <p>Cartão de Crédito</p>
                        </div>

                    </Payment>
                </InfoContainer>

                <Figure>
                    <img src={deliveryman} alt="" />
                </Figure>
            </InfoAndFigure>
        </SuccessContainer>
    )
}