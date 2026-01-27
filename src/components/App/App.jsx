import { Routes, Route } from 'react-router-dom';

import UnderConstruction from '../UnderConstruction/UnderConstrution';

import './App.scss';

const App = () => {

  const isUnderConstruction =
    import.meta.env.VITE_UNDER_CONSTRUCTION === "true";
    
  return (
    <Routes>
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
};

export default App;