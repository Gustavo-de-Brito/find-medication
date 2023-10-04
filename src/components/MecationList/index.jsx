import P from 'prop-types';
import MedicationItem from '../MedicationItem';

const MedicationList = ({ foundedMedication, medications }) => {
  return (
    <ul className="list-group mt-5 px-2 px-md-3">
      {foundedMedication &&
        medications.map((medication) => (
          <MedicationItem
            key={medication.idProduto}
            name={medication.nomeProduto}
            company={medication.razaoSocial}
          />
        ))}
      {!foundedMedication && (
        <h4 className="text-center fs-5 my-5 fw-normal">
          Nenhum medicamento encontrado
        </h4>
      )}
    </ul>
  );
};

MedicationList.propTypes = {
  foundedMedication: P.bool,
  medications: P.array,
};

export default MedicationList;
