import { Link } from "react-router-dom"

function SideMenu(){
    return (
        <div className="d-flex flex-column gap-2">
            <Link to="/register-pet"> <div className="p-3 bg-success text-white text-center rounded ">Cadastrar Pet</div></Link>
            <div className="btn p-3 bg-success text-white text-center rounded ">Cadastrar Adotante</div>
            <div className="btn p-3 bg-success text-white text-center rounded ">Cadastrar Adoção</div>
            <Link to="/search-pet"> <div className="btn p-3 bg-success text-white text-center rounded">Buscar pet</div></Link>
        </div>
        
        
    )
}

export default SideMenu