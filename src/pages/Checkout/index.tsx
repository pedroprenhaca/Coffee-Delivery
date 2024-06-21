import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { CheckoutForm } from "./CheckoutForm";
import { CheckoutContainer, CoffeeCardAndTotal, CoffeesSelectedContainer, Delivery, DollarAndDescription, FormOfPaymentContainer, Total, TotalContainer, TotalOfItens, TypesOfPayament } from "./styles";
import { Coffes } from "../../Components/Coffees";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { useContext } from "react";
import { useCart } from "../../contexts/CartItensContext";

export function Checkout(){
    const coffees = useContext(CoffeesContext)    
    const { cartItems, totalCoffees } = useCart();

    const priceOfDelivery = 3.50
    const valueTotal = totalCoffees() + priceOfDelivery;
        return(
        
        <CheckoutContainer>
            <div>
                <p>Complete seu pedido </p>

                <CheckoutForm/>

                <FormOfPaymentContainer>
                    <DollarAndDescription>
                        <div>
                            <CurrencyDollar color="#8047F8" />
                        </div>
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </DollarAndDescription>    
                        <TypesOfPayament>
                            <div>
                            <CreditCard color="#8047F8" />
                            <p>Cartão de crédito</p>
                            </div>
                            <div>
                            <Bank color="#8047F8" />
                            <p>cartão de débito</p>
                            </div>
                            <div>
                            <Money  color="#8047F8" />
                            <p>Dinheiro</p>
                            </div>
                        </TypesOfPayament>
                </FormOfPaymentContainer>
            </div>
            <CoffeesSelectedContainer>
                <p>Cafés selecionados</p>

                <CoffeeCardAndTotal>
                    {cartItems.map(cartItem=>{
                       const coffee = coffees.find(c => c.id === cartItem.id);
                       if (!coffee) return null;
                       return (
                           <Coffes 
                               key={cartItem.id}
                               coffee={{ ...coffee, quantity: cartItem.quantity }} 
                               isCheckout={true} 
                           />
                        )
                    })}

                    <TotalContainer>
                        <TotalOfItens>
                            <p>Total de itens</p>
                            <p>R$ {totalCoffees().toFixed(2)}</p>
                        </TotalOfItens>

                        <Delivery>
                            <p>Entrega</p>
                            <p>R$ {priceOfDelivery.toFixed(2)}</p>
                        </Delivery>

                        <Total>
                            <p>Total</p>
                            <p>R$ {valueTotal.toFixed(2)}</p>
                        </Total>

                        <button>
                            confirmar pedido
                        </button>
                    </TotalContainer>
                </CoffeeCardAndTotal>
            </CoffeesSelectedContainer>
        </CheckoutContainer>
    )
}