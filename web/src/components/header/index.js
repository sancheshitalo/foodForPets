import logoGreen from "../../assets/logo-verde.png"
import logoWhite from "../../assets/logo.png"
import './styles.css';

const Header = ({ whiteVersion }) => {

    const openDrawer = () => {
        const event = new CustomEvent('openCart');
        window.dispatchEvent(event);
    }

    return (
        <div className="col-12">
            <header className="py-4 px4 text-center">
            <img  src={ whiteVersion ? logoWhite : logoGreen} className="img-fluid" />
            </header>
            <button onClick={openDrawer} className="btn btn-secondary cart-button">
               <span className="mdi mdi-cart"></span> Minha sacola
            </button>

        </div>
    )
}

export default Header;  