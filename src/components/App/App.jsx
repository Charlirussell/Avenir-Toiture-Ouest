import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Contact from '../Contact/Contact'
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import Privacy from '../PrivacyPolicy/Privacy';
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

              <Routes>

                {/* MAIN ONE-PAGE SITE */}
                <Route
                  path="/"
                  element={
                    <>
                      <NavBar />
                      <Home />
                      <Services />
                      <Contact />
                      <Reviews />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/mentions-legales"
                  element={<Privacy />}
                />
              </Routes>

            )}

          </div>
        );
      };


export default App;
