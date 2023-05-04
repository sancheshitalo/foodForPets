import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img 
                src="https://petbox.vteximg.com.br/arquivos/ids/157316-1000-1000/3f33c6d4e4990b3babf6352ee30a5d27b91ce1b3.jpg?v=637334677716270000" 
                className="img-fluid align-ceter" 
            />
                        
        <button className="btn btn-primary rounded-circle">+</button>
            <h4>
                <label className="badge badge-primary">R$ 90,00</label>
            </h4>

            <small>
                <b>Ração Golden adulto pequeno porte 15Kg Frango & Arroz</b>
            </small>           
        </div>
    )
}

export default Product;