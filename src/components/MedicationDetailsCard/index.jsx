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
    <div className="card border-primary border-3">
      <div className="card-body bg-primary bg-opacity-75 text-white">
        <h3 className="card-title">{name}</h3>
        <p className="card-text fw-medium">{fabricant}</p>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item border-primary">
          <label className="text-primary fw-bold fs-5">Princípio ativo:</label>
          <p>{activeIngredient}</p>
        </li>
        <li className="list-group-item border-primary">
          <label className="text-primary fw-bold fs-5">
            Medicamento de referência:
          </label>
          <p>{referenceMedication}</p>
        </li>
        <li className="list-group-item border-primary">
          <label className="text-primary fw-bold fs-5">
            Categoria Regulatória:
          </label>
          <p>{regulatoryCategory}</p>
        </li>
        <li className="list-group-item border-primary">
          <label className="text-primary fw-bold fs-5">
            Classe Terapêutica:
          </label>
          <p>{therapeuticClass}</p>
        </li>
      </ul>
      <a href="#" className="btn btn-primary rounded-0">
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
