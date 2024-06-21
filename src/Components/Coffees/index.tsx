import { Minus, Plus, ShoppingCart, Trash } from '@phosphor-icons/react'
import { BtnRemove, BuyContainer, CoffeesCheckoutContainer, CoffesContainer, Counter, CounterAndButton, CounterAndRemove, CounterCheckout, NameAndCounterAndRemove, TagContainer } from './styles'
import { CoffeeType } from '../../contexts/CoffeesContext'
import { Tag } from '../Tag'
import { useState } from 'react'
import { useCart } from '../../contexts/CartItensContext'


interface CoffeeProps {
    coffee : CoffeeType
    className?:string
    isCheckout?: boolean;
}

export function Coffes({coffee,className, isCheckout = false}:CoffeeProps){

    const [couterCoffee, setCouterCoffee] = useState(0);
    
    const { cartItems, setCartItems } = useCart();

    function handleAddCoffee(){
        setCouterCoffee(couterCoffee + 1)
    }

    function handleSubtractCoffee(){
        if (couterCoffee > 0) {
            setCouterCoffee(couterCoffee - 1)
        }
        return 0
    }

    function handleAddCart() {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === coffee.id);
            if (existingItemIndex >= 0) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += couterCoffee;
                return updatedItems;
            } else {
                
                return [...prevItems, { id: coffee.id, image: coffee.image, name: coffee.name, quantity: couterCoffee }];
            }
        });
        setCouterCoffee(0);
    }
    
    function handleRemoveCoffeeInCheckout(id:number){
        const indiceItem = cartItems.findIndex((item) => item.id === id);

        if (indiceItem >= 0) {
            const itensAtualizados = [...cartItems];
            itensAtualizados.splice(indiceItem, 1);
            setCartItems(itensAtualizados);
        }
    }

    if (!isCheckout){
    return( 
        <CoffesContainer className={className}>
            <img src={coffee.image} alt="" />
            <TagContainer>
                {coffee.tags.map(tag=>{
                    return(
                        <Tag tag={tag} />
                    )
                })}
            </TagContainer>
            <h1>{coffee.name}</h1>
            <p>{coffee.description}</p>

            <BuyContainer>
                <p>R$9,90</p>
                    <CounterAndButton>
                        <Counter>
                            <Minus weight='bold' onClick={handleSubtractCoffee} />
                            <p>{couterCoffee}</p>
                            <Plus weight='bold' onClick={handleAddCoffee}/>
                        </Counter>
                        <button onClick={handleAddCart}><ShoppingCart weight='fill'/></button>
                    </CounterAndButton>

            </BuyContainer>
        </CoffesContainer>
    )
}else{
    return(
        <CoffeesCheckoutContainer>
            <div>
                <img src={coffee.image} alt="" />
            </div>

            <NameAndCounterAndRemove>
                <h1>{coffee.name}</h1>
                    <CounterAndRemove>
                       <CounterCheckout>
                            <Minus weight='bold' onClick={handleSubtractCoffee} />
                            <p>{}</p>
                            <Plus weight='bold' onClick={handleAddCoffee}/>
                        </CounterCheckout> 
                        <BtnRemove>
                            <button onClick={()=>handleRemoveCoffeeInCheckout(coffee.id)}>
                            <Trash  />
                                Remover
                            </button>
                        </BtnRemove>
                    </CounterAndRemove>    
                </NameAndCounterAndRemove>

                <div>
                    <p>R$9,90</p>
                </div>
            
        </CoffeesCheckoutContainer>
    )
}
}