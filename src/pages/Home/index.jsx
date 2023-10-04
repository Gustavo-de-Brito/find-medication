import './home.css';
import SearchMedication from '../../components/SearchMedication';

const Home = () => {
  return (
    <div className="view-container bg-primary bg-opacity-75">
      <div className="content mx-auto p-4 shadow-lg rounded-4 bg-white">
        <SearchMedication />
      </div>
    </div>
  );
};

export default Home;
