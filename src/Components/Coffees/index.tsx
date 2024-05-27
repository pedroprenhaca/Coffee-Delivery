import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import cafequalquer from '../../assets/Capuccino.svg'
import { BuyContainer, CoffesContainer, Counter, CounterAndButton, Tag } from './styles'

export function Coffes(){
    return(
        <CoffesContainer>
            <img src={cafequalquer} alt="" />
                <Tag>
                    <p>Tradicional</p>
                </Tag>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <BuyContainer>
                <p>R$9,90</p>
                    <CounterAndButton>
                        <Counter>
                            <Minus weight='bold'/>
                            <p>1</p>
                            <Plus weight='bold'/>
                        </Counter>
                        <button><ShoppingCart weight='fill'/></button>
                    </CounterAndButton>

            </BuyContainer>
        </CoffesContainer>
    )
}