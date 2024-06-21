import { MapPin,ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer,LogoContainer,LocationAndCart,Location,Cart } from './styles'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartItensContext';

export function Header(){
    const navigate = useNavigate();
    const { cartItems } = useCart();

    function handleCartClick() {
        navigate('/checkout');
      }

    function handleLogoClick(){
        navigate('/')
    }
    return(
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="" onClick={handleLogoClick}/>
            </LogoContainer>

            <LocationAndCart>
                <Location>
                    <MapPin weight="fill" color='#8047F8'/>
                    <p>Lençóis Paulista, SP</p>
                </Location>
                <Cart>
                <button onClick={handleCartClick}>
                    <ShoppingCart color="#C47F17" weight="fill" size={24}></ShoppingCart>
                    <span>{cartItems.length}</span>
                </button>
                </Cart>
                </LocationAndCart>
        </HeaderContainer>
    )
}