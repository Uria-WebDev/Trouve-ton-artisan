import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Artisan from './components/Artisan';
import NotFound from './components/NotFound';
import Result from './components/Result';
import Logo from './img/Logo-1.png';
import Chercher from './img/chercher.png';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <main>
        <nav className="navbar sticky border-bottom background-white z-index-2">
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
                <input className="form-control me-2 margin-top-2 margin-bottom-2" type="search" placeholder="Rechercher" aria-label="Search"
                value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <Link to="/result" state={{ searchTerm }} className="btn width-15 background-lblue-hov margin-top-2 margin-bottom-2" type="submit">
                    <img src={Chercher} alt='Logo de recherche' className='width-100' />
                </Link>
              </form>

                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                  <Link to="/result" state={{ searchTerm : "alimentation" }} className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                    Alimentation
                  </Link>

                  <Link to="/result" state={{ searchTerm : "bâtiment" }} className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                    Bâtiment
                  </Link>

                  <Link to="/result" state={{ searchTerm : "fabrication" }} className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top'>
                    Fabrication
                  </Link>

                  <Link to="/result" state={{ searchTerm : "services" }} className='text-white decoration-none underline-hov padding-top-2 padding-bottom-2 border-top border-bottom'>
                    Services
                  </Link>

                </ul>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artisan' element={<Artisan />} />
          <Route path='/result' element={<Result />} />
          <Route path='/*' element={<Navigate to="/erreur-404" />} />
          <Route path='/erreur-404' element={<NotFound />} />
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
    )
}

export default App;
