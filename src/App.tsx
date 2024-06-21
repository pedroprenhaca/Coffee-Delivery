import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { CartProvider } from "./contexts/CartItensContext";

export function App() {
  
  return (
   <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <CartProvider>
            <Router/>
          </CartProvider>
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
   </ThemeProvider>
  )
}

