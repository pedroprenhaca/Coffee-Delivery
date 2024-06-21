import { MapPinLine } from "@phosphor-icons/react";
import { CepAndStreet, CheckoutFormContainer, IconAndTitle, NeighborhoodAndCityAndUf, NumberAndComplement } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod  from 'zod'

const checkoutFormValidationSchema = zod.object({
    cep:zod.number().min(1,'Informe seu cep').max(8),
    rua:zod.string().min(1,'Informe o nome da sua rua').max(60),
    numero:zod.number().min(1,'Informe o numero da sua residencia').max(5),
    complemento:zod.string().min(1,'Informe o tipo da sua residencia'),
    bairro:zod.string().min(1,'Informe o nome do seu bairro').max(60),
    cidade:zod.string().min(1,'Informe o nome da sua cidade').max(60),
    uf:zod.number().min(1,'Informe a sigla do seu estado').max(2),
})

export function CheckoutForm(){
    const {register} =useForm({
        resolver:zodResolver(checkoutFormValidationSchema),
    })
    return(
        <CheckoutFormContainer>
            <IconAndTitle>
                <MapPinLine size={20} color="#C47F17"/>
                <div>
                    <h1>Endereço de Entrega</h1>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </IconAndTitle>
            <form>
                <CepAndStreet>
                    <input type="text" placeholder="CEP" {...register('cep')} />
                    <input type="text"placeholder="Rua" {...register('rua')} />
                </CepAndStreet>
                <NumberAndComplement>
                    <input type="text" placeholder="Número" {...register('numero')} />
                    <input type="text" placeholder="Complemento" {...register('complemento')}/>
                </NumberAndComplement>
                <NeighborhoodAndCityAndUf>
                    <input type="text" placeholder="Bairro" {...register('bairro')} />
                    <input type="text"  placeholder="Cidade" {...register('cidade')}/>
                    <input type="text" placeholder="UF" {...register('uf')} />
                </NeighborhoodAndCityAndUf>
               
            </form>
        </CheckoutFormContainer>
    )
}