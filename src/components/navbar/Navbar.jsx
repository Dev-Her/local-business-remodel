import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


   const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <>
     <nav>
        
          <span className="nav__logo"><span className="logo__span">K-TOWN</span> <br /> CUSTOMS</span>
          <div className="nav__links">
            <a href="#hero" className="nav__link">
              Home
            </a>
            <a href="#services" className="nav__link">
              Services
            </a>
            <a href="#gallery" className="nav__link">
              Gallery
            </a>
            <a href="#about" className="nav__link">
              About
            </a>
            <a href="#contact" className="nav__link">
              Contact
            </a>
            <a href="#reviews" className="nav__link">
              Reviews
            </a>
          </div>

          <button className="nav__quote">
            <a href="#contact" className="nav__quote__btn">
              Get a Quote
            </a>
          </button>

          <i className="fa-solid fa-bars open__menu" onClick={toggleMenu}></i>
      
      </nav>



      <nav className={menuOpen ? "menu menu--open" : "menu"}>
        <i className="fa-solid fa-x close__menu" onClick={closeMenu}></i>

        <div className="menu__links">
          <a href="#services" className="menu__link" onClick={closeMenu}>Services</a>
          <a href="#gallery" className="menu__link" onClick={closeMenu}>Gallery</a>
          <a href="#about" className="menu__link" onClick={closeMenu}>About</a>
          <a href="#contact" className="menu__link" onClick={closeMenu}>Contact</a>
          <a href="#reviews" className="menu__link" onClick={closeMenu}>Reviews</a>
        </div>
        
      </nav>

    </>
  )
}

export default Navbar;
