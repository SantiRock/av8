import { useState } from 'react';
import './Nav.css';

export const Nav = ({setLang, lang, alang}) => {
    const [active, setActive] = useState(0)

  return (
    <nav className="nav" aria-label="Navegación principal">
      <ul className="nav__langs">
        <li><button type="button" className={`nav__lang ${alang === "es" ? 'nav__lang--active' : ''}`} onClick={() => setLang("es")}>Es</button></li>
        <li><button type="button" className={`nav__lang ${alang === "pt" ? 'nav__lang--active' : ''}`} onClick={() => setLang("pt")}>Pt</button></li>
        <li><button type="button" className={`nav__lang ${alang === "fr" ? 'nav__lang--active' : ''}`} onClick={() => setLang("fr")}>Fr</button></li>
        <li><button type="button" className={`nav__lang ${alang === "en" ? 'nav__lang--active' : ''}`} onClick={() => setLang("en")}>En</button></li>
      </ul>

      <ul className="nav__dots">
        <li className="nav__item">
          <span className="nav__label" aria-hidden="true">About</span>
          <a href="#about" className={`nav__dot ${active === 0 ? 'nav__dot--active' : ''}`} onClick={() => setActive(0)} aria-label="About"></a>
        </li>
        <li className="nav__item">
          <span className="nav__label" aria-hidden="true">{lang.experiences_title}</span>
          <a href="#experiences" className={`nav__dot ${active === 1 ? 'nav__dot--active' : ''}`} onClick={() => setActive(1)} aria-label="Experiences"></a>
        </li>
        <li className="nav__item">
          <span className="nav__label" aria-hidden="true">{lang.pedagogia_title}</span>
          <a href="#pedagogy" className={`nav__dot ${active === 2 ? 'nav__dot--active' : ''}`} onClick={() => setActive(2)} aria-label="Pedagogy"></a>
        </li>
        <li className="nav__item">
          <span className="nav__label" aria-hidden="true">{lang.contact}</span>
          <a href="#contact" className={`nav__dot ${active === 3 ? 'nav__dot--active' : ''}`} onClick={() => setActive(3)} aria-label="Contact"></a>
        </li>
      </ul>
    </nav>
  );
}

