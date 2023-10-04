import P from 'prop-types';
import MedicineItem from '../MedicineItem';

const MedicineList = ({ foundedMedicine, medicines }) => {
  return (
    <ul className="list-group mt-5 px-3">
      {foundedMedicine &&
        medicines.map((medicine) => (
          <MedicineItem
            key={medicine.idProduto}
            name={medicine.nomeProduto}
            company={medicine.razaoSocial}
          />
        ))}
      {!foundedMedicine && (
        <h4 className="text-center fs-5 my-5 fw-normal">
          Nenhum medicamento encontrado
        </h4>
      )}
    </ul>
  );
};

MedicineList.propTypes = {
  foundedMedicine: P.bool,
  medicines: P.array,
};

export default MedicineList;
