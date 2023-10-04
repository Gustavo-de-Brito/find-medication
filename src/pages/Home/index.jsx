import SearchMedication from '../../components/SearchMedication';
import { useState } from 'react';
import MedicineList from '../../components/MedicineList';
import { findMedicineByName } from '../../services/medicineServices';
import ViewContainer from '../../components/ViewContainer';

const Home = () => {
  const [searchName, setSearchName] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMedication = async () => {
    setIsLoading(true);

    try {
      const data = await findMedicineByName(searchName);
      setMedicines(data.content);
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
      <MedicineList
        foundedMedicine={medicines.length > 0}
        medicines={medicines}
      />
    </ViewContainer>
  );
};

export default Home;
