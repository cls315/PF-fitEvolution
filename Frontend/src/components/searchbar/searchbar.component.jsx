//Components
import Alert from '../alert/alert.component'
//Common imports
import { URLSERVER } from '../../../configURL.js';
import imagelogo from '../../images/imageLogo.jpg'
//Styles
import './searchbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link, useMatch } from 'react-router-dom';

function SearchBar(props) {
  const isActive = useMatch('/');

  const isActiveAbout = useMatch('/about');

  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-light '>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo03'
          aria-controls='navbarTogglerDemo03'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>

        <Link
          class='navbar-brand'
          to={'/'}>
          <img
            src={imagelogo}
            alt='logo'
          />
        </Link>

        <div
          class='collapse navbar-collapse'
          id='navbarTogglerDemo03'>
          <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li class='nav-item'>
              <button className='bt-nav-landing'>
                <Link
                  className={`nav-link  ${isActive ? 'text-warning' : ''}`}
                  to={'/'}>
                  Inicio
                </Link>
              </button>
            </li>

            <li class='nav-item'>
              <button className='bt-nav-landing'>
                <Link
                  className={`nav-link  ${isActiveAbout ? 'text-warning' : ''}`}
                  to={'/about'}>
                  Sobre Nosotros
                </Link>
              </button>
            </li>

            <li class='nav-item active'>
              <button className='bt-nav-landing'>
                <a
                  class='nav-link'
                  href='#'>
                  Iniciar sesion <span class='sr-only'>*</span>
                </a>
              </button>
            </li>

            <li class='nav-item'>
              <button className='bt-nav-landing-register'>
                <a
                  class='nav-link '
                  href='#'>
                  Registrarse gratis
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SearchBar;
