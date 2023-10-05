import SearchMedication from '../../components/SearchMedication';
import { useState } from 'react';
import MedicationList from '../../components/MecationList';
import { findMedicationByName } from '../../services/medicationServices';
import ViewContainer from '../../components/ViewContainer';

const Home = () => {
  const [searchName, setSearchName] = useState('');
  const [medications, setMedications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMedication = async () => {
    setIsLoading(true);
    if (searchName.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      const data = await findMedicationByName(searchName);
      setMedications(data.content);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <ViewContainer>
      <SearchMedication
        searchName={searchName}
        setSearchName={setSearchName}
        getMedication={getMedication}
        isLoading={isLoading}
      />
      <h3 className="text-primary ms-2 ms-md-3 mt-4">Medicamentos</h3>
      <MedicationList
        foundedMedication={medications.length > 0}
        medications={medications}
      />
    </ViewContainer>
  );
};

export default Home;
