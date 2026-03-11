import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import UnderConstruction from '../UnderConstruction/UnderConstruction';

import './App.scss';


const App = () => {

  const isUnderConstruction =
    import.meta.env.VITE_UNDER_CONSTRUCTION === "false";
    
  return (
    <div className="app">
          {isUnderConstruction ? (
            <UnderConstruction />
          ) : (
            <>
              <NavBar />
              <Home />
              <Footer />
            </>
          )}
        </div>
      );
    };


export default App;
