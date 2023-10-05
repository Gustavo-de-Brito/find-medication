import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MedicationDetails from './pages/MedicationDetails';
import { MedicationDetailsContext } from './contexts/MedicationDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MedicationDetailsContext>
          <Routes>
            <Route Component={Home} path="/" />
            <Route
              Component={MedicationDetails}
              path="/details/:processNumber"
            />
          </Routes>
        </MedicationDetailsContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
