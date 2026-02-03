import { Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstrution';

import './App.scss';

const App = () => {

  const isUnderConstruction =
    import.meta.env.VITE_UNDER_CONSTRUCTION === "true";
    
  return (
    <>
      <Routes>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;