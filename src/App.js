import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MedicationDetails from './pages/MedicationDetails';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={MedicationDetails} path="/details/:processNumber" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
