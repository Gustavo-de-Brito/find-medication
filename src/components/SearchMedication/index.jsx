const SearchMedication = () => {
  return (
    <div className="input-group my-3 px-3">
      <input
        type="text"
        className="form-control border-2 border-primary border-opacity-25"
        placeholder="Digite o nome do medicamento"
        aria-label="Pesquisa do medicamento"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-primary border-2 border-primary
          border-opacity-25 fw-bold"
        type="button"
        id="button-addon2"
      >
        Pesquisar
      </button>
    </div>
  );
};

export default SearchMedication;
