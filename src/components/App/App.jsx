import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Services from '../Services/Services';
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
              <Services />
              <Footer />
            </>
          )}
        </div>
      );
    };


export default App;
