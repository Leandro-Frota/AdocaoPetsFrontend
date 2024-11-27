import { useForm } from "react-hook-form";
import { registerPet } from "../service/apiService";

function RegisterPet(){
    const { register,handleSubmit,reset } = useForm();
   

    const submit = async(data)=>{
        try{
            await registerPet(data);
            alert("Pet cadastrado com sucesso")
        }catch(error){
            console.error(error)
            alert("Erro ao cadastrar o pet. Verifique os dados e tente novamente.");
        }
        
        reset()
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <form  className="d-flex flex-column gap-4 p-4 border rounded shadow-lg bg-white"
                            onSubmit={handleSubmit(submit)}>
                    <h2 className="mb-4 text-center text-uppercase text-success">
                        Cadastrar Pet
                    </h2>
                    <div className="col-auto mt-6">
                        <label className="form-label">Nome</label>
                        <input className="form-control"
                                type="text"
                                placeholder="Digite o nome"
                                {...register("name", { required: "Nome é obrigatório" })}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Espécie</label>
                        <input className="form-control"
                                type="text"
                                placeholder="Digite a espécie"
                                {...register("species", { required: "Espécie é obrigatório" })}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Data de Nascimento</label>
                        <input className="form-control"
                                type="date"
                                placeholder="Digite a data de nascimento"
                                {...register("dateBorn", { required: "DAta de nascimento é obrigatório" })}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Descrição</label>
                        <input className="form-control"
                                type="text"
                                placeholder="Digite a descrição"
                                {...register("description", { required: "Decrição é obrigatório" })}/>
                    </div>
                    <div className="col-auto">
                        <label className="form-label">Status</label>
                        <select
                            {...register("status", { required: "Status é obrigatório" })}
                            className="form-select"
                        >
                            <option value="">Selecione</option>
                            <option value="Status">Disponível</option>
                            <option value="Status">Adotado</option>
                            
                        </select>
                    </div>
                    <button className="btn btn-success ">Cadastrar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default RegisterPet