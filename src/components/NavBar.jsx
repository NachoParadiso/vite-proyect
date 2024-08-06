import './NavBar.css'
import ButtonComponent from "./ButtonComponent";
import CartWidget from './CartWidget';


export default function NavBar() {
    return (
    <>
    <nav className="barra">
        <img style={{width:60}} href ="#"  src="https://w7.pngwing.com/pngs/398/212/png-transparent-logo-electronics-corporate-identity-design-electronics-text-trademark.png" alt="logo" />
        <ButtonComponent nombre = 'About' color = 'pink' />
        <ButtonComponent nombre = 'prompt' color = 'blue'/>
        <ButtonComponent nombre = 'contact' color = 'green'/>
        <CartWidget />

    </nav>
    
    </>
    
    )
}