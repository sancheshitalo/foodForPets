import './styles.css';

const Petshop = () => {
    return (
        <li className="petshop d-inline-block">
            <div className="d-inline-block">
            <img 
                src="https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png" className="img-fluid" 
            />
            </div>
            <div className="d-inline-block">
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
                    </div>
                <label className="badge badge-primary frete">Frete Grátis</label>
            </div>
        </li>
    )
}

export default Petshop