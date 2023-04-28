import logoGreen from "../../assets/logo-verde.png"
import logoWhite from "../../assets/logo.png"

const Header = ({ whiteVersion }) => {
    return (
        <div className="col-12">
            <header className="py-4 px4 text-center">
            <img  src={ whiteVersion ? logoWhite : logoGreen} className="img-fluid" />
            </header>
        </div>
    )
}

export default Header;  