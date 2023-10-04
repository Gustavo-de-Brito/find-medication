import P from 'prop-types';

const MedicationDetailsCard = ({
  name,
  fabricant,
  activeIngredient,
  referenceMedication,
  regulatoryCategory,
  therapeuticClass,
}) => {
  return (
    <div className="card border-primary border-3 my-auto mx-3 mx-md-2">
      <div className="card-body py-4 bg-primary bg-opacity-75 text-white">
        <h3 className="card-title mb-4">{name}</h3>
        <p className="card-text fw-medium">{fabricant}</p>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Princípio ativo:
          </label>
          <p>{activeIngredient}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Medicamento de referência:
          </label>
          <p>{referenceMedication}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Categoria Regulatória:
          </label>
          <p>{regulatoryCategory}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Classe Terapêutica:
          </label>
          <p>{therapeuticClass}</p>
        </li>
      </ul>
      <a href="#" className="btn btn-primary fw-semibold rounded-0 py-3 fs-5">
        Download da Bula
      </a>
    </div>
  );
};

MedicationDetailsCard.propTypes = {
  name: P.string,
  fabricant: P.string,
  activeIngredient: P.string,
  referenceMedication: P.string,
  regulatoryCategory: P.string,
  therapeuticClass: P.string,
};

export default MedicationDetailsCard;
