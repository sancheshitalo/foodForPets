import './styles.css';
import Header from '../../components/header';
import Product from '../../components/product/card';

const Petshop = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img 
                        src="https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png" className="img-fluid petshop-image" 
                        />
                        <b>Petlove</b>
                        <div className="petshop-infos">
                            <span className="mdi mdi-star"></span>
                            <text>
                                <b> 4,8</b>
                            </text>
                            <span className="mdi mdi-cash"></span>
                            <text>
                                <b> $$$</b>
                            </text>
                            <span className="mdi mdi-crosshairs-gps"></span>
                            <text>
                                <b> 2,9 km</b>
                            </text>
                        <label className="badge badge-primary frete">Frete Grátis</label>
                        </div>
                    </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                            <br />
                            <div className="row">
                            {[1,2,3,4,5,6,7,8,9].map(p => (<Product /> ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petshop;
