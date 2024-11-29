import React, { useState, useEffect } from "react";

import { getPet } from "../service/apiService";

function SearchPets() {
  const [pets, setPets] = useState([]); 
  const [filteredPets, setFilteredPets] = useState([]); 
  const [searchCriteria, setSearchCriteria] = useState({
    name: "",
    species: "",
    status: "",
  });

  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPet.get("/pet"); 
        console.log("Pets recebidos da API:", response.data); 
        setPets(response.data); 
        setFilteredPets(response.data); 
      } catch (error) {
        console.error("Erro ao buscar os pets:", error);
      }
    };

    fetchPets();
  }, []);

  
  const handleSearch = (e) => {
    e.preventDefault(); 

    const { name, species, status } = searchCriteria;

    const results = pets.filter((pet) => {
      return (
        (name ? pet.name.toLowerCase().includes(name.toLowerCase()) : true) &&
        (species ? pet.species.toLowerCase().includes(species.toLowerCase()) : true) &&
        (status ? pet.status === status : true)
      );
    });

    setFilteredPets(results); 
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="mb-4 text-center text-uppercase text-success">
            Buscar Pets
          </h2>
          
          <form
            className="d-flex flex-column gap-4 p-4 border rounded shadow-lg bg-white"
            onSubmit={handleSearch}
          >
            <div>
              <label className="form-label">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Digite o nome"
                className="form-control"
                value={searchCriteria.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label">Espécie</label>
              <input
                type="text"
                name="species"
                placeholder="Digite a espécie"
                className="form-control"
                value={searchCriteria.species}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label">Status</label>
              <select
                name="status"
                className="form-select"
                value={searchCriteria.status}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="Disponível">Disponível</option>
                <option value="Adotado">Adotado</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">
              Buscar
            </button>
          </form>

          
          <h3 className="mt-5 text-center">Resultados da Busca</h3>
          <ul className="list-group mt-3">
            {filteredPets.length > 0 ? (
              filteredPets.map((pet, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>Nome:</strong> {pet.name} <br />
                    <strong>Espécie:</strong> {pet.species} <br />
                    <strong>Data de Nascimento:</strong> {pet.dateBorn} <br />
                    <strong>Descrição:</strong> {pet.description} <br />
                    <strong>Status:</strong> {pet.status}
                  </div>
                </li>
              ))
            ) : (
              <li className="list-group-item text-center">Nenhum pet encontrado.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPets;
