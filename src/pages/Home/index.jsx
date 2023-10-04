import './home.css';
import SearchMedication from '../../components/SearchMedication';
import { useState } from 'react';
import MedicineList from '../../components/MedicineList';
import { findMedicineByName } from '../../services/medicineServices';

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
    <div className="view-container bg-primary bg-opacity-75">
      <div
        className="content mx-auto p-1 p-xl-4 shadow-lg rounded-4 bg-white
        border-bottom border-white border-5"
      >
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
      </div>
    </div>
  );
};

export default Home;
