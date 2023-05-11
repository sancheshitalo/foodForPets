import Header from "../../components/header";
import dog from "../../assets/dog2.png"

const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion hideCart />
            <div className="row">
            <div className="col-6 text-right my-auto">
                <img src={dog} className="img-fluid"/>
            </div>
            <div className="col-6">
                <div className="box col-8">
                    <h2 className="text-center">
                        A felicidade do seu pet, está aqui!
                    </h2>
                    
                    <br />
                    <br />

                    <input 
                        type="text"     
                        className="form-control form-control-lg mb-3" 
                        placeholder="Nome completo"
                    />

                    <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="E-mail"
                    />
                    
                    <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="Telefone"
                    />

                    <input 
                        type="text" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="CPF"
                    />

                    <input 
                        type="date" 
                        className="form-control form-control-lg mb-3" 
                        placeholder="Data de Nascimento"
                    />

                    <button id="btn-cadastro" className="btn btn-lg btn-block btn-secondary">
                        Finalizar Pedido
                    </button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cadastro; 