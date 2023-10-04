import { useParams } from 'react-router-dom';
import MedicationDetailsCard from '../../components/MedicationDetailsCard';
import ViewContainer from '../../components/ViewContainer';
import { useEffect, useState } from 'react';
import { findMedicationByProcessNumber } from '../../services/medicationServices';

const MedicationDetails = () => {
  const [medicationData, setMedicationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { processNumber } = useParams();

  const getMedicationDetails = async () => {
    setIsLoading(true);

    try {
      const data = await findMedicationByProcessNumber(processNumber);
      setMedicationData(data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getMedicationDetails();
  }, []);

  return (
    <ViewContainer>
      {!isLoading && (
        <MedicationDetailsCard
          name={medicationData?.nomeComercial}
          fabricant={medicationData?.empresa?.razaoSocial}
          activeIngredient={medicationData?.principioAtivo}
          referenceMedication={medicationData?.medicamentoReferencia}
          regulatoryCategory={medicationData?.categoriaRegulatoria}
          therapeuticClass={
            medicationData?.classesTerapeuticas?.length > 0
              ? medicationData.classesTerapeuticas[0]
              : ''
          }
        />
      )}
      {isLoading && (
        <div
          className="spinner-border text-primary m-auto"
          style={{ width: '6rem', height: '6rem' }}
          role="status"
        >
          <span className="visually-hidden">Carregando...</span>
        </div>
      )}
    </ViewContainer>
  );
};

export default MedicationDetails;
