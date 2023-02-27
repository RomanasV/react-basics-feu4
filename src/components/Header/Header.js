import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-wrapper">
          <div className="image-wrapper">
            <Link to="/">
              <img className="logo" src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt="CodeAcademy logo" />
            </Link>
          </div>
      
          <nav className="main-navigation">
            <ul className="main-menu">
              <li className="menu-item"><a className="menu-link" href="#">Studentams</a></li>
              <li className="menu-item"><a className="menu-link" href="#">Verslui</a></li>
              <li className="menu-item">
                <Link className="menu-link" to="/codeacademy/programs">Programos</Link>
              </li>
              <li className="menu-item"><a className="menu-link" href="#">Apie mus</a></li>
              <li className="menu-item">
                <Link className="menu-link" to="/codeacademy/news">Naujienos</Link>
              </li>
              <li className="menu-item"><a className="menu-link" href="#">IT testaas</a></li>
              <li className="menu-item"><a className="menu-link" href="#">Kontaktai</a></li>
              <li className="menu-item"><a className="menu-link" href="#">EN</a></li>
            </ul>

            <a className="button" href="tel:+37045646444">Skambinti</a>
          </nav>
        </div>
      </div>
    </header>
  )
}