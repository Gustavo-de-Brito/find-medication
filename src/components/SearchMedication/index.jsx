import P from 'prop-types';

const SearchMedication = ({
  searchName,
  setSearchName,
  getMedication,
  isLoading,
}) => {
  return (
    <div className="input-group my-3 px-2 px-md-3">
      <input
        type="text"
        className="form-control border-2 border-primary border-opacity-25"
        placeholder="Digite o nome do medicamento"
        aria-label="Pesquisa do medicamento"
        aria-describedby="button-addon2"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        disabled={isLoading}
      />
      <button
        className="btn btn-outline-primary border-2 border-primary
        border-opacity-25 fw-bold"
        type="button"
        id="button-addon2"
        onClick={getMedication}
        disabled={isLoading}
      >
        Pesquisar
      </button>
    </div>
  );
};

SearchMedication.propTypes = {
  searchName: P.string,
  setSearchName: P.func,
  getMedication: P.func,
  isLoading: P.bool,
};

export default SearchMedication;
