import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Artisan1 from './pages/Artisan-1';
import Artisan2 from './pages/Artisan-2';
import Artisan3 from './pages/Artisan-3';
import NotFound from './pages/NotFound';
import Chercher from './img/chercher.png';
import Logo from './img/Logo-1.png';

function App() {
  return (
    <div className="App">
      <main>

        <nav className="navbar sticky border-bottom background-white">
            <div className="container-fluid">
              <button className='border-radius-5 border background-dblue background-lblue-hov' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link to="/" className='width-50'><img src={Logo} alt='Logo du site' className='width-100' /></Link>

              <div className="offcanvas offcanvas-start background-dblue" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                  <form className="d-flex mt-3 border-top" role="search">
                    <input className="form-control me-2 margin-top-2 margin-bottom-2" type="search" placeholder="Rechercher" aria-label="Search" />
                    <button className="btn width-15 background-lblue-hov" type="submit">
                      <img src={Chercher} alt='Logo de recherche' className='width-100' />
                    </button>
                  </form>

                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                    <Link to="/" className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                      Alimentation
                    </Link>

                    <Link to="/" className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                      Bâtiment
                    </Link>

                    <Link to="/" className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                      Fabrication
                    </Link>

                    <Link to="/" className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top border-bottom'>
                      Services
                    </Link>

                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/artisan-1' element={<Artisan1 />}></Route>
            <Route path='/artisan-2' element={<Artisan2 />}></Route>
            <Route path='/artisan-3' element={<Artisan3 />}></Route>
            <Route path='/*' element={<Navigate to="/erreur-404" />}></Route>
            <Route path='/erreur-404' element={<NotFound />}></Route>
          </Routes>

        </main>

        <footer className='background-lblue border-top padding-top-1'>

          <div className='container'>
            <div className='row'>

              <div className='col'>
                <Link className='text-white decoration-none underline-hov' to="/">mentions légales</Link><br />
                <Link className='text-white decoration-none underline-hov' to="/">données personnelles</Link><br />
                <Link className='text-white decoration-none underline-hov' to="/">accessibilité</Link><br />
                <Link className='text-white decoration-none underline-hov' to="/">cookies</Link><br />
              </div>

              <div className='col text-right text-white'>
                <small>adresse et contact :</small>
                <address>
                  <a  className='text-white decoration-none underline-hov' href='https://www.google.fr/maps/place/101+Cr+Charlemagne,+69002+Lyon/@45.740341,4.8165224,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4ebceb7217f5b:0x97dd96361cc92602!8m2!3d45.7403373!4d4.8190973!16s%2Fg%2F11c213z3kc?entry=ttu'>
                    101 cours<br />Charlemagne CS<br />20033 69269 Lyon<br />CEDEX 02 France
                  </a><br />
                  <a className='text-white decoration-none underline-hov' href='tel:+33426734000'>+33 (0)4 26 73 40 00</a>
                </address>
              </div>

            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
