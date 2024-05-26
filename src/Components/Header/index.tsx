import { MapPin,ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer,LogoContainer,LocationAndCart,Location,Cart } from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="" />
            </LogoContainer>

            <LocationAndCart>
                <Location>
                    <MapPin weight="fill" color='#8047F8'/>
                    <p>Lençóis Paulista, SP</p>
                </Location>

                <Cart>
                    <ShoppingCart color="#C47F17" weight="fill" />
                </Cart>
            </LocationAndCart>
        </HeaderContainer>
    )
}