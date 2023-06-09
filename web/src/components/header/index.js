import logoGreen from "../../assets/logo-verde.png";
import logoWhite from "../../assets/logo.png";

import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ whiteVersion, hideCart }) => {
  const openDrawer = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-4 px4 text-center">
        <Link to="/">
          <img
            src={whiteVersion ? logoWhite : logoGreen}
            className="img-fluid"
            alt=""
          />
        </Link>
      </header>
      {!hideCart && (
        <button onClick={openDrawer} className="btn btn-secondary cart-button">
          <span className="mdi mdi-cart"></span> Minha sacola
        </button>
      )}
    </div>
  );
};

export default Header;
