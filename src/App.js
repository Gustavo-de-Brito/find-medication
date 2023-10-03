import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
