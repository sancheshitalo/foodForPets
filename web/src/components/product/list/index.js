import './styles.css'

const Product = () => {
 return (
    <div className="product-list col-12">
        <div className="row">
            <div className="col-3">
                <img src="https://a-static.mlcdn.com.br/800x560/racao-de-cachorro-pedigree/petgril/adda6780ddc311ec864a4201ac185078/8918ed9771edb589930281a7382301ed.jpg" className="img-fluid" />
            </div>
            <div className="col-6">
                <h6>
                    <label className="badge badge-primary">R$ 25,00</label>
                </h6>
                <small>
                    <b>Ração Pedigree raças pequenas 15kg</b>
                </small>
            </div>
            <div className="col-3">
                <button className="btn btn-secondary rounded-circle">-</button>
            </div>
        </div>
    </div>
 )
}

export default Product;