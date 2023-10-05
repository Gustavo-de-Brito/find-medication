import { MedicationContext } from '../../contexts/MedicationDetails';
import DownloadLeafletButton from '../DownloadLeafletButton';
import { useContext } from 'react';

const MedicationDetailsCard = () => {
  const { medicationData, isLoading } = useContext(MedicationContext);

  return (
    <div className="card border-primary border-3 my-auto mx-3 mx-md-2">
      <div className="card-body py-4 bg-primary bg-opacity-75 text-white">
        <h3 className="card-title mb-4">{medicationData.name}</h3>
        <p className="card-text fw-medium">{medicationData.fabricant}</p>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Princípio ativo:
          </label>
          <p>{medicationData.activeIngredient}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Medicamento de referência:
          </label>
          <p>{medicationData.referenceMedication}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Categoria Regulatória:
          </label>
          <p>{medicationData.regulatoryCategory}</p>
        </li>
        <li className="list-group-item border-primary pt-4">
          <label className="text-primary fw-bold fs-5 mb-2">
            Classe Terapêutica:
          </label>
          <p>{medicationData.therapeuticClass}</p>
        </li>
      </ul>
      <DownloadLeafletButton
        isLoading={isLoading}
        leafletCode={medicationData.leafletCode}
      />
    </div>
  );
};

export default MedicationDetailsCard;
