import './home.css';
import SearchMedication from '../../components/SearchMedication';
import { useState } from 'react';
import MedicineList from '../../components/MedicineList';

const Home = () => {
  const [medicines] = useState([]);

  return (
    <div className="view-container bg-primary bg-opacity-75">
      <div className="content mx-auto p-4 shadow-lg rounded-4 bg-white">
        <SearchMedication />
        <h3 className="text-primary ms-4 mt-4">Medicamentos</h3>
        <MedicineList
          foundedMedicine={medicines.length > 0}
          medicines={medicines}
        />
      </div>
    </div>
  );
};

export default Home;
