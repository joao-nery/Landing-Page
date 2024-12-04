import "./navbar.modules.css";
import barsIcon from '../../icons/bares.png';

export function Navbar() {
  return (
    <nav className="Main-Navbar">

      <div className="Title-Logo">
        <p>AT Softwares</p>
      </div>

      <div className="nav-links">
        <picture>
            <img src={barsIcon} alt="icon"/>
        </picture>

        <ul className="link-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <button className="call-button">Contratar</button>
        </ul>

      </div>
    </nav>
  );
}
