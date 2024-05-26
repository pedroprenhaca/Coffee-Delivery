import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import cafequalquer from '../../assets/Capuccino.svg'
import { CoffesContainer, Tag } from './styles'

export function Coffes(){
    return(
        <CoffesContainer>
            <img src={cafequalquer} alt="" />
                <Tag>
                    <p>Tradicional</p>
                </Tag>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div>
                <p>R$ 9,90</p>
                    <div>
                        <div>
                             <Minus/>
                                <p>1</p>
                            <Plus/>
                        </div>
                        <ShoppingCart/>
                    </div>

            </div>
        </CoffesContainer>
    )
}