import { useParams } from 'react-router-dom';
import MedicationDetailsCard from '../../components/MedicationDetailsCard';
import ViewContainer from '../../components/ViewContainer';
import { useEffect, useState } from 'react';
import { findMedicationByProcessNumber } from '../../services/medicationServices';

const MedicationDetails = () => {
  const [medicationData, setMedicationData] = useState({});
  const { processNumber } = useParams();

  const getMedicationDetails = async () => {
    try {
      const data = await findMedicationByProcessNumber(processNumber);
      setMedicationData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMedicationDetails();
  }, []);

  return (
    <ViewContainer>
      <MedicationDetailsCard
        name={medicationData?.nomeComercial}
        fabricant={medicationData?.empresa?.razaoSocial}
        activeIngredient={medicationData?.principioAtivo}
        referenceMedication={medicationData?.medicamentoReferencia}
        regulatoryCategory={medicationData?.categoriaRegulatoria}
        therapeuticClass={
          medicationData?.classesTerapeuticas?.length > 0 &&
          medicationData.classesTerapeuticas[0]
        }
      />
    </ViewContainer>
  );
};

export default MedicationDetails;
