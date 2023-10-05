import { useParams } from 'react-router-dom';
import MedicationDetailsCard from '../../components/MedicationDetailsCard';
import ViewContainer from '../../components/ViewContainer';
import { useContext, useEffect } from 'react';
import { findMedicationByProcessNumber } from '../../services/medicationServices';
import { MedicationContext } from '../../contexts/MedicationDetails';
import LoadingSpinner from '../../components/LoadingSpinner';

const MedicationDetails = () => {
  const { medicationData, setMedicationData, isLoading, setIsLoading } =
    useContext(MedicationContext);
  const { processNumber } = useParams();

  const formatMedicationData = (medication) => {
    const therapeuticClass =
      medication.classesTerapeuticas?.length > 0 &&
      medication.classesTerapeuticas[0];

    return {
      name: medication.nomeComercial,
      fabricant: medication.empresa?.razaoSocial,
      activeIngredient: medication.principioAtivo,
      referenceMedication: medication.medicamentoReferencia,
      regulatoryCategory: medication.categoriaRegulatoria,
      therapeuticClass,
      leafletCode: medication.codigoBulaPaciente,
    };
  };

  const getMedicationDetails = async () => {
    setIsLoading(true);

    try {
      const data = await findMedicationByProcessNumber(processNumber);
      const formatedData = formatMedicationData(data);
      setMedicationData(formatedData);
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
          isLoading={isLoading}
          medicationData={medicationData}
        />
      )}
      <LoadingSpinner isLoading={isLoading} />
    </ViewContainer>
  );
};

export default MedicationDetails;
