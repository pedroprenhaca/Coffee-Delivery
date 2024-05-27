import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import EmbalagemTermica from '../../assets/Embalagem termica home.svg'
import { HomeContainer,
        HeaderContainer,
        TitleAndItens, 
        ItensContainer, 
        ItensOneAndTwo, 
        ItensthreeAndfour,
        ItemOne,
        ItemTwo,
        ItemThree,
        ItemFour,
        MainContainer,
        CoffeesContainer
} from "./styles";
import { Coffes } from "../../Components/Coffees";

export function Home(){
    return(
        <HomeContainer>
            <HeaderContainer>
                <TitleAndItens>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <ItensContainer>
                        <ItensOneAndTwo>
                            <ItemOne>
                                <ShoppingCart weight="fill" color="#FAFAFA"/>
                                <p>Compra simples e segura</p>
                            </ItemOne>
                            <ItemTwo>
                                <Timer  weight="fill" color="#FAFAFA"/>
                                <p>Entrega rápida e rastreada</p>
                            </ItemTwo>
                        </ItensOneAndTwo>
                        <ItensthreeAndfour>
                            <ItemThree>
                                <Package weight="fill" color="#FAFAFA"/>
                                <p>Embalagem mantém o café intacto</p>
                            </ItemThree>
                            <ItemFour>
                                <Coffee weight="fill" color="#FAFAFA"/>
                                <p>O café chega fresquinho até você</p>
                            </ItemFour>
                        </ItensthreeAndfour>
                    </ItensContainer>
                </TitleAndItens>
                
                <img src={EmbalagemTermica} alt="" />
            </HeaderContainer>

            <MainContainer>
                <h2>Nossos cafés</h2>

                <CoffeesContainer>
                    <Coffes/>
                </CoffeesContainer>
            </MainContainer>
        </HomeContainer>
    )
}