import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction';

import './App.scss';

const App = () => {

  const isUnderConstruction =
    import.meta.env.VITE_UNDER_CONSTRUCTION === "true";
    
  return (
    <div className="app">
      {isUnderConstruction ? (
        <Routes>
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;